import { Box, Text } from '@chakra-ui/react'

export function BlogPage() {
  return (
    <Box
      as="section"
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      minH="calc(100svh - 72px)"
      px={{ base: 6, md: 10 }}
      color="white"
    >
      <Text
        as="h1"
        color="cyan.400"
        fontSize={{ base: '3xl', md: '4xl' }}
        fontWeight="800"
        lineHeight="1.1"
        textAlign="center"
      >
        Blog
      </Text>
    </Box>
  )
}
