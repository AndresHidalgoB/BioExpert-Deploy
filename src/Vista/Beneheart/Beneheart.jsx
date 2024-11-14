import React from 'react';
import Monitor3D from '../Modelo/Model';
import './Beneheart.css';
import Cookies from 'js-cookie'; // Importar para manejar cookies
import { useNavigate } from 'react-router-dom'; // Importar para manejar la navegación

function BeneHeart() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const userCode = localStorage.getItem('userCode') || Cookies.get('userCode');
    if (userCode) {
      navigate('/modulos'); // Redirige a /modulos si el usuario está logeado
    } else {
      navigate('/login'); // Redirige a /login si no está logeado
    }
  };

  return (
    <>
      <div className="caracteristicas-container">
        <div className="desfibrilador-container">
          <div className="imagen-desfibrilador">
            <img src="assets/desfibrilador.jpg" alt="Desfibrilador BeneHeart D6" />
          </div>
          <div className="texto-desfibrilador">
            <h2>Desfibrilador BeneHeart D6</h2>
            <p>
              BeneHeart D6, un desfibrilador-monitor bifásico profesional, responde a los requisitos de los profesionales médicos de los hospitales y las clínicas de todo el mundo. El diseño ergonómico, duradero y compacto del desfibrilador D6 hace que esté listo para ser usado en cualquier situación. Su contrastada tecnología garantiza una utilización rápida, eficaz y precisa con diferentes modos de funcionamiento (desfibrilación manual, DEA, marcapasos y modo de monitorización).
            </p>
          </div>
        </div>

        <div className="modulos-titulo">
          <h1>Características</h1>
        </div>

        <div className="grid-container">
          <div className="card-container">
            <div className="card">
              <div className="front">
                <h3>Diseño compacto: fácil de transportar y usar.</h3>
              </div>
              <div className="back">
                <p>1</p>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="front">
                <h3>Pantalla grande y de colores vivos con 4 formas de onda que garantiza la visualización de ECG y las constantes vitales.</h3>
              </div>
              <div className="back">
                <p>2</p>
              </div>
            </div>
          </div>

          {/* Más tarjetas... */}
        </div>
      </div>

      <div className="modulos-titulo">
        <h1>Conócelo</h1>
      </div>

      {/* Modelo 3D del desfibrilador */}
      <Monitor3D />

      {/* Módulos */}
      <div className="modulos-titulo">
        <h1>Módulos</h1>
      </div>

      <div className="modulos-grid">
        <div className="modulo">
          <h2>Desfibrilación Manual</h2>
          <img src="assets/BENEHEART02.jpg" alt="Desfibrilación Manual" />
          <button className="ver-masA" onClick={handleButtonClick}>
            <span>Ver más</span>
            <div className="icono-circuloA">
              <i className="fa-solid fa-square-arrow-up-right"></i>
            </div>
          </button>
        </div>

        <div className="modulo">
          <h2>Monitorización</h2>
          <img src="assets/BENEHEART03.png" alt="Monitorización" />
          <button className="ver-masA" onClick={handleButtonClick}>
            <span>Ver más</span>
            <div className="icono-circuloA">
              <i className="fa-solid fa-square-arrow-up-right"></i>
            </div>
          </button>
        </div>

        <div className="modulo">
          <h2>DEA</h2>
          <img src="assets/BENEHEART04.jpg" alt="DEA" />
          <button className="ver-masA" onClick={handleButtonClick}>
            <span>Ver más</span>
            <div className="icono-circuloA">
              <i className="fa-solid fa-square-arrow-up-right"></i>
            </div>
          </button>
        </div>

        <div className="modulo">
          <h2>Marcapasos</h2>
          <img src="assets/BENEHEART01.jpg" alt="Marcapasos" />
          <button className="ver-masA" onClick={handleButtonClick}>
            <span>Ver más</span>
            <div className="icono-circuloA">
              <i className="fa-solid fa-square-arrow-up-right"></i>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default BeneHeart;
