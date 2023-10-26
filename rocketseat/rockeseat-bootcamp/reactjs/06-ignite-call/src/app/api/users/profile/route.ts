import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../../auth/[...nextauth]/route'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const updateProfileBodySchema = z.object({
  bio: z.string(),
})

export async function PUT(request: Request) {
  const session = await getServerSession(buildNextAuthOptions())

  if (!session) {
    return Response.json({ status: 401 })
  }

  const { bio } = await request.json()
  const result = updateProfileBodySchema.safeParse({ bio })

  if (result.success) {
    // console.log(result.data)
    // return Response.json({ status: 204 })

    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        bio: result?.data?.bio,
      },
    })
    return Response.json({ status: 204 })
  } else {
    return Response.json({ status: 501 })
  }
}
