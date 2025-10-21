import React from "react";

export const GallerySection = (): JSX.Element => {
  const contactInfo = {
    address: "ул. Исанова, 45. Бишкек, Кыргызстан",
    workingHours: {
      weekdays: "Пн-Пт: 8:00 - 22:00",
      weekends: "Сб-Вс: 9:00 - 23:00",
    },
    phone: "+996 555 123 456",
    email: "hello@mysoul.kg",
  };

  return (
    <section className="w-full bg-[#c69d7f] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-6">
            <img
              className="w-[197px] h-[82px]"
              alt="My Soul Logo"
              src="/group-3.png"
            />

            <div className="flex flex-col gap-4">
              <div className="font-body-text text-black text-lg tracking-normal leading-relaxed">
                <span className="font-heading-subtitle">Адрес:</span>
                <span className="font-body-text text-black text-lg">
                  {" "}
                  {contactInfo.address}
                </span>
              </div>

              <div className="font-body-text text-black text-lg tracking-normal leading-relaxed">
                <span className="font-heading-subtitle">
                  Часы работы
                  <br />
                </span>
                <span className="font-body-text text-black text-lg">
                  {contactInfo.workingHours.weekdays}
                  <br />
                  {contactInfo.workingHours.weekends}
                </span>
              </div>

              <div className="font-body-text text-black text-lg tracking-normal leading-relaxed">
                <span className="font-heading-subtitle">
                  Контакты
                  <br />
                  Телефон:
                </span>
                <span className="font-body-text text-black text-lg">
                  {" "}
                  {contactInfo.phone}
                  <br />
                </span>
                <span className="font-heading-subtitle">Email: </span>
                <span className="font-body-text text-black text-lg">
                  {contactInfo.email}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              className="w-full max-w-[727px] h-auto object-cover"
              alt="Interior space"
              src="/image-105.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
