import { Link as RouterLink } from '@tanstack/react-router'
import { Badge, Box, Flex, Text } from '@chakra-ui/react'
import type { BlogArticle } from '../data/articles'

type BlogArticleCardProps = {
  article: BlogArticle
}

export function BlogArticleCard({ article }: BlogArticleCardProps) {
  return (
    <Box
      as="article"
      overflow="hidden"
      h="100%"
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      borderRadius="xl"
      bg="rgba(20, 31, 48, 0.92)"
      color="white"
      boxShadow="0 14px 34px rgba(0, 0, 0, 0.2)"
      transition="border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease"
      _hover={{
        borderColor: 'cyan.800',
        transform: 'translateY(-2px)',
      }}
    >
      <Flex
        position="relative"
        minH="138px"
        align="center"
        justify="center"
        px="5"
        bg="rgba(8, 17, 31, 0.84)"
        borderBottomWidth="1px"
        borderColor="whiteAlpha.100"
        _before={{
          content: '""',
          position: 'absolute',
          inset: 0,
          bg: 'radial-gradient(circle at 90% 16%, rgba(34, 211, 238, 0.22), transparent 32%), linear-gradient(135deg, rgba(255, 255, 255, 0.04), transparent 55%)',
        }}
      >
        <Text
          position="relative"
          color="whiteAlpha.700"
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight="800"
          lineHeight="1.15"
          textAlign="center"
        >
          {article.title}
        </Text>
      </Flex>

      <Flex mt="3" px="5" align="center" justify="space-between">
        <Badge
          borderWidth="1px"
          borderColor="whiteAlpha.200"
          borderRadius="full"
          bg="whiteAlpha.100"
          color="gray.100"
          fontSize="xs"
          fontWeight="800"
          lineHeight="1.2"
          whiteSpace="nowrap"
          px="3"
          py="1"
          justifySelf="flex-start"
        >
          {article.date}
        </Badge>
      </Flex>

      <Box px="5" py="5">
        <Text
          as="h2"
          color="white"
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="800"
          lineHeight="1.25"
          textAlign="left"
        >
          {article.title}
        </Text>

        <Text
          mt="3"
          color="gray.200"
          fontSize="sm"
          fontWeight="600"
          lineHeight="1.6"
          textAlign="left"
        >
          {article.description}
        </Text>

        <RouterLink
          to="/blog/$slug"
          params={{ slug: article.slug }}
          style={{ display: 'inline-flex', textDecoration: 'none' }}
        >
          <Box
            as="span"
            display="inline-flex"
            mt="4"
            px="4"
            py="2"
            borderWidth="1px"
            borderColor="whiteAlpha.200"
            borderRadius="full"
            bg="whiteAlpha.100"
            color="cyan.200"
            fontSize="sm"
            fontWeight="800"
          >
            Read more
          </Box>
        </RouterLink>
      </Box>
    </Box>
  )
}
