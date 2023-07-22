import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'

const schema = z.object({
  email: z
    .string({ required_error: 'Informe o e-mail' })
    .email('E-mail inválido'),

  password: z
    .string({ required_error: 'Informe a senha.' })
    .min(6, 'A senha deve ter pelo menos 6 dígitos.'),
})

type FormProps = z.infer<typeof schema>

const useFormSignIn = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(true)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schema),
  })

  const handleTogglePassword = () => {
    setPasswordVisible((prevState) => !prevState)
  }

  const handleFormSubmit = ({ email, password }: FormProps) => {
    console.log('Email: ', email)
    console.log('Password: ', password)
  }

  return {
    isPasswordVisible,
    control,
    errors,
    handleSubmit,
    handleFormSubmit,
    handleTogglePassword,
    Controller,
  }
}

export { useFormSignIn }
