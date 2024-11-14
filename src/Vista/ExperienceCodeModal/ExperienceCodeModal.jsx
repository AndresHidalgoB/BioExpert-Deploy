import React from 'react';
import './ExperienceCodeModal.css'; // Asegúrate de crear un archivo CSS para estilizar el modal

function ExperienceCodeModal({ isVisible, code, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Código de Experiencia</h2>
        <p className="experience-code">{code}</p>
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ExperienceCodeModal;
