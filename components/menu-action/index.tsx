'use client'

import { Button, Text, IconButton, Icon, Flex } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { AddIcon } from '@chakra-ui/icons'
import type { RootState } from '@store/cart/store'
import type { menuActionsProps } from './types'

import { addToCart } from '@store/cart/cartSlice'

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
      ) : null}
    </Flex>
  )
}
