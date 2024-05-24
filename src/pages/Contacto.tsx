import meetingImg from "../assets/route-images/hands-together-photo.jpg";
import happyWomanImg from "../assets/happy-woman.jpg";
import TopSectionHalfImageHalfContent from "../components/common/TopSectionHalfImageHalfContent";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import SectionMaxW7XL from "../components/common/SectionMaxW7XL";

const Contacto = () => {
  return (
    <main>
      <TopSectionHalfImageHalfContent image={meetingImg}>
        <div className="flex h-full flex-col items-center justify-evenly gap-4 md:flex-row">
          <img
            src={happyWomanImg}
            alt="happy woman in computer"
            className="hidden h-[80%] rounded-r-full md:block"
          />
          <div className="flex h-full flex-col justify-evenly">
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-semibold">Escríbenos</h2>
              <a
                className="logo-background-color p-4 px-8 font-semibold uppercase text-white transition-all hover:scale-105"
                href="mailto:info@pmg-solutions.es"
              >
                info@pmg-solutions.es
              </a>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h2 className=" font-semibold">Llámanos</h2>
              <a
                className="logo-background-color p-4 px-8 font-semibold uppercase text-white transition-all hover:scale-105"
                href="tel:+34 645 682 314"
              >
                (+34) 645 682 314
              </a>
            </div>
          </div>
        </div>
      </TopSectionHalfImageHalfContent>
      <section className="mt-24 bg-gradient-to-b from-cyan-800  to-teal-500 px-6 py-24 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 ">
          <h1 className="font-bold">Encuéntranos</h1>
          <div className="flex flex-col gap-8 rounded-lg   bg-white p-2 px-6 text-black md:grid md:grid-cols-3 md:justify-items-center">
            <div className="flex flex-row items-center gap-4 ">
              <FaLocationDot className="text-2xl" />
              <div>
                <p className="font-semibold">Localización</p>
                <p className="opacity-80">
                  Calle Plaza de España Nº 1, Planta 1, Oficina 5, 11630 Arcos
                  de la Frontera, Cádiz, España.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <IoIosMail className="text-2xl" />
              <div>
                <p className="font-semibold">Email</p>
                <a className="opacity-80" href="mailto:info@pmg-solutions.es">
                  info@pmg-solutions.es
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <IoIosPhonePortrait className="text-2xl" />
              <div>
                <p className="font-semibold">Teléfono</p>
                <a className="opacity-80" href="tel:+34 645 682 314">
                  (+34) 645 682 314
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionMaxW7XL colored={false} bgHoverColor="none">
        <p>lolk</p>
      </SectionMaxW7XL>
    </main>
  );
};

export default Contacto;
