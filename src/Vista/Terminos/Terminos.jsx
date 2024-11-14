import "./Terminos.css";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import Cookies from "js-cookie"; // Importar Cookies

function Terminos() {
  const navigate = useNavigate(); // Inicializar useNavigate

  const handleButtonClick = () => {
    const userCode = localStorage.getItem("userCode") || Cookies.get("userCode");
    if (userCode) {
      navigate("/modulos"); // Redirigir a /modulos si el usuario está logeado
    } else {
      navigate("/login"); // Redirigir a /login si no está logeado
    }
  };

  return (
    <>
      <div className="experiencia-rv">
        <div className="experiencia-texto">
          <p>
            BioExpert está diseñado para proporcionar una experiencia educativa
            avanzada y realista a estudiantes de ingeniería biomédica mediante
            simulaciones interactivas en realidad virtual. El sistema se centra
            en el monitor desfibrilador BENEHEART D6, ofreciendo una comprensión
            profunda y práctica de su funcionamiento. A diferencia de los
            métodos de enseñanza pasivos, BioExpert utiliza la tecnología de
            realidad virtual para mejorar significativamente la retención de
            conocimientos y habilidades prácticas en un entorno controlado y
            realista.
          </p>
        </div>
        <div className="experiencia-imagen">
          <img src="assets/IA.webp" alt="Experiencia VR" />
        </div>
      </div>

      <div className="realidad-virtual">
        <h2>¿Realidad Virtual?</h2>
        <p>
          La realidad virtual es una tecnología que permite crear entornos
          simulados en los que los usuarios pueden interactuar de manera
          tridimensional. Mediante el uso de dispositivos especiales, como
          cascos de visualización y sensores de movimiento, la realidad virtual
          sumerge a los usuarios en experiencias digitales altamente inmersivas
          y detalladas.
        </p>
        <button
          className="ver-mas"
          onClick={handleButtonClick} // Usar la función para redireccionar según el estado de login
        >
          <span>Empezar experiencia RV</span>
          <div className="icono-circulo">
            <i className="fa-solid fa-square-arrow-up-right"></i>
          </div>
        </button>
      </div>

      <div className="terminos-container">
        <div className="terminos">
          <div className="modulos-titulo">
            <h1>Términos de Servicio de BioExpert</h1>
          </div>
          <span>Última actualización: Mayo 2024</span>
          <p>
            Este acuerdo de términos de servicio (el "Acuerdo") es un contrato
            legalmente vinculante entre JSI SOLUTIONS. ("BioExpert", "nosotros",
            "nuestro") y usted ("usted", "su", o "usuario"), ya sea que sea un
            estudiante utilizando nuestros dispositivos de realidad virtual en
            su currículo académico ("Estudiante de Ingeniería Biomédica") o una
            organización o individuo suscrito a nuestra plataforma para fines de
            capacitación ("Usuario Empresarial").
          </p>
          <p>
            Este Acuerdo rige su uso de nuestros servicios, que incluyen, entre
            otros, el acceso a nuestra biblioteca de contenidos, los
            dispositivos de realidad virtual proporcionados por BioExpert, y
            nuestro sitio web y panel de control web (colectivamente, los
            "Servicios").
          </p>

          <h3>Aceptación de los términos</h3>
          <p>
            Al acceder o utilizar nuestros Servicios, usted acepta estar
            vinculado por este Acuerdo. Si no está de acuerdo con este Acuerdo,
            no podrá acceder ni utilizar nuestros Servicios.
          </p>

          <h3>Acceso a la Biblioteca de Contenidos</h3>
          <p>
            BioExpert ofrece a los usuarios acceso a una biblioteca de
            contenidos que es propiedad de BioExpert. Su acceso está sujeto a
            las siguientes condiciones:
          </p>
          <ul>
            <li>
              <strong>Uso de la Biblioteca de Contenidos:</strong> Los usuarios,
              ya sean Estudiantes de Ingeniería Biomédica o Usuarios
              Empresariales, no pueden compartir ni distribuir la biblioteca de
              contenidos o cualquier parte de ella a terceros sin nuestro
              consentimiento escrito previo.
            </li>
            <li>
              <strong>Actualizaciones de la Biblioteca de Contenidos:</strong>{" "}
              BioExpert se reserva el derecho de modificar, actualizar o
              eliminar cualquier contenido de la biblioteca de contenidos en
              cualquier momento, sin previo aviso.
            </li>
          </ul>

          <h3>Sitio Web y Panel de Control Web</h3>
          <p>
            BioExpert también proporciona un sitio web y un panel de control web
            como parte de los Servicios. Su uso de estos está sujeto a las
            siguientes condiciones:
          </p>
          <ul>
            <li>
              <strong>Cumplimiento Legal:</strong> Todos los usuarios deben
              cumplir con todas las leyes y regulaciones aplicables al usar el
              sitio web y el panel de control web.
            </li>
            <li>
              <strong>Cambios en la Plataforma:</strong> BioExpert se reserva el
              derecho de modificar, update, or remove any part of the website or
              web dashboard at any time, without prior notice.
            </li>
          </ul>

          <h3>Propiedad Intelectual</h3>
          <p>
            BioExpert retiene la propiedad de todos los derechos de propiedad
            intelectual en los Servicios, incluidos, entre otros, la biblioteca
            de contenidos, los dispositivos de realidad virtual, el sitio web y
            el panel de control web. Los usuarios no pueden utilizar ninguna de
            nuestras propiedades intelectuales sin nuestro consentimiento
            escrito previo.
          </p>

          <h3>Seguridad y Uso Adecuado de Equipos de VR</h3>
          <ul>
            <li>
              <strong>Reconocimiento del Usuario:</strong> Los usuarios
              reconocen que las experiencias de realidad virtual pueden inducir
              mareos o malestar. Si surge algún malestar, los usuarios deben
              interrumpir inmediatamente el uso y consultar a un médico si es
              necesario.
            </li>
          </ul>

          <h3>Protección de Datos y Privacidad</h3>
          <ul>
            <li>
              <strong>Cumplimiento de la Privacidad:</strong> BioExpert cumple
              con todas las leyes aplicables de protección de datos, incluyendo
              el GDPR y las leyes locales. Todos los datos recogidos serán
              tratados de manera legal, justa y transparente.
            </li>
            <li>
              <strong>Seguridad de los Datos:</strong> Implementamos medidas de
              seguridad robustas para proteger los datos personales de los
              usuarios contra el acceso no autorizado, la alteración, la
              divulgación o la destrucción.
            </li>
          </ul>

          <h3>Accesibilidad</h3>
          <ul>
            <li>
              <strong>Compromiso con la Accesibilidad:</strong> Nos esforzamos
              por hacer que nuestros Servicios sean accesibles para personas con
              discapacidades, cumpliendo con las Normas de Accesibilidad Web
              (WCAG) y otras regulaciones aplicables.
            </li>
          </ul>

          <h3>Modificaciones a los Términos</h3>
          <p>
            BioExpert se reserva el derecho de modificar estos términos en
            cualquier momento. Se espera que los usuarios revisen estos términos
            regularmente para asegurarse de que están informados de cualquier
            cambio.
          </p>

          <h3>Limitación de Responsabilidad</h3>
          <p>
            En ningún caso BioExpert, ni ninguno de sus oficiales, directores o
            empleados, será responsable por daños directos, indirectos,
            incidentales, especiales, consecuenciales o ejemplares que surjan en
            conexión con el uso de nuestros Servicios, independientemente de que
            se haya avisado o no de la posibilidad de tales daños.
          </p>
        </div>

        <div className="terminos">
          <div className="modulos-titulo">
            <h1>Política de Privacidad de BioExpert</h1>
          </div>
          <span>Última actualización: Mayo 2024</span>
          <p>
            JSI SOLUTIONS. ("BioExpert", "nosotros", "nuestro") respeta su
            privacidad y está comprometido a proteger sus datos personales. Esta
            política de privacidad (la "Política") describe cómo recopilamos,
            utilizamos y divulgamos sus datos personales cuando utiliza nuestros
            servicios, incluyendo, pero no limitado a, acceso a nuestra
            biblioteca de contenido, dispositivos de realidad virtual
            proporcionados por BioExpert, servicios de desarrollo de contenido
            VR personalizado, y nuestro sitio web y panel de control web
            (colectivamente, los "Servicios").
          </p>

          <h3>Recopilación de Datos Personales</h3>
          <p>
            Podemos recopilar los siguientes datos personales cuando utiliza
            nuestros Servicios:
          </p>
          <ul>
            <li>
              <strong>a.</strong> Información de contacto, incluyendo su nombre,
              dirección de correo electrónico y número de teléfono.
            </li>
            <li>
              <strong>b.</strong> Información de pago, incluyendo detalles de
              tarjetas de crédito u otra información de pago.
            </li>
            <li>
              <strong>c.</strong> Información del dispositivo y uso, incluyendo
              información sobre su dispositivo y cómo utiliza nuestros
              Servicios.
            </li>
          </ul>

          <h3>Uso de Datos Personales</h3>
          <p>Utilizamos sus datos personales para los siguientes fines:</p>
          <ul>
            <li>
              <strong>a.</strong> Proveer y mejorar nuestros Servicios,
              incluyendo la biblioteca de contenido, dispositivos de realidad
              virtual, servicios de desarrollo de contenido VR personalizado,
              sitio web y panel de control web.
            </li>
            <li>
              <strong>b.</strong> Procesar pagos y cumplir con sus pedidos de
              nuestros Servicios.
            </li>
            <li>
              <strong>c.</strong> Comunicarnos con usted acerca de su uso de
              nuestros Servicios.
            </li>
            <li>
              <strong>d.</strong> Cumplir con nuestras obligaciones legales y
              proteger nuestros derechos legales.
            </li>
          </ul>

          <h3>Divulgación de Datos Personales</h3>
          <p>
            Podemos divulgar sus datos personales a las siguientes categorías de
            terceros:
          </p>
          <ul>
            <li>
              <strong>a.</strong> Proveedores de servicios que nos ayudan a
              proveer nuestros Servicios, incluyendo, pero no limitado a,
              procesadores de pagos, proveedores de envío y proveedores de
              servicios al cliente.
            </li>
            <li>
              <strong>b.</strong> Autoridades policiales o gubernamentales, si
              es requerido por la ley o si creemos de buena fe que la
              divulgación es necesaria para proteger nuestros derechos legales o
              la seguridad de otros.
            </li>
          </ul>

          <h3>Retención de Datos</h3>
          <p>
            Retendremos sus datos personales tanto tiempo como sea necesario
            para proporcionarle nuestros Servicios, o según lo requiera la ley.
          </p>

          <h3>Sus Derechos (GDPR)</h3>
          <p>
            Usted tiene los siguientes derechos con respecto a sus datos
            personales:
          </p>
          <ul>
            <li>
              <strong>a.</strong> Acceder a sus datos personales que poseemos.
            </li>
            <li>
              <strong>b.</strong> Solicitar que corrijamos cualquier dato
              personal inexacto o incompleto.
            </li>
            <li>
              <strong>c.</strong> Solicitar que eliminemos sus datos personales.
            </li>
            <li>
              <strong>d.</strong> Oponerse o restringir el procesamiento de sus
              datos personales.
            </li>
            <li>
              <strong>e.</strong> Retirar su consentimiento al procesamiento de
              sus datos personales.
            </li>
          </ul>

          <h3>CCPA (No Vender Mi Información Personal)</h3>
          <p>
            Bajo la CCPA, entre otros derechos, los consumidores de California
            tienen el derecho de:
          </p>
          <ul>
            <li>
              <strong>a.</strong> Solicitar que un negocio que recopila datos
              personales de un consumidor divulgue las categorías y piezas
              específicas de datos personales que un negocio ha recopilado sobre
              los consumidores.
            </li>
            <li>
              <strong>b.</strong> Solicitar que un negocio elimine cualquier
              dato personal sobre el consumidor que un negocio ha recopilado.
            </li>
            <li>
              <strong>c.</strong> Solicitar que un negocio que vende datos
              personales de un consumidor, no venda los datos personales del
              consumidor. (BioExpert no vende datos).
            </li>
          </ul>

          <h3>Información Infantil</h3>
          <p>
            Otra parte de nuestra prioridad es agregar protección para los niños
            mientras usan internet. Animamos a los padres y tutores a observar,
            participar y/o supervisar y guiar su actividad en línea.
          </p>
          <p>
            BioExpert no recopila conscientemente ninguna información personal
            identificable de niños menores de 13 años. Si cree que su hijo ha
            proporcionado este tipo de información en nuestro sitio web, le
            animamos a contactarnos inmediatamente y haremos nuestros mejores
            esfuerzos para eliminar rápidamente dicha información de nuestros
            registros.
          </p>

          <h3>Cambios en esta Política</h3>
          <p>
            Podemos actualizar esta Política de vez en cuando publicando una
            nueva versión en nuestro sitio web. Proporcionaremos aviso de
            cualquier cambio material a esta Política según lo requiera la ley.
          </p>

          <h3>Contáctenos</h3>
          <p>
            Si tiene alguna pregunta o preocupación acerca de esta Política o
            nuestras prácticas de privacidad, por favor contáctenos en{" "}
            <a href="mailto:jsi.solutions.uao@gmail.com">
              jsi.solutions.uao@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default Terminos;
