'use client'

import { TextField, Button } from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/navigation';
import { TbCoinFilled } from "react-icons/tb";
import * as yup from 'yup';

export default function Home() {

  const router = useRouter();

  const handleSubmit = (values) => {
    router.push('/home')
  }

  const addressSchema = yup.object().shape({
    email: yup
      .string()
      .required(`preencha todos os campos!`)
      .max(70, 'máximo de caracteres excedido (70)'),
      password: yup
      .string()
      .required(`preencha todos os campos!`)
      .min(4, 'minimo de 4 caracteres')
      .max(70, 'máximo de caracteres excedido (70)'),
  });

  return (
    <main className='w-screen h-screen flex flex-col items-center justify-center'>
      <Formik
        initialValues={{
          email: ``,
          password: ``,
        }}
        onSubmit={handleSubmit}
        validationSchema={addressSchema}
        className='flex flex-col space-y-3 container items-center'
      >
        <Form className='sm:w-96 w-11/12 flex flex-col space-y-5 -mt-56 '>
          <TbCoinFilled size={45} className="text-green-600 m-auto" />
          <h1 className='font-bold text-3xl m-auto' >Davi Banking</h1>
          <div className='flex flex-col space-y-5'>
            <label className='relative'>
              <Field id="standard-basic" type='email' label="Email" variant="standard" name="email" as={TextField} className="w-full" />
              <span className='absolute top-11 left-0 text-sm font-bold text-red-600'>
                <ErrorMessage name='email' />
              </span>
            </label>
            <label className='relative'>
              <Field id="standard-basic" type='password' label="Password" variant="standard" name="password" as={TextField} className="w-full" />
              <span className='absolute top-11 left-0 text-sm font-bold text-red-600'>
                <ErrorMessage name='password'/>
              </span>
            </label>
          </div>

          <Button variant="outlined" className='max-w-sm m-auto' type='submit'>Entrar</Button>
        </Form>
      </Formik>
      <form>

      </form>
    </main>
  )
}
