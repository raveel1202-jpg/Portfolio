import Grid from '@mui/material/Grid'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'

function App() {
  return (
    <Grid
      container
      sx={{ minHeight: '100vh', px: { xs: 3, sm: 5 }, pt: { xs: 6, sm: 8 } }}
    >
      {/* Content takes almost the full width on phones, and narrows down
          as the screen gets bigger, so line lengths stay comfortable to
          read on any device. Left-aligned, starting near the top-left. */}
      <Grid size={{ xs: 12, sm: 10, md: 8, lg: 6 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Grid>
    </Grid>
  )
}

export default App
