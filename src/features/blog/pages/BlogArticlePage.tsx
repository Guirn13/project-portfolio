import { Box, Link, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink, useParams } from '@tanstack/react-router'
import { MarkdownContent } from '../components/MarkdownContent'
import { getBlogArticleBySlug } from '../data/articles'

export function BlogArticlePage() {
  const { slug } = useParams({ from: '/blog/$slug' })
  const article = getBlogArticleBySlug(slug)

  if (!article) {
    return (
      <Box
        as="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minH="calc(100svh - 72px)"
        px={{ base: 6, md: 10 }}
        color="white"
        textAlign="center"
      >
        <Text as="h1" color="cyan.400" fontSize="3xl" fontWeight="800">
          Artigo nao encontrado
        </Text>
        <Link asChild mt="4" color="cyan.300" fontWeight="700">
          <RouterLink to="/blog">Voltar para o blog</RouterLink>
        </Link>
      </Box>
    )
  }

  return (
    <Box
      as="article"
      w="100%"
      minH="calc(100svh - 72px)"
      px={{ base: 6, md: 10 }}
      py={{ base: 12, md: 16 }}
      color="white"
    >
      <VStack
        align="flex-start"
        gap="5"
        maxW="1000px"
        mx="auto"
        backgroundColor="#3d3c3c59"
        px={{ base: 5, md: 10 }}
        py={{ base: 8, md: 10 }}
        borderRadius="xl"
      >

        <Text
          as="h1"
          color="cyan.400"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="800"
          lineHeight="1.1"
          textAlign="left"
          whiteSpace="nowrap"
        >
          {article.title}
        </Text>

        <Text color="gray.200" fontSize={{ base: 'md', md: 'lg' }} textAlign="left">
          {article.description}
        </Text>

        <MarkdownContent content={article.content.replace(/^# .+\r?\n/, '')} />
      </VStack>
    </Box>
  )
}
