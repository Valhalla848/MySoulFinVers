import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const ContactSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/menu');
  };

  return (
    <section className="relative w-full overflow-hidden bg-cover bg-center bg-[url(..//macbook-pro-14----8.png)]">
      <div className="absolute inset-0 bg-[#c69d7fb0]" />

      <div className="relative flex flex-col items-center justify-center px-4 py-16 md:py-20">
        <h2 className="font-heading-display text-white text-3xl md:text-4xl lg:text-5xl tracking-wide leading-tight mb-6 md:mb-8">
          НАШЕ МЕНЮ
        </h2>

        <p className="max-w-4xl font-body-text text-white text-base md:text-lg lg:text-xl text-center leading-relaxed mb-6 md:mb-8 px-4">
          Откройте для себя мир изысканных вкусов и ароматов. Каждое блюдо
          создано с любовью и вниманием к деталям, чтобы подарить вам
          незабываемые гастрономические впечатления.
        </p>

        <Button 
          onClick={handleMenuClick}
          className="h-auto bg-[#c69d7f] hover:bg-[#b58d6f] px-6 py-4 font-heading-subtitle text-white text-lg md:text-xl tracking-wide leading-normal"
        >
          ПОСМОТРЕТЬ МЕНЮ
        </Button>
      </div>
    </section>
  );
};
