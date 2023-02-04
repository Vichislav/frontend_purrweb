import '../css/Header.css'
import purrweb_logo from '../Assets/purrweb_logo.svg'

function Header() {
    return (
        <div className="wrapHeader">
            <div className="wrapHeaderLogo">
                <img
                    className="wrapHeaderLogoImg"
                    src={purrweb_logo}
                    alt="logo not found"
                />
                <p className="wrapHeaderText">Purrweb</p>
            </div>
        </div>
    );
}

export default Header;