'use client'
import { Box, Container } from '@chakra-ui/react'
import data from '../data.json'
import { ParentMenu } from '../parent-menu'
export const MenusWrapper = () => {
  return (
    <Container>
      <Box p='1' display='grid' gridTemplateColumns='repeat(2,1fr)' gap='8px'>
        {data.data.map((item) => (
          <ParentMenu key={item.id} parentMenu={item} />
        ))}
      </Box>
    </Container>
  )
}
