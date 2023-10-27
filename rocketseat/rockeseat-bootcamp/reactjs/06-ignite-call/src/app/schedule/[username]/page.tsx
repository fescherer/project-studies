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
    <div>
      <div className="flex flex-col items-center">
        <Image
          alt="avatar"
          width={40}
          height={40}
          src={user.avatar_url ?? ''}
        />
        <span>{user.name}</span>
        <p>{user.bio}</p>
      </div>

      <ScheduleForm />
    </div>
  )
}
