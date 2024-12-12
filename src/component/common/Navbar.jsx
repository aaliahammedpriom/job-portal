import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../provider/Provider";
import jobicon from "../../assets/favicon.png"

const Navbar = () => {
  const { user,handleSignOutUser } = useContext(AuthContext)
  const handleSignOut =()=>{
    handleSignOutUser()
    .then(res => console.log(res))
    .catch(err=> console.log(err))
  }
  const links = <>
    <li><Link to={'/'}>Home</Link></li>
    <li>
      <details>
        <summary>Parent</summary>
        <ul className="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </details>
    </li>
    <li><a>Item 3</a></li>
  </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-extrabold"><img className="w-12" src={jobicon} alt="" />Job Portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {
            user ?
              <>
                <button onClick={handleSignOut} className="btn">Sign Out</button>
              </>
              : <>
                <Link to={'/register'} className=" link">Register</Link>
                <Link to={'/signin'} className="btn">Sign In</Link>
              </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;