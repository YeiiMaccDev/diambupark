import { useThemeContext } from "../../context/ThemeProvider"

import logoDark60 from '../../assets/img/logoDark60.png'
import logoDark120 from '../../assets/img/logoDark120.png'
import logoLight60 from '../../assets/img/logoLight60.png'
import logoLight120 from '../../assets/img/logoLight120.png'

export const MenuLogo = () => {
    console.log("MenuLogo")
    const { darkTheme } = useThemeContext();

    return (
        <img
            src={(darkTheme) ? logoLight120 : logoDark120}
            srcSet={`${(darkTheme) ? logoLight60 : logoDark60} 60w, ${(darkTheme) ? logoLight120 : logoDark120} 120w`}
            sizes="(max-width: 600px) 50px, 120px"
            className="navbar-site__logo-img"
            width="50"
            height="50"
            alt="Logo YeiiMaccDev" />
    )
}
