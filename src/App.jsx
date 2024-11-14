import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Encabezado from './Vista/Header/Header';
import Formulario from './Vista/Formulario/Formulario';
import Login from './Vista/LogIN/Inicio';
import Hero from './Vista/Index/Hero';
import Terminos from './Vista/Terminos/Terminos';
import Perfil from './Vista/UserPage/UserPage';
import BeneHeart from './Vista/Beneheart/Beneheart';
import Monitor3D from './Vista/Modelo/Model';
import Modulos from './Vista/Modulos/Modulos';
import RendimientoEstudiante from './Vista/Performance/Performance';
import Dashboard from './Vista/Dashboard/Dashboard'; // Importa el componente Dashboard
import ProtectedRoute from './Vista/ProtectedRoute/ProtectedRoute'; // Importa ProtectedRoute
import './App.css'; // Importación de los estilos globales

function App() {
  return (
    <Router>
      {/* Encabezado global */}
      <Encabezado />

      {/* Rutas */}
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Hero />} />
        <Route path="/registro" element={<Formulario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/informacion" element={<Terminos />} />
        <Route path="/Beneheart" element={<BeneHeart />} />

        {/* Rutas protegidas */}
        <Route
          path="/perfil"
          element={
            <ProtectedRoute allowedRoles={['Docente', 'Estudiante']}>
              <Perfil />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={['Docente']}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/modulos"
          element={
            <ProtectedRoute allowedRoles={['Estudiante']}>
              <Modulos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/performance"
          element={
            <ProtectedRoute allowedRoles={['Estudiante']}>
              <RendimientoEstudiante />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
