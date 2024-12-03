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
    <div className="row-fluid-wrapper row-depth-1 row-number-14 dnd_area-row-6-padding dnd_area-row-6-vertical-alignment dnd-section dnd_area-row-6-margin dnd_area-row-6-force-full-width-section dnd_area-row-6-background-layers dnd_area-row-6-background-color">
      <div className="row-fluid ">
        <div className="span12 widget-span widget-type-cell dnd_area-dnd_partial-9-column-1-padding dnd_area-dnd_partial-9-column-1-vertical-alignment dnd-column">
          <div className="row-fluid-wrapper row-depth-1 row-number-15 dnd-row">
            <div className="row-fluid ">
              <div className="span12 widget-span widget-type-custom_widget dnd-module">
                <div
                  id="hs_cos_wrapper_dnd_area-dnd_partial-9-module-2"
                  className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                >
                  <div className="relative scroll-pt-16">
                    <a id="about_us"></a>
                    <div className="rounded-tr-tilesm lg:rounded-tr-none overflow-hidden">
                      <img
                        src="https://www.medicruiter.com/hubfs/Website%20Files/nicolas-peyrol-l2VmsBG8nPE-unsplash_ibr0xx.jpg"
                        loading="lazy"
                        alt="About Medicruiter"
                        className="w-full object-cover h-full"
                      />
                    </div>
                    <div className="flex justify-center items-center lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:left-0">
                      <div className="pt-16 px-5 lg:px-16 pb-20 max-w-4xl mx-auto bg-white relative lg:rounded-lg lg:shadow-md ">
                        <div className="mb-10 ">
                          <h2 className="font-title text-bluedark text-4xl font-black">
                            {title}
                          </h2>
                          <div className="mt-4">
                            <div className="text-bluedark font-body">
                              {aboutText.map((text, index) => (
                                <div key={index}>{text}</div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mx-auto">
                          <div className="">
                            <div className="grid lg:grid-cols-3 gap-3">
                              {statistics.map((stat, index) => (
                                <div
                                  className="bg-bluelight flex items-center justify-center rounded-lg"
                                  key={index}
                                >
                                  <div className="p-5">
                                    <div className="text-3xl font-black font-title text-bluedark text-center">
                                      {stat.value}
                                    </div>
                                    <div className="text-sm text-bluedark text-center">
                                      {stat.label}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="text-center mt-10">
                          <a
                            href="https://www.medicruiter.com/en/about-us?hsLang=en"
                            className="bg-white border-2 inline-block text-center min-w-fit border-bluedark hover:bg-blue-300 text-bluedark font-bold py-2 px-4 rounded-full"
                          >
                            More about us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutimg;
