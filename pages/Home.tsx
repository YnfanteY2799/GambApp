import { PageWrapper } from "../components"

export default function Home() {
  return (
    <PageWrapper>

      <>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between m:justify-between sm:justify-between">
            <div className="flex items-center justify-center p-40  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ocultar-img espacio">
              <img src="../resourses/img/1.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
            <div className="flex flex-col justify-center -pl-40 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl">lorem
                <span className="dark:text-red-400">senectus</span> erat pharetra
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br className="hidden md:inline lg:hidden" />Sed ducimus labore possimus eveniet voluptate illo s
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <a href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-red-400 dark:text-gray-900">Registrate</a>
                <a href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Apuesta en vivo</a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1f2937" fill-opacity="1" d="M0,224L72,96L144,64L216,288L288,128L360,128L432,0L504,192L576,64L648,0L720,32L792,32L864,192L936,224L1008,288L1080,128L1152,96L1224,160L1296,224L1368,320L1440,192L1440,0L1368,0L1296,0L1224,0L1152,0L1080,0L1008,0L936,0L864,0L792,0L720,0L648,0L576,0L504,0L432,0L360,0L288,0L216,0L144,0L72,0L0,0Z"></path></svg>
        </section>

        <section className="">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-4 sm:py-1 lg:px-8">
            <div className="mt-16 grid gap-8 sm:grid-cols-3  lg:grid-cols-3 md:grid-cols-3">
              <div>
                <img
                  alt="User"
                  src="../resourses/icons/user.svg"
                  className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
                />
                <div className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center">
                  <p className="text-lg font-bold text-gray-700">Lorem</p>
                </div>
              </div>
              <div>
                <img
                  alt="Dollar"
                  src="../resourses/icons/dollar-sign.svg"
                  className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
                />
                <div className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center">
                  <p className="text-lg font-bold text-gray-700">Impusm</p>
                </div>
              </div>
              <div>
                <img
                  alt="Stars"
                  src="../resourses/icons/star.svg"
                  className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
                />
                <div className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center">
                  <p className="text-lg font-bold text-gray-700">Dolor</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section>
          <div className="md:mx-auto md:container px-4">
            <div className="pt-10 md:pt-40">
              <div className="container mx-auto">
                <div className="flex flex-wrap items-center pb-12">
                  <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                    <div className="py-2 text-color">
                      <h1 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black dark:text-gray-800">Lorem ipsum dolor</h1>
                      <h2 className="text-lg lg:text-xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ratione dolorum voluptatibus perspiciatis assumenda! Ea amet ipsum, ab magni nemo corporis odit tenetur. Commodi tenetur, in provident facere facilis dolorem!</h2>
                      <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                        <a href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-blue-400 dark:text-gray-900">Registrate</a>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center ocultar-imgs">
                    <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md mr-20" src="../resourses/img/2.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-32 pt-16">
              <div className="mx-auto">
                <div className="flex flex-wrap flex-row-reverse items-center">
                  <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                    <div className="py-2 text-color">
                      <h1 className="text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black dark:text-gray-800">Lorem impusn</h1>
                      <h2 className="text-lg lg:text-xl  leading-7 md:leading-10 f-f-r py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus atque vero tenetur cum sint, sapiente adipisci delectus consequatur pariatur temporibus praesentium sequi repellat doloremque facilis labore ratione dolorem ipsum?</h2>
                      <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                        <a href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-blue-400 dark:text-gray-900">Registrate</a>

                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center ocultar-imgs">
                    <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="../resourses/img/3.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

    </PageWrapper>

  );
}
