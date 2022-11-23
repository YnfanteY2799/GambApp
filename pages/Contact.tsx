import { FormEvent, useState } from "react";
import { PageWrapper, SvgOne, SvgTwo } from "../components";
import { BasicContactForm, BlurPropped } from "../types/DataTypes";

export default function Contact() {
  // State
  const [formData, setFormData] = useState({} as BasicContactForm);

  // Functions

  function formFilling({ name, value }: BlurPropped) {
    setFormData((_) => ({ ..._, [name]: value }));
  }

  function onFormSend(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { name, email, message } = formData;
  }

  return (
    <PageWrapper active={2}>
      <section
        className="py-20 px-4 lg:px-16 overflow-hidden relative z-10"
        data-aos="fade-up"
        id="contact"
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center text-slate-900 dark:text-gray-800 lg:justify-between -mx-4">
            <div
              className="w-full lg:w-1/2 xl:w-6/12 px-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="max-w-[570px] mb-12 lg:mb-0">
                <h2 className="text-slate-900 dark:text-gray-800 text-5xl font-bold mb-5">
                  {" "}
                  Contactanos
                </h2>
                <p className=" dark:text-gray-700 text-3xl font-extrabold text-body-color leading-relaxed stand__out__text mb-9 mx-5">
                  Lorem ipsum dolor. Nulla porttitor accumsan tincidunt.
                </p>
              </div>
            </div>

            {/* FORM CONTAINER */}
            <div
              className="w-full lg:w-1/2 xl:w-5/12 px-4"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="2000"
            >
              <div className="bg-gray-100 dark:bg-slate-800 relative rounded-lg p-8 sm:p-12 shadow-lg">
                {/* FORM */}
                <form onSubmit={(e) => onFormSend(e)}>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded p-3
                      text-gray-800 dark:text-gray-50
                      dark:bg-slate-700 border-gray-500
                      dark:border-slate-600 outline-none
                      focus-visible:shadow-none
                      focus:border-primary"
                      name="name"
                      id="full_name"
                      onBlur={({ target }) => formFilling(target)}
                    />
                  </div>

                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full rounded p-3 text-gray-800
                    dark:text-gray-50 dark:bg-slate-700
                    border-gray-500 dark:border-slate-600
                      outline-none focus-visible:shadow-none focus:border-primary"
                      name="email"
                      id="email"
                      onBlur={({ target }) => formFilling(target)}
                    />
                  </div>

                  <div className="mb-6">
                    <textarea
                      rows={6}
                      placeholder="Your Message"
                      className="w-full rounded p-3 text-gray-800
                    dark:text-gray-50 dark:bg-slate-700
                    border-gray-500 dark:border-slate-600 outline-none
                      focus-visible:shadow-none
                      focus:border-primary"
                      name="message"
                      id="message"
                      onBlur={({ target }) => formFilling(target)}
                    />
                  </div>

                  <div>
                    <button
                      //   type="submit"
                      className="w-full
                      text-gray-100
                      hover:text-gray-700
                      bg-blue-400
                      rounded border border-primary
                      dark:border-slate-600
                      p-3 transition ease-in-out duration-500
                      hover:bg-blue-300"
                    >
                      Envia tu mensaje
                    </button>
                  </div>
                </form>

                <div>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                    <SvgOne />
                  </span>
                  <span className="absolute -left-7 -bottom-7 z-[-1]">
                    <SvgTwo />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
