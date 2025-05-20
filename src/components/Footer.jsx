import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-8 sm:px-6 lg:space-y-16 lg:px-8">
        <div>
          <ul className="mt-8 grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
            {/* logo */}
            <div>
              <img src="/fixi-trans.webp" className="h-20" alt="FIXI Logo" />
            </div>
            {/* box 1 */}
            <div>
              <p className="font-medium text-white">Liens rapides</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Conditions générales
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>
            {/* box 2 */}
            <div>
              <p className="font-medium text-white">Contact</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Téléphone: +212-773-98-22-67
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Email: contact@fixi.ma
                  </a>
                </li>
              </ul>
            </div>
            {/* box 3 */}
            <div>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    FACEBOOK
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    INSTAGRAM
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    LINKEDIN
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    <Button title={"Ajouter votre Garage"} />
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:pt-16">
          {/* box 1 */}
          <div>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75"
                >
                  Lavage auto Marrakech
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75"
                >
                  Mécanique Marrakech
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75"
                >
                  Dépannage Marrakech
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75"
                >
                  Pneu Marrakech
                </a>
              </li>
            </ul>
          </div>
          {/* box 2 */}
          <div>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75"
                >
                  Lavage auto Casablanca
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75"
                >
                  Mécanique Casablanca
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75"
                >
                  Dépannage Casablanca
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75"
                >
                  Pneu Casablanca
                </a>
              </li>
            </ul>
          </div>
          {/* box 3 */}

          <div>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75"
                >
                  Lavage auto Rabat
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75"
                >
                  Mécanique Rabat
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75"
                >
                  Dépannage Rabat
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75"
                >
                  Pneu Rabat
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-white text-center border-t border-gray-100 pt-8">
          Copyright &copy; {new Date().getFullYear()}
          <a href="https://fixi.ma/">FIXI.MA</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
