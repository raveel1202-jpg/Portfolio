import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// Central place for all shared design decisions: colors, font, and the
// type styles used across the site. Components pull from this instead of
// hardcoding font sizes themselves.
let theme = createTheme({
  palette: {
    background: { default: '#ffffff' },
    text: { primary: '#111111' },
  },
  typography: {
    // No fontFamily set here on purpose — leaving it out means MUI falls
    // back to its own default font stack (Roboto, Helvetica, Arial).
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
  // Explicit breakpoints (these match MUI's defaults, spelled out so it's
  // clear what each screen-size tier is): xs = phones, sm = small
  // tablets, md = tablets/small laptops, lg = desktops, xl = large screens.
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

// Automatically scales h1-h6 font sizes up smoothly at the sm/md/lg
// breakpoints, so the headline is smaller on phones and larger on desktop
// without us writing manual media queries.
theme = responsiveFontSizes(theme, { breakpoints: ['sm', 'md', 'lg'], factor: 2 })

export default theme
