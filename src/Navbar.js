import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from './images/logo ensi vect.png';


export default function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="ENSI logo"/>
      
      
      <ul>
        <Link to="/" className="site-title"> Home</Link>
        <CustomLink to="/administartion" className="administartionclass">Espace Administration</CustomLink>
        <CustomLink to="/superviseurs" className="superviseursclass">Espace Superviseurs</CustomLink>
        <CustomLink to="/jury" className="juryclass">Espace Jury</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
