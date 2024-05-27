import meetingImg from "../assets/route-images/hands-together-photo.jpg";
import happyWomanImg from "../assets/happy-woman.jpg";
import TopSectionHalfImageHalfContent from "../components/common/TopSectionHalfImageHalfContent";
import Encuentranos from "../components/contacto/Encuentranos";
import meetingImgPlaceholder from "../assets/route-images/hands-together-photo-placehoder.jpg";
import "lazysizes";
import happyWomanPlaceholder from "../assets/happy-woman-placeholder.jpg";

const Contacto = () => {
  return (
    <main>
      <TopSectionHalfImageHalfContent
        placeholder={meetingImgPlaceholder}
        image={meetingImg}
      >
        <div className="flex h-full flex-col items-center justify-evenly gap-4 md:flex-row">
          <img
            data-src={happyWomanImg}
            src={happyWomanPlaceholder}
            alt="happy woman in computer"
            className="lazyload hidden h-[80%] w-[60%] rounded-r-full object-cover object-center md:block"
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
      <div className="mx-6">
        <Encuentranos />
      </div>
    </main>
  );
};

export default Contacto;
