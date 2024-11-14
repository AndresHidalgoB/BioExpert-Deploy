import './Formulario.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import config from '../../config';

function Formulario() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        birthDate: '',
        role: '',
        sex: '',
    });
    const [profileImage, setProfileImage] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setProfileImage(e.target.files[0]);
        previewImage(e);
    };

    const selectOption = (option, field) => {
        setFormData({
            ...formData,
            [field]: option
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        const data = new FormData();
        data.append("fullName", formData.fullName);
        data.append("email", formData.email);
        data.append("password", formData.password);
        data.append("birthDate", formData.birthDate);
        data.append("role", formData.role);
        data.append("sex", formData.sex);
        if (profileImage) {
            data.append("profileImage", profileImage);
        }

        try {
            const response = await fetch(`${config.apiUrl}/register`, {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                const result = await response.json();
                alert("Usuario registrado con éxito");
                navigate('/login'); 
            } else {
                const error = await response.json();
                alert(error.error || "Error en el registro");
            }
        } catch (error) {
            console.error("Error en la petición:", error);
            alert("Error al registrar el usuario");
        }
    };

    return (
        <div className="Registro">
            <h1>Registro</h1>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="grid-container">
                    <div className="upload-container">
                        <label htmlFor="photo" id="imageLabel"></label>
                        <input type="file" id="photo" accept="image/jpg, image/jpeg, image/png" onChange={handleFileChange} />
                        <label htmlFor="photo" className="upload-btn">Subir Foto</label>
                    </div>

                    <div className="fields-container">
                        <div className="input-group">
                            <label htmlFor="fullName">Nombre Completo:</label>
                            <input type="text" id="fullName" value={formData.fullName} onChange={handleChange} required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input type="email" id="email" placeholder="ejemplo@correo.com" value={formData.email} onChange={handleChange} required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" id="password" value={formData.password} onChange={handleChange} required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                            <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="birthDate">Fecha de Nacimiento:</label>
                            <input type="date" id="birthDate" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="fields-container">
                        <div className="input-group">
                            <label>Cargo:</label>
                            <div className="selection-container">
                                <div
                                    className={`selection-box ${formData.role === 'Docente' ? 'selected' : ''}`}
                                    onClick={() => selectOption('Docente', 'role')}
                                >
                                    Docente
                                </div>
                                <div
                                    className={`selection-box ${formData.role === 'Estudiante' ? 'selected' : ''}`}
                                    onClick={() => selectOption('Estudiante', 'role')}
                                >
                                    Estudiante
                                </div>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Sexo:</label>
                            <div className="selection-container">
                                <div
                                    className={`selection-box ${formData.sex === 'Femenino' ? 'selected' : ''}`}
                                    onClick={() => selectOption('Femenino', 'sex')}
                                >
                                    F
                                </div>
                                <div
                                    className={`selection-box ${formData.sex === 'Masculino' ? 'selected' : ''}`}
                                    onClick={() => selectOption('Masculino', 'sex')}
                                >
                                    M
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="terminos">
                        <input type="checkbox" id="aceptoTerminos" required />
                        <label htmlFor="aceptoTerminos">
                            Al marcar esta casilla, usted acepta los <Link to="/informacion" className="enlace-terminos">Términos de Servicio y Política de Privacidad</Link>.
                        </label>
                    </div>

                    <div className="buttons-container">
                        <button type="submit">Completar Registro</button>
                        <h1>o</h1>
                        <button type="button">
                            <img src="/src/assets/Google.png" alt="Google" />
                            Regístrate con tu cuenta de Google
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Formulario;

/* Función para previsualizar la imagen */
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const imageLabel = document.getElementById('imageLabel');
        imageLabel.style.backgroundImage = `url(${reader.result})`;
    }
    reader.readAsDataURL(event.target.files[0]);
}
