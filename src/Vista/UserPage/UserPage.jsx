import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import config from '../../config';
import { useNavigate } from 'react-router-dom';
import './UserPage.css';

function Perfil() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        nombre: '',
        fechaNacimiento: '',
        email: '',
        sexo: '',
        cargo: '',
        profileImage: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [updatedData, setUpdatedData] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const userCode = localStorage.getItem('userCode') || Cookies.get('userCode');
            if (!userCode) {
                console.error('No hay usuario logueado.');
                return;
            }

            try {
                const response = await fetch(`${config.apiUrl}/user/${userCode}`);
                if (response.ok) {
                    const data = await response.json();
                    setUserData({
                        nombre: data.user.fullName,
                        fechaNacimiento: data.user.birthDate.split("T")[0],
                        email: data.user.email,
                        sexo: data.user.sex,
                        cargo: data.user.role,
                        profileImage: data.user.profileImage
                    });
                } else {
                    console.error('Error al obtener los datos del usuario');
                }
            } catch (error) {
                console.error('Error al conectar con la API:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleEditToggle = () => {
        if (isEditing) {
            handleSaveChanges();
        } else {
            setIsEditing(true);
            setUpdatedData(userData);
        }
    };

    const handleSaveChanges = async () => {
        const userCode = localStorage.getItem('userCode') || Cookies.get('userCode');
        const formData = new FormData();
        formData.append("code", userCode);
        formData.append("fullName", updatedData.nombre);
        formData.append("birthDate", updatedData.fechaNacimiento);
        formData.append("email", updatedData.email);
        if (selectedImage) {
            formData.append("profileImage", selectedImage);
        }

        try {
            const response = await fetch(`${config.apiUrl}/updateUser`, {
                method: 'PUT',
                body: formData
            });
            if (response.ok) {
                const result = await response.json();
                setUserData({
                    nombre: result.user.fullName,
                    fechaNacimiento: result.user.birthDate.split("T")[0],
                    email: result.user.email,
                    sexo: result.user.sex,
                    cargo: result.user.role,
                    profileImage: result.user.profileImage
                });
                setIsEditing(false);
            } else {
                console.error('Error al actualizar los datos del usuario');
            }
        } catch (error) {
            console.error('Error al conectar con la API:', error);
        }
    };

    const handleInputChange = (e) => {
        setUpdatedData({
            ...updatedData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
        const reader = new FileReader();
        reader.onload = () => {
            setUserData(prevState => ({ ...prevState, profileImage: reader.result }));
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const handlePasswordChange = async () => {
        if (newPassword !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        if (newPassword.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres");
            return;
        }

        const userCode = localStorage.getItem('userCode') || Cookies.get('userCode');
        const formData = new FormData();
        formData.append('code', userCode);
        formData.append('newPassword', newPassword);

        try {
            const response = await fetch(`${config.apiUrl}/changePassword`, {
                method: 'PUT',
                body: formData
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error al cambiar la contraseña:', errorData.error);
                alert(`Error al cambiar la contraseña: ${errorData.error}`);
            } else {
                alert("Contraseña actualizada con éxito");
                setNewPassword('');
                setConfirmPassword('');
            }
        } catch (error) {
            console.error('Error al conectar con la API:', error);
            alert('Error al conectar con la API. Por favor, revisa la consola para más detalles.');
        }
    };

    const handleNavigateToModules = () => {
        navigate('/modulos');
    };

    const handleNavigateToPerformance = () => {
        navigate('/performance');
    };

    const handleNavigateToDashboard = () => {
        navigate('/dashboard');
    };

    return (
        <div className="perfil-container">
            <h1>Perfil</h1>
            <div className="perfil-content">
                <div className="perfil-info">
                    <div className="perfil-avatar">
                        <img src={userData.profileImage || "assets/profile-avatar.png"} alt="Foto de Perfil" />
                        {isEditing && (
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                        )}
                    </div>
                    <div className="perfil-detalles">
                        <div className="perfil-item">
                            <strong>Nombre:</strong>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="nombre"
                                    value={updatedData.nombre}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                userData.nombre
                            )}
                        </div>
                        <div className="perfil-item">
                            <strong>Fecha de Nacimiento:</strong>
                            {isEditing ? (
                                <input
                                    type="date"
                                    name="fechaNacimiento"
                                    value={updatedData.fechaNacimiento}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                userData.fechaNacimiento
                            )}
                        </div>
                        <div className="perfil-item">
                            <strong>Correo electrónico:</strong>
                            {isEditing ? (
                                <input
                                    type="email"
                                    name="email"
                                    value={updatedData.email}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                userData.email
                            )}
                        </div>
                        <div className="perfil-item">
                            <strong>Sexo:</strong>
                            {userData.sexo}
                        </div>
                        <div className="perfil-item">
                            <strong>Cargo:</strong>
                            {userData.cargo}
                        </div>
                    </div>
                    <button className="perfil-btn" onClick={handleEditToggle}>
                        {isEditing ? "Confirmar" : "Editar"}
                    </button>
                </div>

                {/* Botones de Navegación */}
                <div className="perfil-navegacion">
                    {userData.cargo === "Docente" ? (
                        <button className="perfil-btn" onClick={handleNavigateToDashboard}>Ir al Dashboard</button>
                    ) : (
                        <>
                            <button className="perfil-btn" onClick={handleNavigateToModules}>Ir a Módulos</button>
                            <button className="perfil-btn" onClick={handleNavigateToPerformance}>Ver Rendimiento</button>
                        </>
                    )}
                </div>

                {/* Cambio de Contraseña */}
                <div className="cambio-contraseña">
                    <h2>Cambio de Contraseña</h2>
                    <div className="input-group">
                        <label htmlFor="newPassword">Nueva Contraseña:</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button className="perfil-btn" onClick={handlePasswordChange}>Cambiar Contraseña</button>
                </div>
            </div>
        </div>
    );
}

export default Perfil;
