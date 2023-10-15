import { prisma } from '../../../lib/prisma'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const { name, username } = await request.json()

  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userExists) return new Response('Username already taken', { status: 400 })

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  // setCookie(request, '@ignitecall:userId', user.id, {
  //   maxAge: 60 * 60 * 24 * 7, // 7 days
  //   path: '/',
  // })

  cookies().set('@ignitecall:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  return Response.json(user, { status: 201 })
}
