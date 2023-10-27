'use client'

import { getWeekDays } from '@/util/get-week-days'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true })

  return (
    <div>
      <div>
        <span>
          Dezembro <span>2022</span>
        </span>

        <div>
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretRight />
          </button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button>1</button>
            </td>
            <td>
              <button>2</button>
            </td>
            <td>
              <button>3</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
