import React from 'react';
import { Helmet } from 'react-helmet';
import HomePage from './pages/HomePage.jsx';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <>
      <Helmet>
        <title>Asimétrica — Finanzas Estratégicas | CFO Fraccional Colombia</title>
        <meta name="description" content="Dirección Financiera Estratégica para empresas colombianas que quieren crecer con inteligencia. CFO Fraccional, modelos financieros y dashboards accionables." />
      </Helmet>
      <HomePage />
      <Toaster />
    </>
  );
}

export default App;