import { Badge, Box, Image, Link, Text } from '@chakra-ui/react'
import profileImage from '../../../core/assets/profile.png'

export function CardProfile() {
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      gap={{ base: 8, md: 12 }}
      w="100%"
      maxW="1100px"
      minH={{ base: 'auto', md: '420px' }}
      m="auto"
      p={{ base: 6, md: 20 }}
      color="white"
      overflow="hidden"
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      borderRadius="2xl"
      bg="linear-gradient(135deg, rgba(8, 16, 28, 0.96), rgba(2, 6, 12, 0.92))"
      boxShadow="0 24px 70px rgba(0, 0, 0, 0.42)"
    >
      <Box
        position="absolute"
        inset="0"
        bg="radial-gradient(circle at 18% 18%, rgba(34, 211, 238, 0.16), transparent 34%)"
        pointerEvents="none"
      />

      <Box
        position="relative"
        zIndex="1"
        flex="1"
        maxW={{ base: '100%', md: '58%' }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ base: 'center', md: 'flex-start' }}
          gap="3"
          mb="6"
        >

          <Badge
            color="cyan.300"
            bg="gray.900"
            fontSize="sm"
            fontWeight="700"
            letterSpacing="0.15em"
            textTransform="uppercase"
          >
            ● Portfólio pessoal
          </Badge>
        </Box>

        <Text
          as="h1"
          mb={4}
          color="gray.50"
          fontSize={{ base: '2xl', md: '2xl' }}
          fontWeight="800"
          lineHeight="1.05"
        >
          Olá, meu nome é Guilherme Neves.
        </Text>

        <Text
          as="h2"
          mb={6}
          color="cyan.200"
          fontSize={{ base: '3xl', md: '4xl' }}
          fontWeight="700"
          lineHeight="1.2"
        >
          Desenvolvedor Front-End
        </Text>

        <Text
          mb={6}
          maxW="620px"
          mx={{ base: 'auto', md: 0 }}
          color="gray.200"
          fontSize={{ base: 'md', md: 'lg' }}
          lineHeight="1.8"
        >
          Ajudo a transformar ideias de produtos em interfaces claras, rápidas
          e bem cuidadas, com foco em React e experiências digitais modernas.
        </Text>

        <Box
          display="inline-flex"
          gap="2"
          p="3"
          borderRadius="lg"
          bg="whiteAlpha.100"
        >
          <Text color="gray.300">Para projetos ou colaboração:</Text>
          <Link
            href="https://www.linkedin.com/in/dev-guilhermeneves/"
            target="_blank"
            rel="noopener noreferrer"
            color="cyan.300"
            fontWeight="700"
            textDecoration="none"
            _hover={{ color: 'cyan.200', textDecoration: 'underline' }}
          >
            LinkedIn
          </Link>
        </Box>
      </Box>

      <Box
        position="relative"
        zIndex="1"
        w={{ base: '220px', md: '300px' }}
        h={{ base: '260px', md: '320px' }}
        flexShrink={0}
        overflow="hidden"
        border="1px solid"
        borderColor="cyan.300/70"
        borderRadius="2xl"
        bg="linear-gradient(180deg, rgba(8, 145, 178, 0.2), rgba(15, 23, 42, 0.7))"
        boxShadow="0 0 42px rgba(34, 211, 238, 0.2)"
      >
        <Image
          src={profileImage}
          alt="Foto de perfil"
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>
    </Box>
  )
}
