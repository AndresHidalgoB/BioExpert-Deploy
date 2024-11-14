import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import config from '../../config';
import './Performance.css';

function RendimientoEstudiante() {
    const [performanceData, setPerformanceData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPerformanceData = async () => {
            const userCode = localStorage.getItem('userCode') || Cookies.get('userCode');

            if (!userCode) {
                console.error('No hay usuario logueado.');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${config.apiUrl}/performance/${userCode}`);
                if (response.ok) {
                    const data = await response.json();
                    setPerformanceData(data.performance.modules);
                } else {
                    console.error('Error al obtener los datos de rendimiento');
                }
            } catch (error) {
                console.error('Error al conectar con la API:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPerformanceData();
    }, []);

    if (loading) {
        return <div className="performance-loading">Cargando datos de rendimiento...</div>;
    }

    if (!performanceData) {
        return (
            <div className="performance-container">
                <p>No hay datos de rendimiento disponibles.</p>
            </div>
        );
    }

    const icons = {
        desfibrilacionManual: 'fas fa-hand-paper',
        monitorizacion: 'fas fa-heartbeat',
        dea: 'fas fa-cogs',
        marcapasos: 'fas fa-heart',
    };

    return (
        <div className="performance-container">
            <h1>Rendimiento del Estudiante</h1>
            <div className="performance-content">
                {Object.keys(performanceData).map((moduloKey, index) => {
                    const modulo = performanceData[moduloKey];
                    return (
                        <div key={index} className="performance-modulo-card">
                            <div className="performance-modulo-header">
                                <i className={`${icons[moduloKey]} performance-modulo-icon`}></i>
                                <h2 className="performance-modulo-title">
                                    {moduloKey === 'dea'
                                        ? 'DEA'
                                        : moduloKey
                                              .charAt(0)
                                              .toUpperCase() +
                                          moduloKey
                                              .slice(1)
                                              .replace(/([A-Z])/g, ' $1')}
                                </h2>
                            </div>
                            {modulo.presentationDateTime ? (
                                <table className="performance-modulo-details">
                                    <tbody>
                                        <tr>
                                            <th>Fecha de presentación:</th>
                                            <td>
                                                {new Date(modulo.presentationDateTime).toLocaleString()}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Tiempo tomado:</th>
                                            <td>
                                                {modulo.completionTime
                                                    ? `${Math.floor(modulo.completionTime / 60)} minutos`
                                                    : 'N/A'}
                                            </td>
                                        </tr>
                                        <tr className="highlight-score">
                                            <th className="highlight-score-label">Calificación:</th>
                                            <td className="highlight-score-value">
                                                {modulo.score ? modulo.score : 'Sin calificación'}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            ) : (
                                <div className="not-presented-message highlight-message">
                                    Prueba no realizada aún
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default RendimientoEstudiante;
