import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { Link as RouterLink } from 'react-router-dom'

function Hero() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h1" sx={{ mb: 3.5 }}>
        Hello, My Name Is
        <br />
        Raveel Jamil.
      </Typography>

      <Typography variant="subtitle1">
        I am a Computer Engineer in the making with keen interest in
        Cybersecurity, Networking and Quantum Profiling.{' '}
        <Link
          component={RouterLink}
          to="/projects"
          underline="always"
          sx={{ color: '#111111', fontWeight: 700 }}
        >
          Check out what I'm working on next!
        </Link>
      </Typography>
    </Box>
  )
}

export default Hero
