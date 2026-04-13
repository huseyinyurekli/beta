
import logo from '../assets/jotformlogo.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg ">
            <a className="navbar-brand" href="#">
                <img src={logo}  />
            </a>
        </nav>
    )
}

export default Navbar