import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  name: string;
  weight?: string;
  price: string;
  description: string;
  allergens?: string[];
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

interface MenuSection {
  name: string;
  categories: MenuCategory[];
}

const menuData = {
  food: {
    name: "МЕНЮ (ЕДА)",
    categories: [
      {
        name: "ПЕРЕКУСЫ",
        items: [
          {
            name: "Крок-мадам тост",
            weight: "250 г",
            price: "300 с.",
            description: "Тост с ветчиной, сыром и яйцом",
            allergens: ["глютен", "молочные продукты", "яйца"]
          },
          {
            name: "Брускетта с томатами и базиликом",
            weight: "250 г",
            price: "260 с.",
            description: "Итальянская брускетта с томатами и базиликом",
            allergens: ["глютен"]
          },
          {
            name: "Брускетта с авокадо и лососем",
            weight: "310 г",
            price: "450 с.",
            description: "Брускетта с авокадо и лососем",
            allergens: ["рыба"]
          },
          {
            name: "Брускетта с ростбифом и вялеными томатами",
            weight: "210 г",
            price: "450 с.",
            description: "Брускетта с ростбифом и вялеными томатами",
            allergens: ["глютен"]
          },
          {
            name: "Брускетта с телятиной и обожжёнными томатами",
            weight: "330 г",
            price: "450 с.",
            description: "Брускетта с телятиной и обожжёнными томатами",
            allergens: ["глютен"]
          },
          {
            name: "Сэндвич с курицей, цукини и томатами",
            weight: "350 г",
            price: "290 с.",
            description: "Сэндвич с курицей, цукини и томатами",
            allergens: ["глютен"]
          },
          {
            name: "Сэндвич с телятиной, цукини и томатами",
            weight: "350 г",
            price: "390 с.",
            description: "Сэндвич с телятиной, цукини и томатами",
            allergens: ["глютен"]
          }
        ]
      },
      {
        name: "ЗАВТРАКИ",
        items: [
          {
            name: "Сырники домашние с черничным джемом",
            weight: "180 г",
            price: "280 с.",
            description: "Нежные домашние сырники с натуральным черничным джемом",
            allergens: ["молочные продукты", "яйца", "глютен"]
          },
          {
            name: "Венские вафли с томлёным шоколадом",
            weight: "300 г",
            price: "350 с.",
            description: "Хрустящие венские вафли с густым томлёным шоколадом",
            allergens: ["глютен", "молочные продукты", "яйца"]
          },
          {
            name: "Каши на молоке",
            weight: "300 г",
            price: "230 с.",
            description: "Рисовая / гречневая / манная / пять злаков / пшённая / мюсли",
            allergens: ["молочные продукты"]
          }
        ]
      },
      {
        name: "САЛАТЫ",
        items: [
          {
            name: "С томлёной грушей",
            weight: "350 г",
            price: "490 с.",
            description: "Салат с томлёной грушей",
            allergens: []
          },
          {
            name: "С бурратой",
            weight: "350 г",
            price: "530 с.",
            description: "Салат с бурратой",
            allergens: ["молочные продукты"]
          },
          {
            name: "Цезарь с курицей",
            weight: "350 г",
            price: "380 с.",
            description: "Классический салат Цезарь с куриным филе",
            allergens: ["глютен", "молочные продукты", "яйца"]
          },
          {
            name: "Цезарь с креветками",
            weight: "350 г",
            price: "470 с.",
            description: "Салат Цезарь с креветками",
            allergens: ["глютен", "молочные продукты", "яйца", "морепродукты"]
          },
          {
            name: "Цезарь с лососем",
            weight: "350 г",
            price: "470 с.",
            description: "Салат Цезарь с лососем",
            allergens: ["глютен", "молочные продукты", "яйца", "рыба"]
          }
        ]
      },
      {
        name: "СУПЫ",
        items: [
          {
            name: "Крем-суп",
            price: "300 с.",
            description: "Чечевичный / грибной / шпинатный",
            allergens: ["молочные продукты"]
          },
          {
            name: "Щавелевый с телятиной и яйцом пашот",
            price: "350 с.",
            description: "Щавелевый суп с телятиной и яйцом пашот",
            allergens: ["яйца"]
          },
          {
            name: "Том ям с тигровыми креветками",
            price: "480 с.",
            description: "Том ям с тигровыми креветками",
            allergens: ["морепродукты"]
          }
        ]
      },
      {
        name: "ПИЦЦА",
        items: [
          {
            name: "Пепперони",
            price: "450 с.",
            description: "Классическая пицца пепперони",
            allergens: ["глютен", "молочные продукты"]
          },
          {
            name: "Флорентийская",
            price: "470 с.",
            description: "Флорентийская пицца",
            allergens: ["глютен", "молочные продукты"]
          },
          {
            name: "Лосось с руколой и сыром Филадельфия",
            price: "680 с.",
            description: "Пицца с лососем, руколой и сыром Филадельфия",
            allergens: ["глютен", "молочные продукты", "рыба"]
          }
        ]
      },
      {
        name: "ОСНОВНЫЕ БЛЮДА",
        items: [
          {
            name: "Бургер с телятиной",
            weight: "550 г",
            price: "550 с.",
            description: "Сочный бургер с нежной телятиной и свежими овощами",
            allergens: ["глютен"]
          },
          {
            name: "Бургер с курицей",
            weight: "550 г",
            price: "450 с.",
            description: "Бургер с курицей",
            allergens: ["глютен"]
          },
          {
            name: "Куриная грудка с овощами и сливочным соусом",
            weight: "380 г",
            price: "330 с.",
            description: "Куриная грудка с овощами и сливочным соусом",
            allergens: ["молочные продукты"]
          }
        ]
      }
    ]
  },
  drinks: {
    name: "БАР (НАПИТКИ)",
    categories: [
      {
        name: "КОФЕ",
        items: [
          {
            name: "Капучино",
            price: "170/190/250 с.",
            description: "250/350/450 мл",
            allergens: ["молочные продукты"]
          },
          {
            name: "Латте",
            price: "190/240 с.",
            description: "350/450 мл",
            allergens: ["молочные продукты"]
          },
          {
            name: "Американо",
            price: "130/170/220 с.",
            description: "250/350/450 мл",
            allergens: []
          },
          {
            name: "Эспрессо",
            price: "110/150 с.",
            description: "35/70 мл",
            allergens: []
          }
        ]
      },
      {
        name: "РАФ КОФЕ",
        items: [
          {
            name: "Ванильный раф",
            price: "290 с.",
            description: "350 мл",
            allergens: ["молочные продукты"]
          },
          {
            name: "Ореховый раф",
            price: "290 с.",
            description: "350 мл",
            allergens: ["молочные продукты", "орехи"]
          },
          {
            name: "Пряный раф",
            price: "290 с.",
            description: "350 мл",
            allergens: ["молочные продукты"]
          }
        ]
      },
      {
        name: "АЙС КОФЕ",
        items: [
          {
            name: "Айс капучино",
            price: "190 с.",
            description: "350 мл",
            allergens: ["молочные продукты"]
          },
          {
            name: "Айс латте",
            price: "190 с.",
            description: "350 мл",
            allergens: ["молочные продукты"]
          },
          {
            name: "Эспрессо тоник",
            price: "290 с.",
            description: "350 мл",
            allergens: []
          }
        ]
      },
      {
        name: "ЛИМОНАДЫ",
        items: [
          {
            name: "Манго-маракуйя",
            price: "230/450 с.",
            description: "0,5/1 л",
            allergens: []
          },
          {
            name: "Мохито фреш",
            price: "290/560 с.",
            description: "0,5/1 л",
            allergens: []
          },
          {
            name: "Апельсин-манго",
            price: "230/450 с.",
            description: "0,5/1 л",
            allergens: []
          }
        ]
      },
      {
        name: "ЧАИ",
        items: [
          {
            name: "Зелёный Сенча",
            price: "220 с.",
            description: "1 л",
            allergens: []
          },
          {
            name: "Чёрный Assam",
            price: "200 с.",
            description: "1 л",
            allergens: []
          },
          {
            name: "Молочный улун",
            price: "220 с.",
            description: "1 л",
            allergens: ["молочные продукты"]
          }
        ]
      }
    ]
  }
};

