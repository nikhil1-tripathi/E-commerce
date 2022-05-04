import { Link } from "react-router-dom";
import "./Navbar.css"
const links = [
  {
    title: "CheckOut",
    link: "/checkout",
  },
  {
    title: "Login",
    link: "/login",
  },
  {
    title: "Products",
    link: "/products",
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Home",
    link: "/"
  },

];
export const Navbar = () => {

  return (
    <>
      <div className="navbar">
        <h1>Navbar</h1>
        {links.map(({ title, link }, index) => {

          return (
            <>
              <Link className="link" key={index} to={link}> <p className="p">{title}</p> </Link>
            </>




          )
        })}
      </div>
    </>
  )


};
