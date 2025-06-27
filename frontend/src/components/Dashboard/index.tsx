import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import logo from '../../logo.png';
import { getContainers, Container as ContainerType } from '../../services/containerService';

const Dashboard = () => {
  const [containers, setContainers] = useState<ContainerType[]>([]);

  useEffect(() => {
    getContainers().then(setContainers);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          mb: 4,
        }}
      >
        <img src={logo} alt="Rust Radio Logo" style={{ width: '150px', marginBottom: '16px' }} />
        <Typography variant="h2" component="h1" gutterBottom>
          Rust Radio
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Votre boîte à outils pour l'analyse de signaux radio.
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom>
        Containers
      </Typography>
      <List>
        {containers.map((container) => (
          <ListItem key={container.id}>
            <ListItemText primary={container.name} secondary={container.id} />
          </ListItem>
        ))}
      </List>

      <Typography variant="body1">
        Bienvenue sur le tableau de bord de Rust Radio. Utilisez le menu de gauche pour naviguer entre les différentes fonctionnalités.
      </Typography>
    </Container>
  );
};

export default Dashboard; 