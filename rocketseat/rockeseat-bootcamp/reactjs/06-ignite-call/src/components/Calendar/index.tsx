'use client'

import { getWeekDays } from '@/util/get-week-days'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true })

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <span className="font-medium">
          Dezembro <span className="text-gray-200">2022</span>
        </span>

        <div className="flex gap-2 text-gray-200">
          <button className="cursor-pointer rounded hover:text-gray-100">
            <CaretLeft size={18} />
          </button>
          <button className="cursor-pointer rounded hover:text-gray-100">
            <CaretRight size={18} />
          </button>
        </div>
      </div>

      <table className="w-full table-fixed border-spacing-1">
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th className="text-sm text-gray-200" key={weekDay}>
                {weekDay}.
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='block leading-3 text-gray-800 before:content-["."]'>
          <tr>
            <td className="box-border"></td>
            <td className="box-border"></td>
            <td className="box-border"></td>
            <td className="box-border"></td>
            <td className="box-border">
              <button className="aspect-square w-full cursor-pointer rounded bg-gray-600 text-center disabled:cursor-default disabled:bg-none disabled:opacity-40 [&>:not(:disabled)]:bg-gray-600">
                1
              </button>
            </td>
            <td className="box-border">
              <button className="aspect-square w-full cursor-pointer rounded bg-gray-600 text-center disabled:cursor-default disabled:bg-none disabled:opacity-40 [&>:not(:disabled)]:bg-gray-600">
                2
              </button>
            </td>
            <td className="box-border">
              <button className="aspect-square w-full cursor-pointer rounded bg-gray-600 text-center disabled:cursor-default disabled:bg-none disabled:opacity-40 [&>:not(:disabled)]:bg-gray-600">
                3
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
