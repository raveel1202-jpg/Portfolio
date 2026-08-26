import Grid from '@mui/material/Grid'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'

function App() {
  return (
    <Grid
      container
      sx={{ minHeight: '100vh', px: { xs: 3, sm: 5 }, pt: { xs: 6, sm: 8 } }}
    >
      <Grid size={{ xs: 12, sm: 10, md: 8, lg: 6 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Grid>
    </Grid>
  )
}

export default App
