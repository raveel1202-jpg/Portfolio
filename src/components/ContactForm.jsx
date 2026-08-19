import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

// Simple, honest client-side email format check. It's not a security
// control by itself (real validation still has to happen wherever the
// email actually gets used/stored) — it just catches obvious typos before
// the visitor tries to send anything.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Where the message actually goes: since this is a static site with no
// backend, submitting opens the visitor's own email client with this
// address pre-filled, and the visitor's email included in the message
// body so it can be replied to.
const CONTACT_EMAIL = 'muhammadraveeljamil@gmail.com'

function ContactForm() {
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState(false)

  const isValid = EMAIL_PATTERN.test(email.trim())
  const showError = touched && email.length > 0 && !isValid

  const handleSubmit = (event) => {
    event.preventDefault()
    setTouched(true)
    if (!isValid) return

    const subject = encodeURIComponent('Portfolio contact')
    const body = encodeURIComponent(`Please get in touch with me at: ${email.trim()}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      direction={{ xs: 'column', sm: 'row' }}
      spacing={1.5}
      sx={{ mt: 4, maxWidth: 420 }}
      alignItems={{ sm: 'flex-start' }}
    >
      <TextField
        type="email"
        label="Your email"
        placeholder="you@example.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onBlur={() => setTouched(true)}
        error={showError}
        helperText={showError ? 'Enter a valid email address' : ' '}
        size="small"
        fullWidth
        autoComplete="email"
      />
      <Button
        type="submit"
        variant="contained"
        disableElevation
        sx={{
          textTransform: 'none',
          backgroundColor: '#111111',
          '&:hover': { backgroundColor: '#000000' },
          whiteSpace: 'nowrap',
        }}
      >
        Contact Me
      </Button>
    </Stack>
  )
}

export default ContactForm
