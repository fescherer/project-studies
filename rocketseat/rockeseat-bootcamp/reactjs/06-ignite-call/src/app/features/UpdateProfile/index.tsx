'use client'

import { SubmitButton } from '@/components/SubmitButton'
import { api } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { User } from 'next-auth'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
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
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema),
  })

  async function handleUpdateProfile(data: UpdateProfileData) {
    await api.put('/users/profile', {
      bio: data.bio,
    })

    await router.push(`/schedule/${user?.username}`)
  }

  return (
    <form
      className="flex w-full flex-col gap-4 rounded border border-gray-600 bg-gray-800 p-4 text-sm"
      onSubmit={handleSubmit(handleUpdateProfile)}
    >
      <label className="flex flex-col items-center gap-1">
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
        <textarea
          className="focus:border-ignite-600 box-border min-h-[80px] w-full resize-y rounded border-2 border-gray-900 bg-gray-900 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          {...register('bio')}
        />
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
