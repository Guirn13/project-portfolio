import { Box, Image } from '@chakra-ui/react'

type HeroBrandProps = {
  heroImg: string
  reactLogo: string
  viteLogo: string
}

export function HeroBrand({ heroImg, reactLogo, viteLogo }: HeroBrandProps) {
  return (
    <Box position="relative">
      <Image src={heroImg} w="170px" position="relative" zIndex={0} alt="" />
      <Image
        src={reactLogo}
        position="absolute"
        insetInline={0}
        mx="auto"
        zIndex={1}
        top="34px"
        h="28px"
        alt="React logo"
        transform="perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg) scale(1.4)"
      />
      <Image
        src={viteLogo}
        position="absolute"
        insetInline={0}
        mx="auto"
        zIndex={0}
        top="107px"
        h="26px"
        w="auto"
        alt="Vite logo"
        transform="perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg) scale(0.8)"
      />
    </Box>
  )
}
