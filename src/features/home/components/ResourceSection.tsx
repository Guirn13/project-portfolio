import { Box, Flex, Link as ChakraLink, Heading, Text } from '@chakra-ui/react'
import type { ReactNode } from 'react'

type ResourceLink = {
  href: string
  icon?: ReactNode
  iconId?: string
  label: string
}

type ResourceSectionProps = {
  id: string
  iconId: string
  title: string
  description: string
  links: ResourceLink[]
}

export function ResourceSection({
  id,
  iconId,
  title,
  description,
  links,
}: ResourceSectionProps) {
  return (
    <Box
      id={id}
      flex="1 1 0"
      p={{ base: 5, lg: 8 }}
      borderRightWidth={id === 'docs' ? { base: 0, lg: '1px' } : 0}
      borderBottomWidth={id === 'docs' ? { base: '1px', lg: 0 } : 0}
      borderColor="gray.200"
      _dark={{ borderColor: 'gray.700' }}
    >
      <Box
        as="svg"
        mb={4}
        boxSize="22px"
        role="presentation"
        aria-hidden="true"
      >
        <use href={`/icons.svg#${iconId}`}></use>
      </Box>
      <Heading as="h2" size="lg" fontWeight="medium" mb={2}>
        {title}
      </Heading>
      <Text color="fg.muted">{description}</Text>
      <Flex
        as="ul"
        listStyleType="none"
        p={0}
        mt={{ base: 5, lg: 8 }}
        gap={2}
        flexWrap={{ base: 'wrap', lg: 'nowrap' }}
        justify={{ base: 'center', lg: 'flex-start' }}
      >
        {links.map((link) => (
          <Box
            as="li"
            key={link.href}
            flex={{ base: '1 1 calc(50% - 8px)', lg: 'initial' }}
          >
            <ChakraLink
              href={link.href}
              target="_blank"
              rel="noreferrer"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
              w={{ base: '100%', lg: 'auto' }}
              px={3}
              py={1.5}
              borderRadius="md"
              bg="gray.50"
              color="fg"
              textDecoration="none"
              _hover={{ boxShadow: 'md', textDecoration: 'none' }}
              _dark={{ bg: 'gray.800' }}
            >
              {link.icon ?? (
                <Box
                  as="svg"
                  boxSize="18px"
                  role="presentation"
                  aria-hidden="true"
                  _dark={{ filter: id === 'social' ? 'invert(1) brightness(2)' : undefined }}
                >
                  <use href={`/icons.svg#${link.iconId}`}></use>
                </Box>
              )}
              {link.label}
            </ChakraLink>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}
