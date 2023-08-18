import { Providers } from './providers'
import { BackButtonHeader } from '@/components'
import styles from './styles.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='fa' dir='rtl'>
      <body>
        <header className={styles.mainHeader}>
          <h1 className={styles.title}>Top Menu</h1>
          <BackButtonHeader />
        </header>
        <main className={styles.main}>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
