import meetingImg from "../assets/route-images/hands-together-photo.jpg";
import happyWomanImg from "../assets/happy-woman.jpg";
import Main from "../components/common/Main";
import TopSectionHalfImageHalfContent from "../components/common/TopSectionHalfImageHalfContent";
import DondeNosEncontramos from "../components/contacto/DondeNosEncontramos";

const Contacto = () => {
  return (
    <>
      <TopSectionHalfImageHalfContent image={meetingImg}>
        <div className="flex h-full flex-col items-center justify-between gap-4 md:flex-row">
          <img
            src={happyWomanImg}
            alt="happy woman in computer"
            className="hidden h-[80%] rounded-r-full md:block"
          />
          <div className="flex h-full flex-col  justify-evenly">
            <h1 className="text-4xl font-semibold lg:text-7xl">¡Hablanos!</h1>
            <div>
              <p className="text-xl lg:text-3xl">Teléfono</p>
              <p className="text-2xl font-semibold lg:text-5xl">
                (+34) 645 682 314
              </p>
            </div>
            <div>
              <p className="text-xl lg:text-3xl">Correo electrónico</p>
              <p className="text-2xl font-semibold lg:text-5xl">
                info@pmg-solutions.es
              </p>
            </div>
          </div>
        </div>
      </TopSectionHalfImageHalfContent>
      <Main>
        <DondeNosEncontramos />
      </Main>
    </>
  );
};

export default Contacto;
