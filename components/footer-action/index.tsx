'use client'
import { Flex, Text, Button } from '@chakra-ui/react'
import type { RootState } from '@store/cart/store'
import { useSelector, useDispatch } from 'react-redux'
import { removeCart } from '@store/cart/cartSlice'

export const FooterAction = () => {
  const { itemsOfCart, count } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  return (
    <>
      {count > 0 && (
        <Flex p='3' justifyContent='space-between'>
          <Flex flexDirection='column'>
            <Text>
              تعداد :<Text as='span'>{count}</Text>
            </Text>
            <Text>
              مجموع:{' '}
              <Text as='span'>
                {itemsOfCart.reduce((acc, item) => {
                  acc = item.count * item.price + acc
                  return acc
                }, 0)}
              </Text>
              تومان
            </Text>
          </Flex>
          <Button onClick={() => dispatch(removeCart())} colorScheme='red'>
            خالی کردن سبد خرید
          </Button>
        </Flex>
      )}
    </>
  )
}
