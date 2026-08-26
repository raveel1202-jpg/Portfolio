import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    background: { default: '#ffffff' },
    text: { primary: '#111111' },
  },
  typography: {
    h1: {
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      fontSize: '48px',
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '19px',
      lineHeight: 1.5,
      color: '#4a4a4a',
    },
    body1: {
      fontWeight: 600,
      fontSize: '19px',
      lineHeight: 1.5,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

theme = responsiveFontSizes(theme, { breakpoints: ['sm', 'md', 'lg'], factor: 2 })

export default theme
