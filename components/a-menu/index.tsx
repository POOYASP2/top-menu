'use client'

import { Image, Text, Flex } from '@chakra-ui/react'
import type { aMenuProps } from './types'
import { MenuAction } from '../menu-action'
import { numberFormatter } from '@/utils'
export const AMenu = (props: aMenuProps) => {
  const { thumbnail, title, details, price, id } = props.item

  return (
    <Flex gap='3' bg='#282828' borderRadius='14px' p='3'>
      <Flex
        justifyContent='space-around'
        alignItems='center'
        w='100px'
        flexDirection='column'
        gap='3'
      >
        <Flex
          boxSize='100px'
          bg='gray.900'
          borderRadius='full'
          overflow='hidden'
        >
          {thumbnail.url && (
            <Image
              alt=''
              src={thumbnail?.url}
              boxSize='100px'
              borderRadius='full'
            />
          )}
        </Flex>
        <MenuAction
          item={{
            id,
            price,
          }}
        />
      </Flex>
      <Flex gap='4' flexDirection='column' w='100%'>
        <Text noOfLines={1} fontWeight='semibold' fontSize='lg'>
          {title}
        </Text>
        {details && (
          <Text noOfLines={4} color='gray'>
            {details?.description}
          </Text>
        )}
        <Text
          fontWeight='semibold'
          fontSize='md'
          alignSelf='flex-end'
          mt='auto'
          ms='auto'
        >
          {numberFormatter(price)}
          <Text color='gray' fontSize='sm' fontWeight='normal' ms='1' as='span'>
            تومان
          </Text>
        </Text>
      </Flex>
    </Flex>
  )
}
