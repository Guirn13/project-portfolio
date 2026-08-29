import { useState } from 'react'
import { Box, Flex, IconButton, Link, Text, VStack } from '@chakra-ui/react'

const NAV_ITEMS = [
  { href: '/', label: 'Menu' },
  { href: '/about', label: 'Sobre' },
  { href: '/project', label: 'Projetos' },
  { href: '/blog', label: 'Blog' },
]

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      zIndex="50"
      w="full"
      px={{ base: 0, lg: 8, xl: '300px' }}
      shadow="0 10px 30px rgba(0, 0, 0, 0.24)"
      bg="rgba(2, 3, 5, 0.72)"
      backdropFilter="blur(14px)"
    >
      <Flex align="center" justify="space-between" px="6" py="4">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          bgGradient="to-r"
          gradientFrom="cyan.400"
          gradientTo="cyan.600"
          bgClip="text"
        >
                    GUIRN
        </Text>

        <IconButton
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          display={{ base: 'inline-flex', md: 'none' }}
          variant="ghost"
          color="white"
          bg="transparent"
          _hover={{ bg: 'whiteAlpha.100' }}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <Flex as="nav" display={{ base: 'none', md: 'flex' }} gap="8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              px="4"
              py="2"
              color="gray.300"
              textDecoration="none"
              transition="color 0.3s ease"
              _hover={{ color: 'cyan.400', textDecoration: 'none' }}
            >
              {item.label}
            </Link>
          ))}
        </Flex>
      </Flex>

      {menuOpen && (
        <VStack
          as="nav"
          display={{ base: 'flex', md: 'none' }}
          position="absolute"
          top="16"
          left="0"
          w="full"
          py="4"
          gap="0"
          bg="rgba(3, 10, 18, 0.92)"
          borderBottomWidth="1px"
          borderColor="whiteAlpha.200"
          backdropFilter="blur(14px)"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              display="block"
              w="full"
              px="4"
              py="2"
              color="gray.300"
              textAlign="center"
              textDecoration="none"
              transition="color 0.3s ease"
              _hover={{ color: 'cyan.400', textDecoration: 'none' }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </VStack>
      )}
    </Box>
  )
}
