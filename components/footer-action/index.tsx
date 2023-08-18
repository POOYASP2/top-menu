'use client'
import {
  Flex,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
} from '@chakra-ui/react'
import type { RootState } from '@store/cart/store'
import { useSelector, useDispatch } from 'react-redux'
import { RemoveModal } from '../remove-modal'
import { numberFormatter } from '@/utils'

export const FooterAction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
                {numberFormatter(
                  itemsOfCart.reduce((acc: number, item) => {
                    acc = item.count * item.price + acc
                    return acc
                  }, 0)
                )}
              </Text>
              تومان
            </Text>
          </Flex>
          <Button onClick={onOpen} colorScheme='red'>
            خالی کردن سبد خرید
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <RemoveModal onClose={onClose} />
          </Modal>
        </Flex>
      )}
    </>
  )
}
