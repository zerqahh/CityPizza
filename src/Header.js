import "./Header.scss"
import logo from './assets/logo.png';
import phone from './assets/phone.png'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="header__container">
                <div className="header__content">
                    <div className="header__logo">
                        <NavLink exact to="/">
                            <img src={logo} alt="Logo" style={{ width: "85px", height: "85px" }} />
                        </NavLink>
                    </div>

                    <div className="header__menu">
                        <div className="header__menu_content">
                            <NavLink exact to="/" activeClassName="active-link" className="menu-link">Strona główna</NavLink>
                            <NavLink exact to="/menu" activeClassName="active-link" className="menu-link">Menu</NavLink>
                            <NavLink exact to="/about-us" activeClassName="active-link" className="menu-link">O nas</NavLink>
                            <NavLink exact to="/photos" activeClassName="active-link" className="menu-link">Galeria</NavLink>
                            <NavLink exact to="/contact" activeClassName="active-link" className="menu-link">Kontakt</NavLink>
                            <NavLink exact to="/privacy" activeClassName="active-link" className="menu-link">Polityka prywatności</NavLink>
                        </div>
                    </div>
                    <div className="header__call-btn">
                        <button className="header__call-btn-btn" >
                            <span>
                                <img src={phone} style={{ width: "35px", height: "35px", background: "black", borderRadius: "50%" }}></img>
                            </span>
                            <span id="callus">123-456-789</span>
                        </button>
                    </div>
                </div>

            </div>


        </header >

    );
}


export default Header;