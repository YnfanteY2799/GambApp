export default function Footer() {
  return (
 
<div className=" bg-gray-800">
    <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
            <h3 className="text-3xl mb-3"> LOGO HERE </h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae natus assumenda dolorem, nesciunt ipsam deserunt  </p>
            <div className="flex justify-center my-10">
                <div className="flex justify-center ">
                    <a href="#!" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <svg aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="facebook-f"
                        className="w-2 h-full mx-auto"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        ></path>
                        </svg>
                      </a>
                </div>
                <div className="flex justify-center">
                  
                      <a href="#!" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <svg aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                          data-icon="twitter"
                          className="w-3 h-full mx-auto"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          ></path>
                        </svg>
                      </a>
                </div>
                    <div className="flex justify-center ">
                    <a href="#!" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <svg aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="instagram"
                        className="w-2 h-full mx-auto"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        ></path>
                        </svg>
                      </a>
                </div>
            </div>
        </div>
        <div className="mt-20 flex flex-col md:flex-row md:justify-between items-center text-sm  text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Copyright 2022. </p>
            <div className="order-1 md:order-2">
                <span className="px-2">Nosotros</span>
                <span className="px-2 border-l">Contáctanos</span>
                <span className="px-2 border-l">Términos</span>
            </div>
        </div>
    </div>
</div>
  );
}
