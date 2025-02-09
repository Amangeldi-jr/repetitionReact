import React, { useState, createContext } from "react";

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
}

export const THEME_CONTEXT = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    return (
        <THEME_CONTEXT.Provider value={{ theme, setTheme }}>
            <div className={theme === "dark" ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>
                {children}
            </div>
        </THEME_CONTEXT.Provider>
    );
};

export default ThemeProvider;
