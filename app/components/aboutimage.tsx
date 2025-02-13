import React from "react";

const aboutText = `Medicruiter was founded in 2020 in Germany with the aim of establishing a better life for all who work in healthcare. We are an internationally certified recruitment, training, and global mobility company that offers nurses from Latin America, Asia, and Eastern Europe a real opportunity for a better life through a fair and transparent path to a career and life in Europe while fulfilling its mission of contributing to overcoming the shortage of nursing personnel in Germany.`;

const statistics = [
  { value: ">300", label: "Students" },
  { value: ">30", label: "Employees" },
  { value: "3", label: "Offices" },
];

const images = [
  "https://www.medicruiter.com/hubfs/Website%20Files/nicolas-peyrol-l2VmsBG8nPE-unsplash_ibr0xx.jpg",
  "https://www.medicruiter.com/hubfs/Website%20Files/sample-image-2.jpg",
  "https://www.medicruiter.com/hubfs/Website%20Files/sample-image-3.jpg",
];

const Aboutimg = () => {
  return (
    <section className="container mx-auto px-4 py-10 relative">
      <a id="about_us" className="absolute -top-20"></a>
      <div className="overflow-hidden rounded-tr-md lg:rounded-tr-none">
        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            loading="lazy"
            alt={`About Medicruiter ${index + 1}`}
            className="w-full object-cover h-64 sm:h-80 md:h-96 lg:h-full"
          />
        ))}
      </div>
      <div className="flex justify-center items-center lg:absolute lg:inset-0">
        <div className="bg-white p-6 md:p-10 lg:p-16 max-w-4xl mx-auto rounded-lg shadow-md text-center">
          <h2 className="text-bluedark text-3xl md:text-4xl font-black mb-6">
            About Us
          </h2>
          <p className="text-bluedark text-sm md:text-base leading-relaxed mb-4">
            {aboutText}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {statistics.map(({ value, label }, index) => (
              <div
                key={index}
                className="bg-bluelight flex flex-col items-center justify-center rounded-lg p-4"
              >
                <div className="text-2xl md:text-3xl font-black text-bluedark">
                  {value}
                </div>
                <div className="text-sm md:text-base text-bluedark">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <a className="mt-8 inline-block bg-white border-2 border-bluedark hover:bg-blue-300 text-bluedark font-bold py-2 px-6 rounded-full">
            More about us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Aboutimg;
