import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import ContactForm from '../components/ContactForm.jsx'

// The landing page: headline, a button to the About page, and a simple
// contact form (email input) below it.
function Home() {
  return (
    <>
      <Hero />
      <Button
        component={RouterLink}
        to="/about"
        variant="outlined"
        sx={{
          textTransform: 'none',
          borderColor: '#111111',
          color: '#111111',
          '&:hover': { borderColor: '#111111', backgroundColor: '#f5f5f5' },
        }}
      >
        Learn More
      </Button>
      <ContactForm />
    </>
  )
}

export default Home
