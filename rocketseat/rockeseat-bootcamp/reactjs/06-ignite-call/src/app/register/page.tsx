'use client'

import { FormStep } from '@/components/FormStep'
import { SubmitButton } from '@/components/SubmitButton'
import { api } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter pelo menos 3 letras.' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Page() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    if (searchParams?.get('username'))
      setValue('username', String(searchParams?.get('username')))
  }, [searchParams, setValue])

  async function handleRegister(data: RegisterFormData) {
    try {
      await api.post('/users', {
        name: data.name,
        username: data.username,
      })

      router.push('/register/connect-calendar')
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err.response.data.message)
      } else console.log(err)
    }
  }

  return (
    <div className="m-auto flex max-w-md flex-col items-center gap-4 py-12">
      <header>
        <h2 className="text-xl font-bold text-gray-100">
          Bem-vindo ao Ignite Call!
        </h2>
        <p>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </p>
      </header>

      <FormStep step={4} currentStep={0} />

      <form
        onSubmit={handleSubmit(handleRegister)}
        className="flex w-full flex-col gap-4 rounded border border-gray-600 bg-gray-800 p-4 text-sm"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Nome de usuário</label>
          <input
            className="rounded bg-gray-900 px-4 py-2 text-gray-100"
            id="username"
            type="text"
            placeholder="seu usuário"
            {...register('username')}
          />
          {errors.username && (
            <span className="text-red text-xs">{errors.username.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="name">Nome completo</label>
          <input
            className="rounded bg-gray-900 px-4 py-2 text-gray-100"
            id="name"
            type="text"
            placeholder="Seu nome"
            {...register('name')}
          />
          {errors.name && (
            <span className="text-red text-xs">{errors.name.message}</span>
          )}
        </div>

        <SubmitButton disabled={isSubmitting} text="Próximo passo" />
      </form>
    </div>
  )
}
