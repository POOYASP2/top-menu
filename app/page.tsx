import { delay } from '@/utils'
import { MenusWrapper } from '@/components'

const HomePage = async () => {
  await delay(2000)
  return (
    <section>
      <MenusWrapper />
    </section>
  )
}

export default HomePage
