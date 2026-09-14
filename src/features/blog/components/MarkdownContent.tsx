import type { ReactNode } from 'react'
import { Box, Link, List, Text, VStack } from '@chakra-ui/react'

type MarkdownContentProps = {
  content: string
}

type MarkdownBlock =
  | { type: 'heading'; level: 1 | 2 | 3; text: string }
  | { type: 'code'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }

export function MarkdownContent({ content }: MarkdownContentProps) {
  const blocks = parseMarkdown(content)

  return (
    <VStack align="stretch" gap="5" pt="4" w="full" minW="0">
      {blocks.map((block, index) => renderBlock(block, index))}
    </VStack>
  )
}

function parseMarkdown(content: string) {
  const blocks: MarkdownBlock[] = []
  const lines = content.split(/\r?\n/)
  let paragraph: string[] = []
  let listItems: string[] = []
  let codeLines: string[] | null = null

  function flushParagraph() {
    if (paragraph.length === 0) return
    blocks.push({ type: 'paragraph', text: paragraph.join(' ') })
    paragraph = []
  }

  function flushList() {
    if (listItems.length === 0) return
    blocks.push({ type: 'list', items: listItems })
    listItems = []
  }

  for (const line of lines) {
    const trimmedLine = line.trim()

    if (trimmedLine.startsWith('```')) {
      flushParagraph()
      flushList()
      if (codeLines === null) {
        codeLines = []
      } else {
        blocks.push({ type: 'code', text: codeLines.join('\n') })
        codeLines = null
      }
      continue
    }

    if (codeLines !== null) {
      codeLines.push(line)
      continue
    }

    if (!trimmedLine) {
      flushParagraph()
      continue
    }

    if (trimmedLine.startsWith('### ')) {
      flushParagraph()
      flushList()
      blocks.push({ type: 'heading', level: 3, text: trimmedLine.slice(4) })
      continue
    }

    if (trimmedLine.startsWith('## ')) {
      flushParagraph()
      flushList()
      blocks.push({ type: 'heading', level: 2, text: trimmedLine.slice(3) })
      continue
    }

    if (trimmedLine.startsWith('# ')) {
      flushParagraph()
      flushList()
      blocks.push({ type: 'heading', level: 1, text: trimmedLine.slice(2) })
      continue
    }

    if (trimmedLine.startsWith('- ')) {
      flushParagraph()
      listItems.push(trimmedLine.slice(2))
      continue
    }

    flushList()
    paragraph.push(trimmedLine)
  }

  flushParagraph()
  flushList()
  if (codeLines !== null) {
    blocks.push({ type: 'code', text: codeLines.join('\n') })
  }

  return blocks
}

function renderBlock(block: MarkdownBlock, index: number) {
  if (block.type === 'code') {
    return (
      <Box
        key={`code-${index}`}
        as="pre"
        bg="blackAlpha.100"
        borderWidth="1px"
        borderColor="whiteAlpha.200"
        borderRadius="lg"
        p={{ base: 4, md: 6 }}
        overflowX="auto"
        maxW="full"
        tabIndex={0}
        aria-label="Exemplo de estrutura de pastas"
        color="gray.200"
        fontFamily="mono"
        textAlign="left"
        whiteSpace="pre"
        letterSpacing="normal"
        fontSize={{ base: 'xs', md: 'sm' }}
        lineHeight="1.7"
      >
        <Box as="code" fontFamily="inherit" fontSize="inherit">
          {block.text}
        </Box>
      </Box>
    )
  }

  if (block.type === 'heading') {
    return (
      <Text
        key={`${block.type}-${index}`}
        as={block.level === 1 ? 'h1' : block.level === 2 ? 'h2' : 'h3'}
        color="cyan.300"
        fontSize={block.level === 1 ? { base: '3xl', md: '4xl' } : block.level === 2 ? '2xl' : 'xl'}
        mt={index === 0 ? '0' : block.level === 3 ? '2' : '6'}
        fontWeight="800"
        lineHeight="1.2"
        textAlign="left"
      >
        {renderInlineMarkdown(block.text)}
      </Text>
    )
  }

  if (block.type === 'list') {
    return (
      <List.Root
        key={`${block.type}-${index}`}
        gap="4"
        ps="5"
        color="gray.100"
        fontSize="md"
        lineHeight="1.8"
        textAlign="left"
      >
        {block.items.map((item) => (
          <List.Item key={item}>{renderInlineMarkdown(item)}</List.Item>
        ))}
      </List.Root>
    )
  }

  return (
    <Text
      key={`${block.type}-${index}`}
      color="gray.100"
      fontSize="md"
      lineHeight="1.8"
      textAlign="left"
    >
      {renderInlineMarkdown(block.text)}
    </Text>
  )
}

function renderInlineMarkdown(text: string) {
  const parts: ReactNode[] = []
  const pattern = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\(https?:\/\/[^\s)]+\)|<https?:\/\/[^\s>]+>)/g

  text.split(pattern).forEach((part, index) => {
    if (!part) return

    if (part.startsWith('`') && part.endsWith('`')) {
      parts.push(
        <Box as="code" key={index} color="cyan.200" bg="whiteAlpha.100" px="1.5" py="0.5" borderRadius="sm" fontFamily="mono" fontSize="0.9em" overflowWrap="anywhere">
          {part.slice(1, -1)}
        </Box>,
      )
      return
    }

    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/)
    const autolink = part.match(/^<(https?:\/\/[^\s>]+)>$/)
    if (link || autolink) {
      parts.push(
        <Link key={index} href={link ? link[2] : autolink![1]} color="cyan.300" textDecoration="underline" overflowWrap="anywhere">
          {link ? link[1] : autolink![1]}
        </Link>,
      )
      return
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      parts.push(
        <Box as="strong" color="white" key={`${part}-${index}`}>
          {part.slice(2, -2)}
        </Box>,
      )
      return
    }

    if (part.startsWith('*') && part.endsWith('*')) {
      parts.push(<em key={index}>{part.slice(1, -1)}</em>)
      return
    }

    parts.push(part)
  })

  return parts
}
