import type { ReactNode } from 'react'
import { Box, Flex, Text, type BoxProps } from '@chakra-ui/react'

type CardProps = BoxProps & {
  heading?: ReactNode
  icon?: ReactNode
  children: ReactNode
  align?: 'left' | 'center'
}

export function Card({
  heading,
  icon,
  children,
  align = 'left',
  ...boxProps
}: CardProps) {
  const isCentered = align === 'center'

  return (
    <Box
      px={{ base: 5, md: 6 }}
      py={{ base: 5, md: 6 }}
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      borderRadius="lg"
      bg="rgba(20, 31, 48, 0.86)"
      color="white"
      boxShadow="0 14px 34px rgba(0, 0, 0, 0.2)"
      textAlign={align}
      transition="border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease"
      _hover={{
        borderColor: 'cyan.400',
        boxShadow: '0 18px 42px rgba(8, 145, 178, 0.18)',
        transform: 'translateY(-2px)',
      }}
      {...boxProps}
    >
      {heading && (
        <Text
          as="h3"
          mb="4"
          color="cyan.300"
          fontSize="md"
          fontWeight="800"
        >
          {heading}
        </Text>
      )}

      {icon && (
        <Flex
          align="center"
          justify={isCentered ? 'center' : 'flex-start'}
          w="56px"
          h="44px"
          mx={isCentered ? 'auto' : 0}
          mb="4"
          color="cyan.300"
          fontSize="lg"
          fontWeight="900"
          lineHeight="1"
        >
          {icon}
        </Flex>
      )}

      <Box color="gray.50" fontSize="xs" lineHeight="1.7">
        {children}
      </Box>
    </Box>
  )
}
