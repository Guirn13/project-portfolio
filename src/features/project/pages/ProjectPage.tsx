import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { GithubProjectCard } from '../components/GithubProjectCard'
import { githubProjects } from '../data/githubProjects'

export function ProjectPage() {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      w="100%"
      minH="calc(100svh - 72px)"
      px={{ base: 6, md: 10 }}
      py={{ base: 12, md: 16 }}
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
        Projetos
      </Text>

      <Text
        maxW="720px"
        mt="4"
        color="gray.300"
        fontSize={{ base: 'sm', md: 'md' }}
        lineHeight="1.8"
      >
        Alguns projetos publicados no meu GitHub.
      </Text>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap="5"
        w="100%"
        maxW="1000px"
        mt={{ base: 8, md: 10 }}
      >
        {githubProjects.map((project) => (
          <GithubProjectCard key={project.name} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
