'use client'

import { GoogleLogo } from '@phosphor-icons/react'

export function ButtonLogin() {
  return (
    <button className="bg-red text-white px-4 py-2 rounded flex gap-2 hover:brightness-75 transition-all">
      <GoogleLogo size={20} />
      <span>Criar conta com Google</span>
    </button>
  )
}
