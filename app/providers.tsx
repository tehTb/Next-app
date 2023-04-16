'use client'

import { NextUIProvider } from '@nextui-org/react'

type ProvidersType = {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersType) {
  return <NextUIProvider>{children}</NextUIProvider>
}
