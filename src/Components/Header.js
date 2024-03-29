import '../css/Header.css'
import purrweb_logo from '../Assets/purrweb_logo.svg'

function Header() {
    return (
        <div className="wrap__Component_Header">
            <div className="wrap__Component_Header_Logo">
                <img
                    className="wrapHeaderLogoImg"
                    src={purrweb_logo}
                    alt="logo not found"
                />
                <p className="wrap__Component_Header_Text">Purrweb</p>
            </div>
        </div>
    );
}

export default Header;