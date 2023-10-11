import { ButtonLogin } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex gap-2 mx-auto max-w-[calc(100vw-(100vw-1160px)/2)] h-screen items-center overflow-hidden">
      <div className="px-4 max-w-md flex flex-col gap-4 items-baseline">
        <h1 className="text-white text-5xl font-extrabold">
          Agendamento descomplicado
        </h1>
        <p className="text-xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </p>
        <ButtonLogin />
      </div>

      <Image
        className="hidden md:block pr-4"
        src="/app-preview.png"
        width={827}
        height={442}
        alt="Home image"
      />
    </main>
  )
}
