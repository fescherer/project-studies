import { buildNextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { UpdateProfileFeature } from '@/app/features/UpdateProfile'
import { FormStep } from '@/components/FormStep'
import { getServerSession } from 'next-auth'

export default async function UpdateProfile() {
  const session = await getServerSession(buildNextAuthOptions())
  return (
    <div className="m-auto flex max-w-md flex-col items-center gap-4 py-12">
      <header>
        <h2 className="text-xl font-bold text-gray-100">Quase lá</h2>
        <p>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </p>
      </header>

      <FormStep step={4} currentStep={3} />
      {session?.user?.email ?? 'sem nada'}
      <UpdateProfileFeature user={session?.user} />
    </div>
  )
}
