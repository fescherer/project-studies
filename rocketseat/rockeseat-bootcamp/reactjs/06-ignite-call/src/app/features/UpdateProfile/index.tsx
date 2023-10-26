'use client'

import { SubmitButton } from '@/components/SubmitButton'
import { zodResolver } from '@hookform/resolvers/zod'
import { User } from 'next-auth'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const updateProfileSchema = z.object({
  bio: z.string(),
})

type UpdateProfileData = z.infer<typeof updateProfileSchema>

type UpdateProfileFeatureProps = {
  user: User | undefined
}

export function UpdateProfileFeature({ user }: UpdateProfileFeatureProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema),
  })

  async function handleUpdateProfile(data: UpdateProfileData) {
    console.log(data)
  }

  return (
    <form
      className="mt-2 flex flex-col gap-2"
      onSubmit={handleSubmit(handleUpdateProfile)}
    >
      <label className="flex flex-col gap-1">
        <p>Foto de perfil</p>
        <Image
          className="border-ignite-500 rounded-full border"
          alt="foto de perfil"
          width={60}
          height={60}
          src={user?.avatar_url ?? ''}
        />
      </label>

      <label>
        <p>Sobre você</p>
        <textarea {...register('bio')} />
        <p>
          Fale um pouco sobre você. Isto será exibido em sua página pessoal.
        </p>
      </label>

      <SubmitButton
        disabled={isSubmitting}
        // handleSubmit={() => {}}
        text="Finalizar"
      />
    </form>
  )
}
