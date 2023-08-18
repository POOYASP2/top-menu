'use client'
import {
  Flex,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  Container,
} from '@chakra-ui/react'
import type { RootState } from '@store/cart/store'
import { useSelector, useDispatch } from 'react-redux'
import { RemoveModal } from '../remove-modal'
import { numberFormatter } from '@/utils'

export const FooterAction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { itemsOfCart, count } = useSelector((state: RootState) => state.cart)
  return (
    <Container>
      {count > 0 && (
        <Flex p='3' justifyContent='space-between'>
          <Flex flexDirection='column'>
            <Text color='gray'>
              تعداد :{' '}
              <Text as='span' color='white' fontWeight='semibold' fontSize='md'>
                {itemsOfCart.reduce((acc: number, item) => {
                  acc = item.count + acc
                  return acc
                }, 0)}{' '}
                عدد
              </Text>
            </Text>
            <Text color='gray'>
              مجموع:
              <Text
                as='span'
                mx='1'
                color='white'
                fontWeight='semibold'
                fontSize='md'
              >
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
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <RemoveModal onClose={onClose} />
          </Modal>
        </Flex>
      )}
    </Container>
  )
}
