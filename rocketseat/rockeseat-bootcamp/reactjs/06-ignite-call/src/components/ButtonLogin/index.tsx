'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from '@phosphor-icons/react'
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
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export function ButtonLogin() {
  const { register, handleSubmit } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  function handleRegister(data: RegisterFormData) {
    console.log(data)
  }

  return (
    <form
      className="flex gap-2 rounded bg-gray-800 p-4 text-sm"
      onSubmit={handleSubmit(handleRegister)}
    >
      <div className="flex items-center gap-1">
        <span>ignite.com/</span>
        <input
          {...register('username')}
          className="rounded bg-gray-900 px-4 py-2 text-white"
          placeholder="seu-usuário"
        />
      </div>
      <button className="bg-ignite-500 flex items-center gap-2 whitespace-nowrap rounded px-4 py-2 text-white transition-all hover:brightness-75 ">
        <span>Reservar</span>
        <ArrowRight />
      </button>
    </form>
  )
}
