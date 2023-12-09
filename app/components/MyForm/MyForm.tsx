import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Button, FormControl, NativeSelect, TextField } from '@mui/material';
import * as yup from 'yup';

const MyForm = ({ onSubmit, initialValues, validationSchema }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <div className='flex flex-col space-y-5 max-w-md m-auto mt-10'>
                    <h1 className='text-center'>Inserir novo registro</h1>
                    <label className='relative'>
                        <Field id="standard-basic" label="Descricao" variant="standard" name="descricao" as={TextField} className="w-full" />
                        <span className='absolute top-11 left-0 text-sm font-bold text-red-600'>
                            <ErrorMessage name='descricao' />
                        </span>
                    </label>
                    <label className='relative'>
                        <Field id="standard-basic" type='number' label="Valor" variant="standard" name="valor" as={TextField} className="w-full" />
                        <span className='absolute top-11 left-0 text-sm font-bold text-red-600'>
                            <ErrorMessage name='valor' />
                        </span>
                    </label>
                    <label className='relative'>
                        <FormControl fullWidth>
                            <Field
                                defaultValue='DESPESA'
                                as={NativeSelect}
                                name="tipo"
                            >
                                <option value=''>Selecione</option>
                                <option value='DESPESA'>Despesa</option>
                                <option value='RENDA'>Renda</option>
                            </Field>
                        </FormControl>
                        <span className='absolute top-7 left-0 text-sm font-bold text-red-600'>
                            <ErrorMessage name='tipo' />
                        </span>
                    </label>

                    <Button variant="outlined" className='max-w-sm m-auto' type='submit'>Entrar</Button>
                </div>
            </Form>
        </Formik>
    );
};

export default MyForm;