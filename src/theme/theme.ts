const colors = {
    corePrimary: '#FFFFFF',
    corePrimary1: '#F7F7F7',
    corePrimary2: '#F0F0F0',
    corePrimary3: '#DDDDDD',
    corePrimary4: '#C5C5C5',
    corePrimary5: '#ADADAD',
    coreSecondary: '#0B2039',
    coreSecondary1: '#22354C',
    coreSecondary2: '#3B4C60',
    coreSecondary3: '#536274',
    coreSecondary4: '#6C7988',
    brandPrimary: '#00EBB9',
    accentPrimary: '#00EBB9',
    accentPrimary1: '#02C09A',
    accentPrimary2: '#33EFC7',
    accentPositive: '#01C38D',
    accentPositive1: '#03A077',
    accentPositive2: '#33CFA3',
    accentPositive3: '#99E7D1',
    accentBeAware: '#FF8D00',
    accentBeAware1: '#E57E00',
    accentBeAware2: '#FFC57F',
    accentBeAware3: '#FFE8CC',
    accentNegative: '#FF274B',
    accentNegative1: '#E62343',
    accentNegative2: '#FF92A4',
    accentNegative3: '#FFD3DB',
    tradingBuy: '#2D95FF',
    tradingBuy1: '#BFDEFF',
    transparent: 'transparent',
  }
  
  const lightTheme = {
    colors,
  
    backgroundColor: colors.corePrimary,
    textColor: colors.coreSecondary,
    selectionColor: colors.accentPrimary,
    
  }
  
  export type Theme = typeof lightTheme
  export default lightTheme