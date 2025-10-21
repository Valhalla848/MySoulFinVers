export const LoadingSpinner = (): JSX.Element => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#c69d7f] to-[#b8916f] flex items-center justify-center z-50">
      <div className="text-center">
        {/* Логотип или название кофейни */}
        <div className="mb-8 animate-bounce-gentle">
          <h1 className="text-4xl lg:text-6xl font-heading-display text-white">
            MySoul
          </h1>
        </div>
        
        {/* Спиннер загрузки */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-[#c69d7f] rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        </div>
        
        {/* Текст загрузки */}
        <p className="text-white/80 text-lg mt-6 font-body-text animate-pulse">
          Загружаем для вас лучшее...
        </p>
      </div>
    </div>
  );
};
