import { ButtonLogin } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="mx-auto flex h-screen max-w-[calc(100vw-(100vw-1160px)/2)] items-center gap-2 overflow-hidden">
      <div className="flex max-w-md flex-col items-baseline gap-4 px-4">
        <h1 className="text-5xl font-extrabold text-white">
          Agendamento descomplicado
        </h1>
        <p className="text-xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </p>
        <ButtonLogin />
      </div>

      <Image
        className="hidden pr-4 md:block"
        src="/app-preview.png"
        width={827}
        height={442}
        alt="Home image"
      />
    </main>
  )
}
