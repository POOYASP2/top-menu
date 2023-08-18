'use client'
import { Flex } from '@chakra-ui/react'
import data from '../data.json'
import { NothingFound } from '../noting-found'
import { AMenu } from '../a-menu'
import ReduxProvider from '../redux-provider/redux-provider'

export const SubMenuWrapper = (props: { subMenuId: number }) => {
  const foundedSubMenu = data.data.filter((item) => item.id === props.subMenuId)

  return (
    <Flex p='3' flexDirection='column' gap='4'>
      <ReduxProvider>
        {foundedSubMenu[0].items.length === 0 ? (
          <NothingFound />
        ) : (
          foundedSubMenu[0].items.map((item) => (
            // @ts-ignore
            <AMenu key={item.id} item={item} />
          ))
        )}
      </ReduxProvider>
    </Flex>
  )
}
