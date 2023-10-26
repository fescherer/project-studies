'use client'

import { FormStep } from '@/components/FormStep'
import { SubmitButton } from '@/components/SubmitButton'
import { ArrowRight, Check } from '@phosphor-icons/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()
  const { status } = useSession()
  const router = useRouter()

  const hasError = searchParams.get('error')
  const isSignedId = status === 'authenticated'

  async function handleSignIn() {
    await signIn('google')
  }

  function handleNextStep() {
    router.push('/register/time-intervals')
  }

  return (
    <div className="m-auto flex max-w-md flex-col items-center gap-4 py-12">
      <header>
        <h2 className="text-xl font-bold text-gray-100">
          Bem-vindo ao Ignite Call!
        </h2>
        <p>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </p>
      </header>

      <FormStep step={4} currentStep={1} />

      <div className="flex w-full flex-col gap-4 rounded bg-gray-800 p-4">
        <div className="flex w-full items-center justify-between gap-4 rounded border border-gray-600 p-4">
          <p>Google Calendar</p>

          {isSignedId ? (
            <button
              onClick={handleSignIn}
              disabled={true}
              className="flex items-center gap-1 rounded bg-gray-600 px-4 py-2 text-sm"
            >
              <span>Conectado</span>
              <Check />
            </button>
          ) : (
            <button
              onClick={handleSignIn}
              className="text-ignite-500 hover:text-ignite-600 border-ignite-500 hover:border-ignite-600 flex items-center gap-1 rounded border-2 px-4 py-2 text-sm transition-all"
            >
              <span>Conectar</span>
              <ArrowRight />
            </button>
          )}
        </div>

        {hasError && (
          <p className="text-red text-center text-sm">
            Falha ao conectar com o Google, verifique se você habilitou as
            permissões no Google Calendar
          </p>
        )}
        <SubmitButton
          disabled={!isSignedId}
          handleSubmit={handleNextStep}
          text="Próximo passo"
        />
      </div>
    </div>
  )
}
