'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormStep } from '@/components/FormStep'
import { getWeekDays } from '@/util/get-week-days'
import { useRouter } from 'next/navigation'
import { useFieldArray, useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { convertTimeStringToMinutes } from '@/util/convert-time-string-to-minutes'
import { api } from '@/lib/axios'
import { SubmitButton } from '@/components/SubmitButton'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

const timeIntervalsFormSchema = z.object({
  intervals: z
    .array(
      z.object({
        weekDay: z.number().min(0).max(6),
        enabled: z.boolean(),
        startTime: z.string(),
        endTime: z.string(),
      }),
    )
    .length(7)
    .transform((intervals) => intervals.filter((interval) => interval.enabled))
    .refine((intervals) => intervals.length > 0, {
      message: 'Você precisa selecionar pelo menos um dia da semana',
    })
    .transform((intervals) => {
      return intervals.map((interval) => {
        return {
          weekDay: interval.weekDay,
          startTimeInMinutes: convertTimeStringToMinutes(interval.startTime),
          endTimeInMinutes: convertTimeStringToMinutes(interval.endTime),
        }
      })
    })
    .refine(
      (intervals) => {
        return intervals.every(
          (interval) =>
            interval.endTimeInMinutes - 60 >= interval.startTimeInMinutes,
        )
      },
      {
        message:
          'O horário de término deve ser pelo menos 1h distante do início.',
      },
    ),
})

type TimeIntervalsFormInput = z.input<typeof timeIntervalsFormSchema>
type TimeIntervalsFormOutput = z.output<typeof timeIntervalsFormSchema>

export default function Page() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<TimeIntervalsFormInput>({
    resolver: zodResolver(timeIntervalsFormSchema),
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
  })

  const router = useRouter()
  function handleNextStep() {
    router.push('/register/update-profile')
  }

  const weekDays = getWeekDays({})

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })

  const intervals = watch('intervals')

  async function handleSetTimeIntervals(data: unknown) {
    const { intervals } = data as TimeIntervalsFormOutput

    console.log(intervals)

    await api.post('/users/time-intervals', {
      intervals,
    })
  }

  return (
    <div className="m-auto flex max-w-md flex-col items-center gap-4 py-12">
      <header>
        <h2 className="text-xl font-bold text-gray-100">Quase lá</h2>
        <p>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </p>
      </header>

      <FormStep step={4} currentStep={2} />

      <form
        onSubmit={handleSubmit(handleSetTimeIntervals)}
        className="flex w-full flex-col gap-4 rounded bg-gray-800 p-4"
      >
        <div className="border">
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 border-b-2 p-2">
              <Controller
                name={`intervals.${index}.enabled`}
                control={control}
                render={({ field }) => {
                  return (
                    <Checkbox.Root
                      className="data-[state=checked]:bg-ignite-500 focus:border-ignite-600 data-[state=checked]:border-ignite-600 flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded border-2 border-gray-900 bg-gray-900"
                      onCheckedChange={(checked) =>
                        field.onChange(checked === true)
                      }
                      checked={field.value}
                    >
                      <Checkbox.Indicator className="h-4 w-4 text-white">
                        <Check weight="bold" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                  )
                }}
              />

              <span className="text-md flex-1">{weekDays[field.weekDay]}</span>
              <input
                type="time"
                className="focus:border-ignite-500 box-border flex cursor-text items-center rounded border-2 border-gray-900 bg-gray-900 px-2 py-1 disabled:cursor-not-allowed disabled:opacity-50"
                step={60}
                disabled={intervals[index].enabled === false}
                {...register(`intervals.${index}.startTime`)}
              />
              <input
                type="time"
                step={60}
                className="focus:border-ignite-500 box-border flex cursor-text items-center rounded border-2 border-gray-900 bg-gray-900 px-2 py-1 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={intervals[index].enabled === false}
                {...register(`intervals.${index}.endTime`)}
              />
            </div>
          ))}
        </div>

        {errors.intervals && (
          <span className="text-red text-sm">{errors.intervals.message}</span>
        )}

        <SubmitButton
          disabled={isSubmitting}
          handleSubmit={handleNextStep}
          text="Próximo passo"
        />
      </form>
    </div>
  )
}
