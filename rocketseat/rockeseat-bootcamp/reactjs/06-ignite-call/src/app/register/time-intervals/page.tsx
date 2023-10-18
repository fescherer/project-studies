'use client'

import { FormStep } from '@/components/FormStep'
import { getWeekDays } from '@/util/get-week-days'
import { ArrowRight } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { useFieldArray, useForm, Controller } from 'react-hook-form'
import { z } from 'zod'

const timeIntervalsFormSchema = z.object({})

export default function Page() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({
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
    router.push('/register/time-intervals')
  }

  const weekDays = getWeekDays()

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })

  const intervals = watch('intervals')

  async function handleSetTimeIntervals(data: any) {
    console.log(data)
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

      <div className="flex w-full flex-col gap-4 rounded bg-gray-800 p-4">
        <form
          onSubmit={handleSubmit(handleSetTimeIntervals)}
          className="border"
        >
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 border-b-2 p-2">
              <Controller
                name={`intervals.${index}.enabled`}
                control={control}
                render={({ field }) => {
                  return (
                    <input
                      // onCheckedChange={(checked) =>
                      //   field.onChange(checked === true)
                      onChange={(checked) => field.onChange(checked)}
                      type="checkbox"
                      checked={field.value}
                    />
                  )
                }}
              />

              <span className="text-md flex-1">{weekDays[field.weekDay]}</span>
              <input
                type="time"
                step={60}
                disabled={intervals[index].enabled === false}
                {...register(`intervals.${index}.startTime`)}
              />
              <input
                type="time"
                step={60}
                disabled={intervals[index].enabled === false}
                {...register(`intervals.${index}.endTime`)}
              />
            </div>
          ))}
        </form>

        <button
          onClick={handleNextStep}
          disabled={true}
          className="bg-ignite-500 hover:bg-ignite-600 flex w-full items-center justify-center gap-1 rounded-md px-4 py-2 text-gray-100 transition-all disabled:bg-gray-600"
        >
          <span>Próximo passo</span>
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}