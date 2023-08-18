'use client'
import {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
} from '@chakra-ui/react'
import type { removeModalProps } from './types'

import { useDispatch } from 'react-redux'
import { removeCart } from '@store/cart/cartSlice'

export const RemoveModal = ({ onClose }: removeModalProps) => {
  const dispatch = useDispatch()
  return (
    <ModalContent bgColor='mainDark'>
      <ModalHeader>حذف سبد</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>آیا از حذف سبد خرید خود اطمینان دارید؟</Text>
      </ModalBody>

      <ModalFooter>
        <Button variant='outline' colorScheme='white' onClick={onClose} me='2'>
          انصراف
        </Button>
        <Button
          onClick={() => {
            dispatch(removeCart())
            onClose()
          }}
          colorScheme='red'
        >
          پاک کردن سبد
        </Button>
      </ModalFooter>
    </ModalContent>
  )
}
