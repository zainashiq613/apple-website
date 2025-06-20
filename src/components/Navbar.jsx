import { navLists } from '../constraints';

function Navbar() {
  return (
    <div>
      <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
        <nav className="flex w-full screen-max-width">
          <img src="../../public/assets/images/apple.svg" width={14} height={18} />
          <div className="flex flex-1 justify-center items-center max-sm:hidden">
            {navLists.map((item, index) => (
              <div
                className="px-5 text-sm cursor-pointer text-gray-400 hover:text-white transition-all"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <img src="../../public/assets/images/search.svg" width={18} height={18} alt="" />
            <img src="../../public/assets/images/bag.svg" width={18} height={18} alt="" />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
