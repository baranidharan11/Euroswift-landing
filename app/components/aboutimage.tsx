import React from "react";

function Aboutimg() {
  const aboutText = [
    "medicruiter was founded 2020 in Germany with the aim to establish a better life for all who work in healthcare. We are an international certified recruitment, training and global mobility company, that offers nurses from Latin America, Asia, and Eastern Europe a real opportunity for a better life through a fair and transparent path to a career and life in Europe, while fulfilling its mission of contributing to overcoming the shortage of nursing personnel in Germany.",
  ];

  const statistics = [
    { value: ">300", label: "students" },
    { value: ">30", label: "employees" },
    { value: "3", label: "Offices" },
  ];

  const title = "About us";

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="relative">
        <a id="about_us"></a>
        <div className="rounded-tr-md lg:rounded-tr-none overflow-hidden">
          <img
            src="https://www.medicruiter.com/hubfs/Website%20Files/nicolas-peyrol-l2VmsBG8nPE-unsplash_ibr0xx.jpg"
            loading="lazy"
            alt="About Medicruiter"
            className="w-full object-cover h-64 sm:h-80 md:h-96 lg:h-full"
          />
        </div>
        <div className="flex justify-center items-center lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:left-0">
          <div className="bg-white p-5 md:p-10 lg:p-16 max-w-4xl mx-auto rounded-lg shadow-md text-center">
            <h2 className="text-bluedark text-3xl md:text-4xl font-black mb-6">
              {title}
            </h2>
            <div className="text-bluedark text-sm md:text-base leading-relaxed">
              {aboutText.map((text, index) => (
                <p key={index} className="mb-4">
                  {text}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {statistics.map((stat, index) => (
                <div
                  className="bg-bluelight flex flex-col items-center justify-center rounded-lg p-4"
                  key={index}
                >
                  <div className="text-2xl md:text-3xl font-black text-bluedark">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-bluedark">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://www.medicruiter.com/en/about-us?hsLang=en"
                className="bg-white border-2 border-bluedark hover:bg-blue-300 text-bluedark font-bold py-2 px-6 rounded-full inline-block"
              >
                More about us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutimg;
