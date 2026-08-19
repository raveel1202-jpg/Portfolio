import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'

// List of projects to show off. Add a new project by adding another
// object to this array — nothing else needs to change.
const projects = [
  {
    title: '32-bit RISC-V CPU',
    description: 'A custom-designed 32-bit RISC-V processor.',
  },
  {
    title: 'Library Management System',
    description: 'An application for managing library books, members, and loans.',
  },
  {
    title: 'Vacation Recommendation System',
    description: 'A system that recommends vacation destinations based on user preferences.',
  },
  {
    title: 'Supermarket Inventory System Application',
    description: 'An application for tracking and managing supermarket inventory.',
  },
]

function Projects() {
  return (
    <Box>
      <Typography variant="h1" sx={{ fontSize: '36px', mb: 3 }}>
        Projects
      </Typography>

      <List disablePadding>
        {projects.map((project) => (
          <ListItem key={project.title} disableGutters sx={{ display: 'block', mb: 2 }}>
            <ListItemText
              primary={project.title}
              secondary={project.description}
              primaryTypographyProps={{ fontWeight: 700, fontSize: '19px' }}
              secondaryTypographyProps={{ color: '#4a4a4a' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Projects
