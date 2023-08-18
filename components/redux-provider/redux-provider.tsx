'use client'

import { store } from '@/redux/cart/store'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'

type ReduxProviderType = {
  children: ReactNode
}

const ReduxProvider = ({ children }: ReduxProviderType) => {
  return <Provider store={store}>{children} </Provider>
}

export default ReduxProvider
