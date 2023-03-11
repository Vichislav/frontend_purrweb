import purrweb_logo from "../Assets/purrweb_logo.svg";
import '../css/Profile.css'
import out from "../Assets/out.svg";
import {Link} from "react-router-dom";


function Profile() {
    return (
        <div >
            <div className="wrap__Header">
                <div className="wrap__Header_Logo">
                    <img
                        className="wrapHeaderLogoImg"
                        src={purrweb_logo}
                        alt="logo not found"
                    />
                    <p className="wrap__Header_Text">Purrweb</p>
                </div>
                <div className='wrap__Header_data'>
                    <div className="wrap__Header_data_name">Анастасия Филатова</div>
                    <Link to="/" className="wrap__Header_link">
                        <div className='wrap__Header_out_text'>Выйти</div>
                    </Link>
                    <Link to="/">
                        <img
                            className="wrap__Header_out_img"
                            src={out}
                            alt="logo not found"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Profile;