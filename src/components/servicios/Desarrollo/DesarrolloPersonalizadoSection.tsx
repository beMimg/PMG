import React from "react";
import SectionMaxW7XL from "../../common/SectionMaxW7XL";

const DesarrolloPersonalizadoSection = () => {
  return (
    <SectionMaxW7XL colored={true} bgHoverColor="theme">
      <div className="flex flex-col gap-8">
        <h1 className="font-bold">Desarrollo Personalizado</h1>
        <div>
          <p>
            Desarrollamos soluciones móviles y web utilizando las tecnologías
            más avanzadas para abordar los desafíos empresariales de nuestros
            clientes.
          </p>
          <p>Nuestros servicios incluyen: </p>
        </div>
        <ul className=" flex flex-col gap-10 text-lg md:grid md:grid-cols-2">
          <li>
            <strong>
              Desarrollo Completo en Entornos Front-End y Back-End:
            </strong>{" "}
            Usamos tecnologías como React, Tailwind CSS, TypeScript, Node.js,
            C#, y otras más para crear aplicaciones modernas y funcionales en
            todos los aspectos, desde la interfaz de usuario hasta la lógica
            empresarial.
          </li>
          <li>
            <strong>Proyectos Llave en Mano:</strong> Nos encargamos de todos
            los aspectos del desarrollo de software, desde la conceptualización
            hasta la entrega final, asegurando soluciones completas y listas
            para implementar.
          </li>
          <li>
            <strong>Equipos Dedicados con Roles Complementarios:</strong>{" "}
            Contamos con equipos altamente especializados en desarrollo, pruebas
            y gestión de proyectos, trabajando en colaboración para garantizar
            la calidad y el éxito de cada proyecto.
          </li>
          <li>
            <strong>
              Orientación en la Entrega y Co-Gestión con el Cliente:
            </strong>{" "}
            Trabajamos de cerca con nuestros clientes para comprender sus
            necesidades y expectativas, asegurando una entrega oportuna y
            satisfactoria de cada solución.
          </li>
        </ul>
      </div>
    </SectionMaxW7XL>
  );
};

export default DesarrolloPersonalizadoSection;
