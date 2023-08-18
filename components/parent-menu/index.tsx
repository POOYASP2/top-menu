'use client'
import { useRouter } from 'next/navigation'
import { Box, Text } from '@chakra-ui/react'

export const ParentMenu = (props: any) => {
  const router = useRouter()
  const { thumbnail, title, id } = props.parentMenu
  return (
    <Box
      onClick={() => {
        router.push(`/menu/${id}`)
      }}
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
      <Text fontWeight='bold' textAlign='center' fontSize='md'>
        {title}
      </Text>
    </Box>
  )
}
