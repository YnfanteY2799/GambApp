import { PageWrapper } from "../components";

export default function Home() {
  return (
    <PageWrapper active={0}>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-40  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src="../resourses/img/1.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
          <div className="flex flex-col justify-center -pl-40 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">lorem
              <span className="dark:text-red-400">senectus</span> erat pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br className="hidden md:inline lg:hidden"/>Sed ducimus labore possimus eveniet voluptate illo s
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a  href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-red-400 dark:text-gray-900">Registrate</a>
              <a  href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Apuesta en vivo</a>
            </div>
          </div>
        </div>
      </section>

      <section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1f2937" fill-opacity="1" d="M0,224L72,96L144,64L216,288L288,128L360,128L432,0L504,192L576,64L648,0L720,32L792,32L864,192L936,224L1008,288L1080,128L1152,96L1224,160L1296,224L1368,320L1440,192L1440,0L1368,0L1296,0L1224,0L1152,0L1080,0L1008,0L936,0L864,0L792,0L720,0L648,0L576,0L504,0L432,0L360,0L288,0L216,0L144,0L72,0L0,0Z"></path></svg>
      </section>

      <section className="container mx-auto">
      <div className=" grid grid-cols-3 gap-4 flex items-center">
        <div className="mb-4">
          <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className=" h-auto rounded-lg" alt=""/>
        </div>

        <div className="mb-1">
          <img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" className="w-24 h-auto rounded-full" alt=""/>
        </div>
        <div className="mb-1">
          <img src="https://mdbootstrap.com/img/new/standard/city/044.jpg" className="w-24 h-auto rounded-full" alt=""/>
        </div>
      </div>
      </section>
    </PageWrapper>
  );
}
