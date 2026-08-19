import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// This component only handles the big headline at the top of the page.
// Font size/weight comes from the theme's "h1" variant (see src/theme.js).
function Hero() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h1">
        Hello, My Name Is
        <br />
        Raveel Jamil.
      </Typography>
    </Box>
  )
}

export default Hero
