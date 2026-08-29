import { Box, Button, Code, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'
import heroImg from '@core/assets/hero.png'
import reactLogo from '@core/assets/react.svg'
import viteLogo from '@core/assets/vite.svg'
import { HeroBrand } from '../components/HeroBrand'
import { ResourceSection } from '../components/ResourceSection'

const documentationLinks = [
  {
    href: 'https://vite.dev/',
    icon: <Image h="18px" src={viteLogo} alt="" />,
    label: 'Explore Vite',
  },
  {
    href: 'https://react.dev/',
    icon: <Image boxSize="18px" src={reactLogo} alt="" />,
    label: 'Learn more',
  },
]

const socialLinks = [
  {
    href: 'https://github.com/vitejs/vite',
    iconId: 'github-icon',
    label: 'GitHub',
  },
  {
    href: 'https://chat.vite.dev/',
    iconId: 'discord-icon',
    label: 'Discord',
  },
  {
    href: 'https://x.com/vite_js',
    iconId: 'x-icon',
    label: 'X.com',
  },
  {
    href: 'https://bsky.app/profile/vite.dev',
    iconId: 'bluesky-icon',
    label: 'Bluesky',
  },
]

export function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Flex
        as="section"
        flexGrow={1}
        direction="column"
        align="center"
        justify="center"
        gap={{ base: 4.5, lg: 6 }}
        px={{ base: 5, lg: 0 }}
        pt={{ base: 8, lg: 0 }}
        pb={{ base: 6, lg: 0 }}
      >
        <HeroBrand heroImg={heroImg} reactLogo={reactLogo} viteLogo={viteLogo} />
        <Box>
          <Heading
            as="h1"
            fontSize={{ base: '36px', lg: '56px' }}
            fontWeight="medium"
            my={{ base: 5, lg: 8 }}
          >
            Get started
          </Heading>
          <Text color="fg.muted">
            Edit <Code>src/features/home/pages/HomePage.tsx</Code> and save to
            test <Code>HMR</Code>
          </Text>
        </Box>
        <Button
          type="button"
          colorPalette="purple"
          variant="subtle"
          fontFamily="mono"
          mb={6}
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </Button>
      </Flex>

      <DividerTicks />

      <Flex
        as="section"
        direction={{ base: 'column', lg: 'row' }}
        borderTopWidth="1px"
        borderColor="gray.200"
        textAlign={{ base: 'center', lg: 'left' }}
        _dark={{ borderColor: 'gray.700' }}
      >
        <ResourceSection
          id="docs"
          iconId="documentation-icon"
          title="Documentation"
          description="Your questions, answered"
          links={documentationLinks}
        />
        <ResourceSection
          id="social"
          iconId="social-icon"
          title="Connect with us"
          description="Join the Vite community"
          links={socialLinks}
        />
      </Flex>

      <DividerTicks />
      <Box
        as="section"
        h={{ base: '48px', lg: '88px' }}
        borderTopWidth="1px"
        borderColor="gray.200"
        _dark={{ borderColor: 'gray.700' }}
      />
    </>
  )
}

function DividerTicks() {
  return (
    <Box position="relative" w="full">
      <Box
        position="absolute"
        top="-4.5px"
        left={0}
        border="5px solid transparent"
        borderLeftColor="gray.200"
        _dark={{ borderLeftColor: 'gray.700' }}
      />
      <Box
        position="absolute"
        top="-4.5px"
        right={0}
        border="5px solid transparent"
        borderRightColor="gray.200"
        _dark={{ borderRightColor: 'gray.700' }}
      />
    </Box>
  )
}
