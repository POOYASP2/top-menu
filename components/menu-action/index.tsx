'use client'

import { Button, Text, IconButton, Icon, Flex } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import type { RootState } from '@store/cart/store'
import type { menuActionsProps } from './types'

import { addToCart, increment, decrement } from '@store/cart/cartSlice'

export const MenuAction = (props: menuActionsProps) => {
  const { id, price } = props.item
  const cart = useSelector((state: RootState) => state.cart.itemsOfCart)
  const activeCart = cart.findIndex((item) => item.id === id)
  const dispatch = useDispatch()
  return (
    <Flex>
      {activeCart === -1 ? (
        <Button
          rightIcon={<AddIcon boxSize={'10px'} />}
          colorScheme='red'
          color='white'
          variant='solid'
          size='sm'
          onClick={() =>
            dispatch(
              addToCart({
                id,
                price,
                count: 1,
              })
            )
          }
        >
          اضافه کردن
        </Button>
      ) : (
        <Flex h='32px' alignItems='center' gap='3'>
          <IconButton
            colorScheme='teal'
            aria-label='Call Segun'
            size='xs'
            borderRadius='full'
            onClick={() => {
              dispatch(increment(activeCart))
            }}
            icon={<AddIcon />}
          />
          <Text>{cart[activeCart].count}</Text>
          <IconButton
            colorScheme='red'
            aria-label='Call Segun'
            size='xs'
            borderRadius='full'
            onClick={() => {
              dispatch(decrement(activeCart))
            }}
            icon={<MinusIcon />}
          />
        </Flex>
      )}
    </Flex>
  )
}
