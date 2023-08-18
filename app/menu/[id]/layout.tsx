'use client'
import styles from './styles.module.css'
import { FooterAction } from '@/components'
import ReduxProvider from '@/components/redux-provider/redux-provider'

export default function FooterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.subMenuPage}>
      {children}
      <footer className={styles.subMenuFooter}>
        <ReduxProvider>
          <FooterAction />
        </ReduxProvider>
      </footer>
    </div>
  )
}
