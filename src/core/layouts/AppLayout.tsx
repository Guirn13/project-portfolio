import type { PropsWithChildren } from 'react'
import { Box } from '@chakra-ui/react'
import { Header } from '@/core/layouts/Header'

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <Box
      as="main"
      maxW="auto"
      minH="100svh"
      mx="auto"
      borderColor="border"
      display="flex"
      flexDirection="column"
      textAlign="center"
      bg="#020305"
      bgImage="linear-gradient(180deg, #020305 0%, #020305 16%, #07111f 58%, #111d2e 100%)"
      pt="72px"
    >
      <Header />
      {children}
    </Box>
  )
}
