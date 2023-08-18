import { extendTheme, type ThemeOverride } from '@chakra-ui/react'

import { vazir } from './fonts'
import { colors } from './'

const themeConfig: ThemeOverride = {
  colors,

  direction: 'rtl', // force whole app to support RTL
  styles: {
    global: {
      body: {
        background: 'mainDark',
        color: 'white',
        lineHeight: 'base',
        fontFamily: 'vazir',
        fontFeatureSettings: "'ss01'",
        MozFontFeatureSettings: "'ss01'",
        WebkitFontFeatureSettings: "'ss01'",
        fontSize: { base: 'sm', lg: 'md' },
      },

      img: {
        pointerEvents: 'none',
      },
    },
  },
}

const theme = extendTheme(themeConfig)

export default theme
