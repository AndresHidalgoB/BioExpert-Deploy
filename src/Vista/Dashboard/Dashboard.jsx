import React, { useEffect, useState } from "react";
import config from "../../config";
import "./Dashboard.css";

function Dashboard() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchStudentsAndPerformances = async () => {
            try {
                const studentsResponse = await fetch(`${config.apiUrl}/students`, {
                    method: "GET",
                });

                if (!studentsResponse.ok) {
                    throw new Error("Error al obtener estudiantes");
                }

                const studentsData = await studentsResponse.json();

                const studentsWithPerformance = await Promise.all(
                    studentsData.students.map(async (student) => {
                        const performanceResponse = await fetch(
                            `${config.apiUrl}/performance/${student.code}`,
                            { method: "GET" }
                        );

                        if (performanceResponse.ok) {
                            const performanceData = await performanceResponse.json();
                            return {
                                ...student,
                                performance: performanceData.performance.modules,
                            };
                        } else {
                            return { ...student, performance: null };
                        }
                    })
                );

                setStudents(studentsWithPerformance);
            } catch (err) {
                console.error(err);
                setError(
                    "Hubo un error al cargar los datos. Por favor, inténtalo de nuevo."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchStudentsAndPerformances();
    }, []);

    if (loading) {
        return <div className="dashboard-loading">Cargando datos...</div>;
    }

    if (error) {
        return <div className="dashboard-error">{error}</div>;
    }

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Dashboard de Estudiantes</h1>
            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo Electrónico</th>
                        <th>Desfibrilación Manual</th>
                        <th>Monitorización</th>
                        <th>DEA</th>
                        <th>Marcapasos</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.code}>
                            <td>
                                <div className="dashboard-student-name">
                                    <img
                                        src={student.profileImage || "/src/assets/profile-avatar.png"}
                                        alt="Foto de Perfil"
                                        className="dashboard-student-photo"
                                    />
                                    {student.fullName}
                                </div>
                            </td>
                            <td>{student.email}</td>
                            {["desfibrilacionManual", "monitorizacion", "dea", "marcapasos"].map(
                                (module) => {
                                    const moduleData =
                                        student.performance && student.performance[module];
                                    const noData =
                                        !moduleData ||
                                        (!moduleData.score && !moduleData.completionTime);

                                    return (
                                        <td key={module}>
                                            {noData ? (
                                                "No presentado aún"
                                            ) : (
                                                <>
                                                    <div>
                                                        Calificación:{" "}
                                                        {moduleData.score || "Sin datos"}
                                                    </div>
                                                    <div>
                                                        Tiempo:{" "}
                                                        {moduleData.completionTime
                                                            ? `${Math.floor(
                                                                  moduleData.completionTime /
                                                                      60
                                                              )} min`
                                                            : "Sin datos"}
                                                    </div>
                                                </>
                                            )}
                                        </td>
                                    );
                                }
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
