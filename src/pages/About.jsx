import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { Link as RouterLink } from 'react-router-dom'

// Reached via the "Learn More" button on the home page. Repeats the intro
// line, then ends with a sentence that links through to the Projects page.
function About() {
  return (
    <Box>
      <Typography variant="body1">
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

export default About
