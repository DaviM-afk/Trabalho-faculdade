'use client'

import * as React from 'react'
import BasicTable from "../components/basicTable/BasicTable";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button, FormControl, InputLabel, MenuItem, NativeSelect, Select, TextField } from '@mui/material';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import MyForm from '../components/MyForm/MyForm';

export default function Home() {

    const router = useRouter();

    function createData(
        descricao: string,
        valor: number,
        tipo: string,
    ) {
        return { descricao, valor, tipo };
    }

    const rows = [ ];

    const [stateRow, setStateRow] = React.useState(rows)


    const handleSubmit = (values, { resetForm }) => {
        const newRow = createData(values.descricao.toUpperCase(), parseFloat(values.valor), values.tipo);

        setStateRow(prevRows => [...prevRows, newRow]);

        resetForm();
        console.log(stateRow)
    };

    const initialValues = {
        descricao: '',
        valor: '',
        tipo: '',
    };

    const addressSchema = yup.object().shape({
        descricao: yup
            .string()
            .required(`preencha todos os campos!`)
            .max(70, 'máximo de caracteres excedido (70)'),
        valor: yup
            .number()
            .required(`preencha todos os campos!`)
            .max(99999999999, 'máximo de caracteres excedido (99999999999)'),
        tipo: yup
            .string()
            .required(`preencha todos os campos!`)
    });

    return (
        <div className="container max-w-4xl m-auto mt-20">
            <MyForm
                onSubmit={handleSubmit}
                initialValues={initialValues}
                validationSchema={addressSchema}
            />

            <BasicTable rows={stateRow} />
        </div>
    )
} 
