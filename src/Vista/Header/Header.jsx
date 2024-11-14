import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import config from '../../config';
import "./Header.css";

function Encabezado() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userCode = localStorage.getItem("userCode") || Cookies.get("userCode"); // Cambiado de userId a userCode
      if (userCode) {
        setIsLoggedIn(true);
        try {
          const response = await fetch(`${config.apiUrl}/user/${userCode}`); // Usando userCode en la URL
          if (response.ok) {
            const data = await response.json();
            setUserData({
              name: data.user.fullName,
              profileImage: data.user.profileImage,
            });
          } else {
            console.error("Error al obtener los datos del usuario");
          }
        } catch (error) {
          console.error("Error al conectar con la API:", error);
        }
      } else {
        setIsLoggedIn(false);
        setUserData({});
      }
    };

    checkLoginStatus();

    window.addEventListener("loginStatusChanged", checkLoginStatus);

    return () => {
      window.removeEventListener("loginStatusChanged", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    Cookies.remove("userCode"); // Cambiado de userId a userCode
    setIsLoggedIn(false);
    setUserData({});
    navigate("/login");
  };

  return (
    <>
      <header>
        <div className="Logo">
          <Link to="/">
            <img src="/src/assets/LogoSinFondo.png" alt="Logo BioExpert" />
          </Link>
          <h1>BioExpert</h1>
        </div>

        <div className="Botones">
          {isLoggedIn ? (
            <div className="user-info">
              <div
                className="user-profile"
                onClick={() => navigate("/perfil")}
                style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
              >
                <img
                  src={userData.profileImage || "/src/assets/profile-avatar.png"}
                  alt="Foto de perfil"
                  className="profile-image"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                <span>{userData.name || "Usuario"}</span>
              </div>
              <button className="logout" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <>
              <button className="login" onClick={() => navigate("/login")}>Iniciar Sesión</button>
              <button className="suscripcion" onClick={() => navigate("/registro")}>Registrarse</button>
            </>
          )}
        </div>
      </header>

      <nav className="NavAbajo">
        <div className="BotonOption">
          <input type="checkbox" id="btn-switch"></input>
          <label htmlFor="btn-switch" className="lbl-switch">
            <i className="fas fa-sun"></i>
          </label>
        </div>
      </nav>
    </>
  );
}

export default Encabezado;
