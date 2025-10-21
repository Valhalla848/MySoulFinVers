import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MySoul } from "./screens/MySoul";
import { MenuPage } from "./pages/MenuPage";
import { LoadingSpinner } from "./components/LoadingSpinner";

export const App = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Симулируем загрузку
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды загрузки

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MySoul />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
};
