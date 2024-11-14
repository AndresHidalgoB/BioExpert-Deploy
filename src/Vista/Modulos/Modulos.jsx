import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import Cookies from 'js-cookie';
import ExperienceCodeModal from '../ExperienceCodeModal/ExperienceCodeModal'; // Importa el componente del modal
import './Modulos.css';

function Modulos() {
  const navigate = useNavigate(); // Crea una función de navegación
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [experienceCode, setExperienceCode] = useState('');

  const handleVerMasClick = () => {
    navigate('/Beneheart'); // Cambia '/ruta-deseada' a la ruta donde quieres redirigir
  };

  const handleExperienceCodeClick = (moduleNumber) => {
    const userCode = localStorage.getItem('userCode') || Cookies.get('userCode'); // Obtén el code del usuario logeado
    if (!userCode) {
      console.error('No hay usuario logueado.');
      return;
    }

    const completeCode = `${moduleNumber}${userCode}`;
    setExperienceCode(completeCode);
    setIsModalVisible(true); // Muestra el modal
  };

  const closeModal = () => {
    setIsModalVisible(false); // Oculta el modal
  };

  return (
    <>
      <div className="desfibrilador-container">
        <div className="texto-container">
          <h2>¿Qué es un desfibrilador?</h2>
          <p>
            Un desfibrilador es un dispositivo médico crucial diseñado para administrar descargas eléctricas controladas a través del pecho de una persona, con el objetivo de restaurar el ritmo cardíaco normal en casos de arritmias potencialmente mortales, como la fibrilación ventricular o la taquicardia ventricular.
          </p>
        </div>
        <div className="imagen-container">
          <div className="imagen-box">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/v_ZfoQksv5c?si=M_no9QZCxxCyiyFi&amp;start=13"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="texto-superpuesto">
              <p>Diseño 4 en 1 que incluye monitorización, desfibrilación manual, DEA y marcapasos.</p>
            </div>
            <button className="v1" onClick={handleVerMasClick}>
              <span>Ver más</span>
              <div className="vicono-circulo">
                <i className="fa-solid fa-square-arrow-up-right"></i>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="modulos-titulo">
        <h1>Módulos</h1>
      </div>

      <div className="modulos-container">
        {/* Desfibrilación Manual */}
        <div className="modulo-card">
          <img src="assets/BENEHEART02.jpg" alt="Desfibrilación Manual" />
          <div className="modulo-texto">
            <h3>Desfibrilación Manual</h3>
            <p>
              En el modo de desfibrilación manual, el operador analiza el ECG (Electrocardiograma) del paciente y, si corresponde, sigue este procedimiento:
              <br />1. Seleccione el modo Desfibrilación manual, ajuste el nivel de energía si es necesario.
              <br />2. Carga.
              <br />3. Aplique la descarga. La desfibrilación se puede realizar mediante palas externas o electrodos multifunción.
              <br />
              <br /> En el modo de desfibrilación manual, también puede realizar una cardioversión sincronizada.
            </p>
            <button className="ver-masA" onClick={() => handleExperienceCodeClick(1)}>
              <span>Empezar experiencia RV</span>
              <div className="icono-circuloA">
                <i className="fa-solid fa-square-arrow-up-right"></i>
              </div>
            </button>
          </div>
        </div>

        {/* Monitorización */}
        <div className="modulo-card">
          <img src="assets/BENEHEART03.png" alt="Monitorización" />
          <div className="modulo-texto">
            <h3>Monitorización</h3>
            <p>
              El equipo está diseñado para monitorear, mostrar, revisar, almacenar e imprimir múltiples parámetros fisiológicos, incluyendo ECG, oximetría de pulso (SpO2), temperatura (Temp), entre otros.
            </p>
            <button className="ver-masA" onClick={() => handleExperienceCodeClick(2)}>
              <span>Empezar experiencia RV</span>
              <div className="icono-circuloA">
                <i className="fa-solid fa-square-arrow-up-right"></i>
              </div>
            </button>
          </div>
        </div>

        {/* DEA */}
        <div className="modulo-card">
          <img src="assets/BENEHEART04.jpg" alt="DEA" />
          <div className="modulo-texto">
            <h3>DEA</h3>
            <p>
              En el modo DEA (Desfibrilador externo automático), el equipo analiza automáticamente el ritmo del ECG del paciente e indica si se detecta o no un ritmo susceptible de descarga. Las indicaciones de voz brindan instrucciones fáciles de seguir e información del paciente para guiarlo a través del proceso de desfibrilación. También se presentan mensajes y botones parpadeantes para reforzar las indicaciones de voz.
            </p>
            <button className="ver-masA" onClick={() => handleExperienceCodeClick(3)}>
              <span>Empezar experiencia RV</span>
              <div className="icono-circuloA">
                <i className="fa-solid fa-square-arrow-up-right"></i>
              </div>
            </button>
          </div>
        </div>

        {/* Marcapasos */}
        <div className="modulo-card">
          <img src="assets/BENEHEART01.jpg" alt="Marcapasos" />
          <div className="modulo-texto">
            <h3>Marcapasos</h3>
            <p>
              El modo "Pacer" ofrece terapia de estimulación transcutánea no invasiva. Los impulsos de estimulación se administran a través de electrodos multifunción utilizando una forma de onda cuadrada monofásica.
            </p>
            <button className="ver-masA" onClick={() => handleExperienceCodeClick(4)}>
              <span>Empezar experiencia RV</span>
              <div className="icono-circuloA">
                <i className="fa-solid fa-square-arrow-up-right"></i>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modal para mostrar el código */}
      <ExperienceCodeModal
        isVisible={isModalVisible}
        code={experienceCode}
        onClose={closeModal}
      />
    </>
  );
}

export default Modulos;
