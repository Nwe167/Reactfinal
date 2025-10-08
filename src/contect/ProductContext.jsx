import { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
 
  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.documentElement.classList.remove("light", "dark");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  return (
    <ProductContext.Provider value={{ theme, toggle }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
