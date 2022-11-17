export default function Navbar() {
  return (
    <div className="flex flex-wrap">
      <section className="relative mx-auto">
        {/* <!-- navbar --> */}
        <nav className="flex justify-between w-screen text-white bg-gray-900">
          <div className="flex items-center w-full px-5 py-6 xl:px-12">
            <a className="text-3xl font-bold font-heading" href="#">
              {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
              Logo Here.
            </a>
            {/* <!-- Nav Links --> */}
            <ul className="hidden px-4 mx-auto space-x-12 font-semibold md:flex font-heading">
              <li>
                <a className="hover:text-gray-200" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200" href="#">
                  Catagory
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200" href="#">
                  Collections
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            {/* <!-- Header Icons --> */}
            <div className="items-center hidden space-x-5 xl:flex">
              <a className="hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </a>
              <a className="flex items-center hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute flex ml-4 -mt-5">
                  <span className="absolute inline-flex w-3 h-3 bg-pink-400 rounded-full opacity-75 animate-ping"></span>
                  <span className="relative inline-flex w-3 h-3 bg-pink-500 rounded-full"></span>
                </span>
              </a>
              {/* <!-- Sign In / Register      --> */}
              <a className="flex items-center hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* <!-- Responsive navbar --> */}
          <a className="flex items-center mr-6 xl:hidden" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute flex ml-4 -mt-5">
              <span className="absolute inline-flex w-3 h-3 bg-pink-400 rounded-full opacity-75 animate-ping"></span>
              <span className="relative inline-flex w-3 h-3 bg-pink-500 rounded-full"></span>
            </span>
          </a>
          <a className="self-center mr-12 navbar-burger xl:hidden" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
        </nav>
      </section>
    </div>
  );
}
