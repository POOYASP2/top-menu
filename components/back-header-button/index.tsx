'use client'
import { IconButton, Box } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

export const BackButtonHeader = () => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <Box ms='auto'>
      {pathname !== '/' && (
        <IconButton
          onClick={() => router.back()}
          aria-label='Back to pervious page'
          icon={<ArrowBackIcon boxSize={18} />}
        />
      )}
    </Box>
  )
}
