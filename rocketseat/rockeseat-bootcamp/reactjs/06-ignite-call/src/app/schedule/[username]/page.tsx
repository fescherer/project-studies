import { ScheduleForm } from '@/components/ScheduleForm'
import { prisma } from '../../../lib/prisma'
import Image from 'next/image'

interface ScheduleProps {
  params: {
    username: string
  }
}

export default async function Schedule({ params }: ScheduleProps) {
  const user = await prisma.user.findUnique({
    where: {
      username: params.username,
    },
  })

  if (!user) {
    return {
      notFound: true,
    }
  }

  return (
    <div className="m-auto flex max-w-md flex-col items-center gap-4 py-12">
      <div className="flex flex-col items-center border-0">
        <Image
          alt="avatar"
          width={80}
          height={80}
          className="border-ignite-500 rounded-full border"
          src={user.avatar_url ?? ''}
        />
        <span className="text-white">{user.name}</span>
        <p>{user.bio}</p>
      </div>

      <ScheduleForm />
    </div>
  )
}
