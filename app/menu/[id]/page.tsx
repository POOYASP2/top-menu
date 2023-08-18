import { SubMenuWrapper } from '@/components'
export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <SubMenuWrapper subMenuId={parseInt(params.id)} />
    </div>
  )
}
