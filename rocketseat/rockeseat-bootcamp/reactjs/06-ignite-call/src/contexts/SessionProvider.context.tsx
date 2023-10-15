'use client'

import { SessionProvider as SessionProviderNextAuth } from 'next-auth/react'
import { PropsWithChildren } from 'react'

export function SessionProvider({ children }: PropsWithChildren) {
  return <SessionProviderNextAuth>{children}</SessionProviderNextAuth>
}
