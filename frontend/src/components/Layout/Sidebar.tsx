import React from 'react';
import { Link } from 'react-router-dom';
import { listContainers } from '../../services/api';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
  Box,
  Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import logo from '../../logo.png';
import DnsIcon from '@mui/icons-material/Dns';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import WavesIcon from '@mui/icons-material/Waves';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

const Sidebar = () => {
  const [open, setOpen] = React.useState<{ [key: string]: boolean }>({});

  const handleClick = (name: string) => {
    setOpen(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handleListContainers = async () => {
    try {
      console.log('Fetching containers...');
      const containers = await listContainers();
      console.log('Containers fetched:', containers);
    } catch (error) {
      console.error('Failed to fetch containers:', error);
    }
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={logo} alt="Rust Radio Logo" style={{ width: '40px', verticalAlign: 'middle', marginRight: '10px' }} />
          <Typography variant="h6" component="span" sx={{ verticalAlign: 'middle' }}>
            Rust Radio
          </Typography>
        </Link>
      </Box>
      <Divider />
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItem button onClick={() => handleClick('accueil')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Accueil" />
          {open['accueil'] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open['accueil']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/">
              <ListItemText primary="Vue d’ensemble" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => handleClick('peripheriques')}>
          <ListItemIcon>
            <DnsIcon />
          </ListItemIcon>
          <ListItemText primary="Périphériques" />
          {open['peripheriques'] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open['peripheriques']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/devices">
              <ListItemText primary="Liste" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/devices/new">
              <ListItemText primary="Ajouter / Configurer" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => handleClick('pipelines')}>
          <ListItemIcon>
            <SettingsInputComponentIcon />
          </ListItemIcon>
          <ListItemText primary="Pipelines" />
          {open['pipelines'] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open['pipelines']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/pipelines">
              <ListItemText primary="Tous les pipelines" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/pipelines/new">
              <ListItemText primary="Nouveau pipeline" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => handleClick('jobs')}>
          <ListItemIcon>
            <PlaylistPlayIcon />
          </ListItemIcon>
          <ListItemText primary="Jobs Radio" />
          {open['jobs'] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open['jobs']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/jobs">
              <ListItemText primary="Tous les jobs" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={handleListContainers}>
              <ListItemText primary="Lister les conteneurs (Test)" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => handleClick('outils')}>
          <ListItemIcon>
            <WavesIcon />
          </ListItemIcon>
          <ListItemText primary="Outils SDR" />
          {open['outils'] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open['outils']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/tools/sweep">
              <ListItemText primary="Sweep (balayage RF)" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/tools/capture">
              <ListItemText primary="Capture I/Q" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/tools/spectrum">
              <ListItemText primary="Analyse spectre" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/tools/simulation">
              <ListItemText primary="Simulation (offline)" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => handleClick('logs')}>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Logs & Rapports" />
          {open['logs'] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open['logs']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/logs/live">
              <ListItemText primary="Logs live" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/reports/new">
              <ListItemText primary="Générer rapport" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => handleClick('config')}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Configuration" />
          {open['config'] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open['config']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/config/paths">
              <ListItemText primary="Répertoires & chemins" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/config/resources">
              <ListItemText primary="Limites ressources" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/config/theme">
              <ListItemText primary="Thème UI" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => handleClick('aide')}>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Aide" />
          {open['aide'] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open['aide']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/help/docs">
              <ListItemText primary="Documentation" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/help/examples">
              <ListItemText primary="Exemples" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/help/about">
              <ListItemText primary="À propos" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar; 