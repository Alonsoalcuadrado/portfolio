import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {

  return (
    <div className="navbar">
        <h4 className="navbar-name">
            adamkeyes
        </h4>
        <ul className="navbar-social-logos">
            <li><a href="https://github.com/Alonsoalcuadrado" target="_blank"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/alonsoalcuadrado/" target="_blank"><FaLinkedin /></a></li>
        </ul>
    </div>
  )
}

export default Navbar