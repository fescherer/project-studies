'use client'

import { FormStep } from '@/components/FormStep'
import { api } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from '@phosphor-icons/react'
import { AxiosError } from 'axios'
import { useSearchParams } from 'next/navigation'
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

      <FormStep items={[false, false, false, false]} />

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

        <button
          disabled={isSubmitting}
          className="bg-ignite-500 hover:bg-ignite-600 flex items-center justify-center gap-1 rounded-md px-4 py-2 text-gray-100 transition-all"
        >
          <span>Próximo passo</span>
          <ArrowRight />
        </button>
      </form>
    </div>
  )
}
