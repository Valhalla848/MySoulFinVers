export const InteriorSection = (): JSX.Element => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f8f1d8] to-[#fef7e7] py-16 lg:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-left mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="font-heading-display text-[#c69d7f] text-3xl md:text-4xl lg:text-5xl tracking-wide leading-tight mb-4">
            НАШ ИНТЕРЬЕР
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#c69d7f] to-[#b8916f] rounded-full animate-pulse-glow"></div>
          <p className="text-gray-600 font-body-text text-base lg:text-lg mt-4 max-w-2xl">
            Погрузитесь в атмосферу уюта и тепла нашего заведения. 
            Каждый уголок создан с любовью для вашего комфорта.
          </p>
        </div>

        {/* Мозаика фотографий - идеальный прямоугольник 2x3 */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Большая фотография - занимает 2 колонки в первом ряду */}
          <div className="col-span-2 lg:col-span-2 animate-scale-in animation-delay-200">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl hover-lift">
              <img
                src="/img/MySoulImg1.png"
                alt="Главный зал кофейни"
                className="w-full h-48 md:h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-heading-subtitle text-base">Главный зал</h3>
                <p className="font-body-text text-xs">Уютная атмосфера для встреч</p>
              </div>
            </div>
          </div>

          {/* Маленькая фотография - 1 колонка в первом ряду */}
          <div className="col-span-1 animate-scale-in animation-delay-400">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl hover-lift">
              <img
                src="/img/MySoulImg2.png"
                alt="Барная стойка"
                className="w-full h-48 md:h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-heading-subtitle text-base">Барная стойка</h3>
                <p className="font-body-text text-xs">Место для кофе</p>
              </div>
            </div>
          </div>

          {/* Второй ряд - 3 равные фотографии */}
          <div className="col-span-1 animate-scale-in animation-delay-600">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl hover-lift">
              <img
                src="/img/MySoulImg3.png"
                alt="Уютный уголок"
                className="w-full h-48 md:h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-heading-subtitle text-base">Уютный уголок</h3>
                <p className="font-body-text text-xs">Для уединения</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 animate-scale-in animation-delay-800">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl hover-lift">
              <img
                src="/img/MySoulImg4.png"
                alt="Детали интерьера"
                className="w-full h-48 md:h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-heading-subtitle text-base">Детали</h3>
                <p className="font-body-text text-xs">Продуманный дизайн</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 animate-scale-in animation-delay-1000">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl hover-lift">
              <img
                src="/img/MySoulImg5.png"
                alt="Общий вид заведения"
                className="w-full h-48 md:h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-heading-subtitle text-base">Общий вид</h3>
                <p className="font-body-text text-xs">Просторное пространство</p>
              </div>
            </div>
          </div>


        </div>

        {/* Дополнительный текст */}
        <div className="text-center mt-12 lg:mt-16 animate-fade-in-up animation-delay-1600">
          <p className="text-gray-700 font-body-text text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Мы создали пространство, где каждая деталь продумана до мелочей. 
            От мягкого освещения до уютных уголков — все направлено на то, 
            чтобы вы чувствовали себя как дома.
          </p>
        </div>
      </div>
    </section>
  );
};
