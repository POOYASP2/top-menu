'use client'

import { Box, Text } from '@chakra-ui/react'

export const ParentMenu = (props: any) => {
  const { thumbnail, title } = props.parentMenu
  return (
    <Box
      backgroundImage={`url(${thumbnail.url})`}
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      display='grid'
      backgroundColor='grey'
      backgroundBlendMode=' multiply'
      height='150px'
      placeItems='center'
      borderRadius='12px'
      overflow='hidden'
    >
      <Text>{title}</Text>
    </Box>
  )
}
