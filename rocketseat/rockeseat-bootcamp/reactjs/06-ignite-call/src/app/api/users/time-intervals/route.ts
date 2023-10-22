import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../../auth/[...nextauth]/route'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const timeIntervalsBodySchema = z.object({
  intervals: z.array(
    z.object({
      weekDay: z.number(),
      startTimeInMinutes: z.number(),
      endTimeInMinutes: z.number(),
    }),
  ),
})

export async function POST(request: Request) {
  const session = await getServerSession(buildNextAuthOptions())

  if (!session) {
    return Response.json({ status: 401 })
  }

  const { intervals } = await request.json()
  const result = timeIntervalsBodySchema.safeParse({ intervals })

  if (result.success) {
    await Promise.all(
      result.data.intervals.map((interval) => {
        return prisma.userTimeInterval.create({
          data: {
            week_day: interval.weekDay,
            time_start_in_minutes: interval.startTimeInMinutes,
            time_end_in_minutes: interval.endTimeInMinutes,
            user_id: session.user?.id,
          },
        })
      }),
    )

    return Response.json({ status: 201 })
  } else {
    return Response.json({ status: 501 })
  }
}
