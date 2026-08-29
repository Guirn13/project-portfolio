import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'

export function AppProviders({ children }: PropsWithChildren) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
}
