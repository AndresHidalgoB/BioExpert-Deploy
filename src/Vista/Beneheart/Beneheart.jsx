import Monitor3D from '../Modelo/Model';
import './Beneheart.css';


function BeneHeart() {
    return ( 
        <>
            <div className="caracteristicas-container">
                <div className="desfibrilador-container">
                    <div className="imagen-desfibrilador">
                        <img src="/src/assets/desfibrilador.jpg" alt="Desfibrilador BeneHeart D6" />
                    </div>
                    <div className="texto-desfibrilador">
                        <h2>Desfibrilador BeneHeart D6</h2>
                        <p>BeneHeart D6, un desfibrilador-monitor bifásico profesional, responde a los requisitos de los profesionales médicos de los hospitales y las clínicas de todo el mundo. El diseño ergonómico, duradero y compacto del desfibrilador D6 hace que esté listo para ser usado en cualquier situación. Su contrastada tecnología garantiza una utilización rápida, eficaz y precisa con diferentes modos de funcionamiento (desfibrilación manual, DEA, marcapasos y modo de monitorización).</p>
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

                    <div className="card-container">
                        <div className="card">
                            <div className="front">
                                <h3>Todas las funciones de monitorización de constantes vitales opcionales necesarias están integradas, por lo que resulta muy cómodo en emergencias y no necesita un monitor de paciente independiente.</h3>
                            </div>
                            <div className="back">
                                <p>3</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <div className="card">
                            <div className="front">
                                <h3>Diseño 4 en 1 que incluye monitorización, desfibrilación manual, DEA y marcapasos.</h3>
                            </div>
                            <div className="back">
                                <p>4</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <div className="card">
                            <div className="front">
                                <h3>Gran capacidad de alimentación con pilas que permiten la monitorización continua y de larga duración y descargas durante el transporte sin una fuente de alimentación externa.</h3>
                            </div>
                            <div className="back">
                                <p>5</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <div className="card">
                            <div className="front">
                                <h3>Hasta 360 J de dosis de energía para maximizar el éxito de la desfibrilación.</h3>
                            </div>
                            <div className="back">
                                <p>6</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <div className="card">
                            <div className="front">
                                <h3>Potente almacenamiento de datos con el que no tendrá que preocuparse por perder información.</h3>
                            </div>
                            <div className="back">
                                <p>7</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <div className="card">
                            <div className="front">
                                <h3>Desfibrilación, cardioversión sincronizada y DEA con tecnología bifásica.</h3>
                            </div>
                            <div className="back">
                                <p>8</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modulos-titulo">
                <h1>Conócelo</h1>
            </div>

            {/* Modelo 3D del desfibrilador */}
            <Monitor3D /> 

            {/* Modulos */}

    <div className="modulos-titulo">
        <h1>Módulos</h1>
      </div>
    
    

      <div className="modulos-grid">
        <div className="modulo">
          <h2>Desfibrilación Manual</h2>
          <img src="/BENEHEART02.jpg" alt="Desfibrilación Manual" />
          <button className="ver-masA">
            <span>Ver más</span>
            <div className="icono-circuloA">
              <i className="fa-solid fa-square-arrow-up-right"></i>
            </div>
          </button>
        </div>

        <div className="modulo">
          <h2>Monitorización</h2>
          <img src="/src/assets/BENEHEART03.png" alt="Monitorización" />
          <button className="ver-masA">
            <span>Ver más</span>
            <div className="icono-circuloA">
              <i className="fa-solid fa-square-arrow-up-right"></i>
            </div>
          </button>
        </div>

        <div className="modulo">
          <h2>DEA</h2>
          <img src="/src/assets/BENEHEART04.jpg" alt="DEA" />
          <button className="ver-masA">
            <span>Ver más</span>
            <div className="icono-circuloA">
              <i className="fa-solid fa-square-arrow-up-right"></i>
            </div>
          </button>
        </div>

        <div className="modulo">
          <h2>Marcapasos</h2>
          <img src="/src/assets/BENEHEART01.jpg" alt="Marcapasos" />
          <button className="ver-masA">
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
