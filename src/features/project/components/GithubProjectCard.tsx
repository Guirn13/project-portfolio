import { Badge, Link, Text, VStack } from '@chakra-ui/react'
import { Card } from '@/shared/components/Card'
import type { GithubProject } from '../data/githubProjects'

type GithubProjectCardProps = {
  project: GithubProject
}

export function GithubProjectCard({ project }: GithubProjectCardProps) {
  return (
    <Card
      as="article"
      display="flex"
      minH="230px"
      flexDirection="column"
      heading={project.name}
    >
      <VStack align="flex-start" gap="4" h="100%">
        <Badge
          alignSelf="flex-start"
          colorPalette="cyan"
          variant="subtle"
          fontSize="2xs"
          letterSpacing="0"
        >
          {project.language}
        </Badge>

        <Text color="gray.100" fontSize="sm" lineHeight="1.7" textAlign="left">
          {project.description}
        </Text>

        <Link
          href={project.href}
          target="_blank"
          rel="noreferrer"
          mt="auto"
          color="cyan.300"
          fontSize="sm"
          fontWeight="700"
          textDecoration="none"
          _hover={{ color: 'cyan.200', textDecoration: 'none' }}
        >
          Ver repositorio
        </Link>
      </VStack>
    </Card>
  )
}
