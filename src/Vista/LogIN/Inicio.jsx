import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Importa js-cookie
import config from '../../config';
import "./Inicio.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Verificar si hay un código en localStorage o cookie
    const storedUserCode = localStorage.getItem("userCode") || Cookies.get("userCode");
    if (storedUserCode) {
      navigate("/"); // Si hay un código almacenado, redirige al inicio
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar cualquier error previo

    try {
      const response = await fetch(`${config.apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message); // Mensaje de éxito

        if (rememberMe) {
          // Guarda el código del usuario y el rol en localStorage
          localStorage.setItem("userCode", result.user.code);
          localStorage.setItem("userRole", result.user.role);
        } else {
          // Guarda el código del usuario y el rol en una cookie temporal
          Cookies.set("userCode", result.user.code, { expires: 1 }); // Expira en 1 día
          Cookies.set("userRole", result.user.role, { expires: 1 });
        }

        // Emitir el evento para actualizar el header
        window.dispatchEvent(new Event("loginStatusChanged"));

        // Redirigir según el rol del usuario
        if (result.user.role === "Docente") {
          navigate("/dashboard"); // Redirige al Dashboard si es Docente
        } else {
          navigate("/"); // Redirige al inicio si es Estudiante
        }
      } else {
        setError(result.error || "Error en el inicio de sesión");
      }
    } catch (err) {
      console.error("Error en la petición:", err);
      setError("Error en el inicio de sesión");
    }
  };

  return (
    <div className="Login">
      <h1>Inicio de Sesión</h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="input-container">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="Ipassword">Contraseña:</label>
          <input
            type="password"
            id="Ipassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="Recuerdame"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="Recuerdame">Recordarme</label>
        </div>

        <div className="buttons-container">
          <button type="submit">Iniciar</button>
          <Link to="/registro">¿No tienes cuenta aún?</Link>
          <h1>o</h1>
          <button type="button">
            <img src="assets/Google.png" alt="Google" />
            Iniciar con tu cuenta de Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
