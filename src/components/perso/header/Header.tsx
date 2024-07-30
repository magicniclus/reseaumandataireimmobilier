/* eslint-disable @next/next/no-img-element */
import { PhoneIcon } from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="max-w-7xl w-full mx-auto px-4 md:px-6 py-5 flex justify-between text-slate-900">
        <img
          src="/logo.png"
          alt="eco nouvelle aquitaine"
          className="h-8 md:h-12 w-auto"
        />
        <div
          className=" p-6 md:p-2 flex bottom-0 right-0 fixed md:relative items-center z-10 md:bg-white bg-slate-200 md:w-max w-full justify-center"
          style={{ zIndex: "300" }}
        >
          <PhoneIcon className="h-8 w-auto" />
          <div className="flex flex-col ml-2">
            <div className="relative">
              <p className="font-bold">
                Contactez-nous <a className="text-blue-700">09 58 63 63 25</a>
              </p>
              {/* <div className="w-[125px] h-7 -right-1 -top-1 absolute bg-blue-500 transform -rotate-1 -z-10" /> */}
            </div>
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
