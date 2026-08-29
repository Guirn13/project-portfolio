import type { PropsWithChildren } from 'react'
import { Box } from '@chakra-ui/react'

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <Box
      as="main"
      maxW="1126px"
      minH="100svh"
      mx="auto"
      borderInlineWidth="1px"
      borderColor="border"
      display="flex"
      flexDirection="column"
      textAlign="center"
    >
      {children}
    </Box>
  )
}
