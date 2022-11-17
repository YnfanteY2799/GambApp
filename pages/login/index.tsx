export default function Login() {
  return (
    <div className="relative flex w-full h-full">
      <div className="w-1/2 h-screen bg-black">
        <div className="flex flex-col justify-center w-2/3 h-full mx-auto text-white xl:w-1/2">
          <div>
            <p className="text-2xl">Login|</p>
            <p>please login to continue|</p>
          </div>
          <div className="my-6">
            <button className="flex justify-center w-full p-1 text-black bg-white border-none rounded-3xl hover:bg-gray-200 sm:p-2">
              {/* <img
                src="https://freesvg.org/img/1534129544.png"
                className="object-fill w-6 mr-2"
              /> */}
              Sign in with Google
            </button>
          </div>
          <div>
            <fieldset className="border-t border-gray-600 border-solid">
              <legend className="px-2 mx-auto text-sm text-center">
                Or login via our secure system
              </legend>
            </fieldset>
          </div>
          <div className="mt-10">
            <form>
              <div>
                <label className="mb-2.5 block font-extrabold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                  placeholder="mail@user.com"
                />
              </div>
              <div className="mt-4">
                <label className="mb-2.5 block font-extrabold" htmlFor="email">
                  Password
                </label>
                <input
                  type="password"
                  id="email"
                  className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow"
                />
              </div>
              <div className="flex flex-col justify-between w-full mt-4 sm:flex-row">
                {/* <!-- Remember me --> */}
                <div>
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember" className="mx-2 text-sm">
                    Remember me
                  </label>
                </div>
                {/* <!-- Forgot password --> */}
                <div>
                  <a href="#" className="text-sm hover:text-gray-200">
                    Forgot password
                  </a>
                </div>
              </div>
              <div className="my-10">
                <button className="w-full p-5 bg-orange-600 rounded-full hover:bg-orange-800">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-blue-600">
        {/* <img
          src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg"
          className="w-full h-full"
        /> */}
      </div>
    </div>
  );
}
