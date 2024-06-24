/* eslint-disable @next/next/no-img-element */
import { PhoneIcon } from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="max-w-5xl w-full mx-auto px-4 md:px-6 py-3 flex justify-between text-slate-700">
        <img
          src="/logo.png"
          alt="eco nouvelle aquitaine"
          className="h-12 w-auto"
        />
        <div className=" p-2 flex bottom-0 right-0 fixed md:relative items-center z-10 md:bg-white bg-slate-50 md:w-max w-full justify-center">
          <PhoneIcon className="h-8 w-auto" />
          <div className="flex flex-col md:ml-2">
            <p className="font-bold">
              Contactez-nous <a>09 58 63 63 25</a>
            </p>
            <p className="text-slate-400 text-xs">
              6/7j de 8h à 19h - Prix d’un appel local
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
