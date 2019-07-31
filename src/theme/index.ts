import baseStyled, { ThemedStyledInterface } from 'styled-components'

import theme, { Theme } from './theme'
import GlobalStyle from './globals'

export type Theme = Theme
export const styled: ThemedStyledInterface<Theme> = baseStyled

export { theme, GlobalStyle }