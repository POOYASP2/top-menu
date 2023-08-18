'use client'

import { Image, Text, Button, Flex } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import type { aMenuProps } from './types'
import { useSelector, useDispatch } from 'react-redux'
import { MenuAction } from '../menu-action'
import type { RootState } from '@store/cart/store'
import { addToCart } from '@store/cart/cartSlice'

export const AMenu = (props: aMenuProps) => {
  const { thumbnail, title, details, price, id } = props.item

  const cart = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  console.log(cart)
  return (
    <Flex gap='3' bg='#282828' borderRadius='14px' p='3'>
      <Flex flexDirection='column' gap='3'>
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
      <Flex gap='4' flexDirection='column'>
        <Text noOfLines={1}>{title}</Text>
        {details && <Text noOfLines={4}>{details?.description}</Text>}
        <Text alignSelf='flex-end' mt='auto' ms='auto'>
          {price}
          <Text ms='1' as='span'>
            تومان
          </Text>
        </Text>
      </Flex>
    </Flex>
  )
}