const allergenColors = {
  "глютен": "bg-amber-100 text-amber-800",
  "молочные продукты": "bg-blue-100 text-blue-800",
  "яйца": "bg-yellow-100 text-yellow-800",
  "рыба": "bg-cyan-100 text-cyan-800",
  "морепродукты": "bg-indigo-100 text-indigo-800",
  "орехи": "bg-orange-100 text-orange-800"
};

export const MenuPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<'food' | 'drinks'>('food');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const currentData = menuData[activeSection];

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef7e7] to-[#f8f1d8]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToHome}
              className="flex items-center gap-2 text-[#c69d7f] hover:text-[#b8916f] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-heading-subtitle">Назад</span>
            </button>
            
            <h1 className="text-xl lg:text-2xl font-heading-display text-[#c69d7f]">
              НАШЕ МЕНЮ
            </h1>
            
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Section Tabs */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 border border-white/40 shadow-lg hover-lift">
            <button
              onClick={() => {
                setActiveSection('food');
                setActiveCategory(null);
              }}
              className={`px-6 py-3 rounded-xl font-heading-subtitle transition-all duration-300 hover-scale ${
                activeSection === 'food'
                  ? 'bg-[#c69d7f] text-white shadow-lg'
                  : 'text-[#c69d7f] hover:bg-white/50'
              }`}
            >
              ЕДА
            </button>
            <button
              onClick={() => {
                setActiveSection('drinks');
                setActiveCategory(null);
              }}
              className={`px-6 py-3 rounded-xl font-heading-subtitle transition-all duration-300 hover-scale ${
                activeSection === 'drinks'
                  ? 'bg-[#c69d7f] text-white shadow-lg'
                  : 'text-[#c69d7f] hover:bg-white/50'
              }`}
            >
              НАПИТКИ
            </button>
          </div>
        </div>

        {/* Content */}
        {!activeCategory ? (
          /* Categories Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentData.categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category.name)}
                className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 group hover-lift animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c69d7f] to-[#b8916f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      {activeSection === 'food' ? (
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      ) : (
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      )}
                    </svg>
                  </div>
                  <h3 className="text-lg font-heading-subtitle text-black mb-2 group-hover:text-[#c69d7f] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 font-body-text text-sm">
                    {category.items.length} позиций
                  </p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          /* Category Items */
          <div>
            {/* Back Button */}
            <button
              onClick={() => setActiveCategory(null)}
              className="flex items-center gap-2 text-[#c69d7f] hover:text-[#b8916f] transition-colors mb-6"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-heading-subtitle">Назад к категориям</span>
            </button>

            {/* Category Title */}
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-heading-display text-[#c69d7f] mb-2">
                {activeCategory}
              </h2>
              <div className="w-24 h-1 bg-[#c69d7f] mx-auto rounded-full"></div>
            </div>

            {/* Items List */}
            <div className="space-y-4">
              {currentData.categories
                .find(cat => cat.name === activeCategory)
                ?.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h3 className="text-lg font-heading-subtitle text-black">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-4">
                            {item.weight && (
                              <span className="text-sm font-sans text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                {item.weight}
                              </span>
                            )}
                            <span className="text-lg font-heading-subtitle text-[#c69d7f]">
                              {item.price}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 font-body-text leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Allergens */}
                        {item.allergens && item.allergens.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            <div className="flex items-center gap-2 text-xs text-gray-500 font-sans font-medium mb-2 w-full">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              Аллергены:
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {item.allergens.map((allergen, allergenIndex) => (
                                <span
                                  key={allergenIndex}
                                  className={`px-3 py-1.5 rounded-full text-xs font-sans font-medium shadow-sm ${allergenColors[allergen as keyof typeof allergenColors] || 'bg-gray-100 text-gray-800'}`}
                                >
                                  {allergen}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Allergen Legend */}
        <div className="mt-16 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-xl lg:text-2xl font-heading-display text-[#c69d7f] mb-3">
              Обозначение аллергенов
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c69d7f] to-[#b8916f] rounded-full mx-auto"></div>
            <p className="text-gray-600 font-body-text text-sm mt-4">
              Обратите внимание на обозначения аллергенов в нашем меню
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(allergenColors).map(([allergen, className]) => (
              <div key={allergen} className="flex items-center gap-3 p-3 rounded-xl bg-white/50 hover:bg-white/70 transition-all duration-300 hover:shadow-md">
                <div className={`w-4 h-4 rounded-full ${className.split(' ')[0]} flex-shrink-0`}></div>
                <span className={`px-3 py-1.5 rounded-full text-sm font-sans font-medium ${className} flex-grow text-center`}>
                  {allergen}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-sans text-amber-800 font-medium">
                  Важная информация
                </p>
                <p className="text-xs text-amber-700 mt-1">
                  Если у вас есть аллергия на какие-либо ингредиенты, пожалуйста, сообщите об этом нашему персоналу перед заказом.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
