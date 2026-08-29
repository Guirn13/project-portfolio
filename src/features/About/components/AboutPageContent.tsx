import { Box, Text } from '@chakra-ui/react'
import { Card } from '@shared/components/Card'

const COMPETENCIES = [
  {
    title: 'React e TypeScript',
    icon: 'React',
    description:
      'Desenvolvimento de aplicações web modernas com React, TypeScript e JavaScript ES6+, priorizando clareza e manutenção.',
  },
  {
    title: 'Estado e APIs',
    icon: 'API',
    description:
      'Gerenciamento de estado e dados com Redux, Zustand, React Query e integração com APIs REST de forma consistente.',
  },
  {
    title: 'Testes Front-end',
    icon: 'Jest',
    description:
      'Testes de componentes e fluxos de interface com Jest e React Testing Library para reduzir regressões no front-end.',
  },
]

export function AboutPageContent() {
  return (
    <Box
      as="section"
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      minH="calc(100svh - 72px)"
      px={{ base: 5, md: 8 }}
      py={{ base: 8, md: 10 }}
      color="white"
    >
      <Box w="100%" maxW="920px" mx="auto">
        <Box mb={{ base: 8, md: 16 }} textAlign="center">
          <Text
            as="h1"
            mb={{ base: 5, md: 8 }}
            color="cyan.400"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="800"
            lineHeight="1.1"
          >
            Sobre mim
          </Text>

          <Text
            maxW="650px"
            mx="auto"
            color="gray.50"
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight="500"
            lineHeight="1.8"
          >
            Olá! Meu nome é <strong>Guilherme Neves</strong> e sou
            <Text as="span" color="cyan.300" fontWeight="800">
              {' '}
              Desenvolvedor Front-end
            </Text>
            , focado em construir interfaces web com
            <Text as="span" color="cyan.300" fontWeight="800">
              {' '}
              React
            </Text>
            ,
            <Text as="span" color="cyan.300" fontWeight="800">
              {' '}
              TypeScript
            </Text>{' '}
            e uma base sólida de boas práticas para aplicações modernas.
          </Text>

          <Text
            maxW="620px"
            mt="4"
            mx="auto"
            color="gray.100"
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight="500"
            lineHeight="1.8"
          >
            Tenho experiência na evolução e manutenção de aplicações front-end,
            criando layouts responsivos, componentes reutilizáveis, integrações
            com APIs REST, gerenciamento de estado e testes de componentes.
          </Text>

          <Text
            maxW="560px"
            mt={{ base: 5, md: 7 }}
            mx="auto"
            color="cyan.300"
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="800"
            lineHeight="1.45"
          >
            Meu foco é transformar regras de negócio e design em experiências
            claras, rápidas e agradáveis para quem usa o produto.
          </Text>
        </Box>

        <Text
          as="h2"
          mb={{ base: 6, md: 8 }}
          color="cyan.400"
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="800"
          lineHeight="1.1"
          textAlign="center"
        >
          Competências
        </Text>

        <Box
          display="grid"
          gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={{ base: 4, md: 5 }}
        >
          {COMPETENCIES.map((competency) => (
            <Card
              key={competency.title}
              heading={competency.title}
              icon={competency.icon}
              align="center"
              minH={{ base: '172px', md: '176px' }}
            >
              {competency.description}
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
