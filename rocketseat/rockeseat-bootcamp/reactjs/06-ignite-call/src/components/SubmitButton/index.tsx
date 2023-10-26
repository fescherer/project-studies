'use client'

import { ArrowRight } from '@phosphor-icons/react'
import { MouseEventHandler } from 'react'

type SubmitButtonProps = {
  disabled: boolean
  text: string
  handleSubmit?: MouseEventHandler<HTMLButtonElement> | undefined
}

export function SubmitButton({
  disabled,
  text,
  handleSubmit,
}: SubmitButtonProps) {
  return (
    <button
      onClick={handleSubmit}
      disabled={disabled}
      className="bg-ignite-500 hover:bg-ignite-600 flex w-full items-center justify-center gap-1 rounded-md px-4 py-2 text-gray-100 transition-all disabled:bg-gray-600"
    >
      <span>{text}</span>
      <ArrowRight />
    </button>
  )
}
