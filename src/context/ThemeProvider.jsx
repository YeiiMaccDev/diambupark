import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "./ThemeContex";


export const ThemeProvider = ({ children }) => {
    console.log("ThemeProvider")
    const isDarkOrLight = (theme) => theme ? "dark" : "light";

    // Theme used by the system to define an initial theme, select light or dark favicon as appropriate.
    const [systemDarkTheme, setSystemDarkTheme] = useState(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Page theme selected by the user
    const [darkTheme, setDarkTheme] = useState(() => {
        const selectedTheme = localStorage.getItem("selectedTheme") || isDarkOrLight(systemDarkTheme);
        return (selectedTheme === "dark");
    });

    // Update page theme
    const setTheme = () => {
        document.getElementById("body").setAttribute("data-theme", isDarkOrLight(darkTheme));
        localStorage.setItem("selectedTheme", isDarkOrLight(darkTheme));
    }

    // Change the theme of the page according to the theme change of the system.
    const handleChangeSystemTheme = () => {
        const windowDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkTheme(windowDarkTheme);
        setSystemDarkTheme(windowDarkTheme);
    }

    // Change the theme of the page according to the user
    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
    }

    // Change the theme of the page according to the user
    useEffect(() => {
        setTheme();
    }, [darkTheme])


    // Change the theme of the page according to the theme change of the system.
    useEffect(() => {
        const darkModeListener = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeListener.addEventListener('change', handleChangeSystemTheme);

        return () => {
            darkModeListener.removeEventListener('change', handleChangeSystemTheme);
        };
    }, []);


    return (
        <ThemeContext.Provider value={{ systemDarkTheme, darkTheme, handleChangeTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    return context;
}