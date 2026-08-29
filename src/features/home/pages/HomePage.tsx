import { Box } from '@chakra-ui/react'
import { CardProfile } from '../components/CardProfile'

export function HomePage() {
  return (
    <Box
      as="section"
      display="flex"
      alignItems="center"
      minH="calc(100svh - 72px)"
      w="100%"
      px={{ base: 6, md: 10 }}
      py={{ base: 10, md: 14 }}
    >
      <CardProfile />
    </Box>
  )
}
