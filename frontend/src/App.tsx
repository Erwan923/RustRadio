import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import { ThemeContext } from './contexts/ThemeContext';


function App() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
      <Router>
        <Layout>
          <Button onClick={toggleTheme}>Toggle Theme</Button>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Périphériques */}
            <Route path="/devices" element={<div>Liste des Périphériques</div>} />
            <Route path="/devices/new" element={<div>Ajouter/Configurer un Périphérique</div>} />
            {/* Pipelines */}
            <Route path="/pipelines" element={<div>Tous les pipelines</div>} />
            <Route path="/pipelines/new" element={<div>Nouveau pipeline</div>} />
            {/* Jobs Radio */}
            <Route path="/jobs" element={<div>Tous les jobs</div>} />
            <Route path="/jobs/launch" element={<div>Lancer un job</div>} />
            {/* Outils SDR */}
            <Route path="/tools/sweep" element={<div>Sweep (balayage RF)</div>} />
            <Route path="/tools/capture" element={<div>Capture I/Q</div>} />
            <Route path="/tools/spectrum" element={<div>Analyse spectre</div>} />
            <Route path="/tools/simulation" element={<div>Simulation (offline)</div>} />
            {/* Logs & Rapports */}
            <Route path="/logs/live" element={<div>Logs live</div>} />
            <Route path="/reports/new" element={<div>Générer rapport</div>} />
            {/* Configuration */}
            <Route path="/config/paths" element={<div>Répertoires & chemins</div>} />
            <Route path="/config/resources" element={<div>Limites ressources</div>} />
            <Route path="/config/theme" element={<div>Thème UI</div>} />
            {/* Aide */}
            <Route path="/help/docs" element={<div>Documentation</div>} />
            <Route path="/help/examples" element={<div>Exemples</div>} />
            <Route path="/help/about" element={<div>À propos</div>} />
          </Routes>
        </Layout>
      </Router>
  );
}

export default App; 