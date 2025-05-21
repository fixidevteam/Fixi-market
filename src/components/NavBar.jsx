import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Ville", path: "/garage" },
    { name: "FIXI plus", path: "https://fixi.ma/fixiapp/fixi-plus/login" },
    { name: "Conseils d'entretien", path: "/carnet-entretien" },
    { name: "À propos", path: "/a-propos" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navbarClasses = `
    fixed w-full z-50 transition-all duration-300 
    ${isScrolled ? "bg-white shadow-lg py-2" : "bg-white py-4"}
  `;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
        <Link to="/" className="flex items-center">
          <img src="/fixiLogo.svg" className="h-14" alt="FIXI Logo" />
        </Link>

        <div className="flex items-center space-x-4 md:order-2">
          <div className="hidden md:block">
            <Button title={"Vous avez un garage ?"} />
          </div>
          <button
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex items-center md:order-1 md:w-auto">
          <ul className="flex font-medium space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <li key={item.name}>
                {item.path.startsWith("http") ? (
                  <a
                    href={item.path}
                    className={`${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-black hover:text-primary"
                    } transition-colors duration-200`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-black hover:text-primary"
                    } transition-colors duration-200`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full py-4 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.path.startsWith("http") ? (
                  <a
                    href={item.path}
                    className={`${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-black hover:text-primary"
                    } block py-2 transition-colors duration-200`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-black hover:text-primary"
                    } block py-2 transition-colors duration-200`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="py-2">
              <Button title={"Vous avez un garage ?"} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
