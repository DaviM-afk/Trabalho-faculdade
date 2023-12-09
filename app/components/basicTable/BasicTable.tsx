import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Row {
    descricao: string;
    valor: number;
    tipo: string;
}

interface BasicTableProps {
    rows: Row[];
}

const BasicTable: React.FC<BasicTableProps> = ({ rows }) => {
    const calculateTotal = () => {
        return rows.reduce((total, row) => {
            return total + (row.tipo === 'DESPESA' ? -row.valor : row.valor);
        }, 0);
    };

    return (
        <TableContainer component={Paper}>
            <h1 className={calculateTotal() < 0 ? 'text-red-600 font-bold' : 'text-green-600 font-bold'}>Total: {calculateTotal()}</h1>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Descrição</TableCell>
                        <TableCell align="right">Valor</TableCell>
                        <TableCell>Tipo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.map((row) => (
                        <TableRow
                            key={row.descricao}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.descricao}
                            </TableCell>
                            <TableCell align="right" className={row.tipo === 'DESPESA' ? 'text-red-600 font-bold' : 'text-green-600 font-bold'}>
                                {row.tipo === 'DESPESA' ? '- ' : '+ '}
                                {row.valor}
                            </TableCell>
                            <TableCell>{row.tipo}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BasicTable;
