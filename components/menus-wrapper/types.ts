import type { aMenuType } from '../a-menu/types'
import type { imageType } from '@/types/image-type/types'
export interface menusProps {
  id: number
  items?: Array<aMenuType>
  thumbnail?: imageType
  title: string
}
