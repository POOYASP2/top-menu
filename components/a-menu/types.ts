export type aMenuType = {
  id: number
  title: string
  price: number
  details: {
    description?: string
  }
  thumbnail: {
    id: number
    mime?: string
    url: string
  }
}
export interface aMenuProps {
  item: aMenuType
}
