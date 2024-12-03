import React from "react";
import { Twobutton } from "./button";

function Timeline() {
  const timelineSteps = [
    {
      imgSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_Online_Application_f3dlrq.svg",
      alt: "Online Application",
      duration: "NOW",
      title: "Online Application",
      description:
        "Apply easily online and schedule a meeting with a talent advisor. Then we can explain everything in detail and start the journey!",
    },
    {
      imgSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_Training_Program_oj9vt4.svg",
      alt: "Training Program",
      duration: "UP TO 12 MONTHS",
      title: "Online Training Program",
      description:
        "In daily online courses you will gain the important language skills you need, familiarize yourself with the cultural life in Germany, and add training in your specialized field.",
    },
    {
      imgSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_Selecting_Employer_i5exbz.svg",
      alt: "Selecting Employer",
      duration: "AFTER 6 MONTHS",
      title: "Select an Employer",
      description:
        "Now we will find the perfect employer and job offer for you. The Employers will introduce themselves and you can make your choice. So you can be sure that you have your permanent contract in time.",
    },
    {
      imgSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_Transfer_zvhj4l.svg",
      alt: "Transfer",
      duration: "MONTH 12",
      title: "Transfer",
      description:
        "We organize your trip to Germany. Of course, we will pick you up when you arrive and provide you with an initial orientation. An apartment is already waiting for you.",
    },
    {
      imgSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Germany_tffkvs.svg",
      alt: "New start in Germany",
      duration: "FINALLY",
      title: "New start in Germany",
      description:
        "Now the actual journey begins! Get started at your new job in a new life in a new country.",
    },
  ];

  return (
    <div className="row-fluid">
      <div
        className="span12 widget-span widget-type-cell dnd_area-dnd_partial-8-column-1-vertical-alignment dnd_area-dnd_partial-8-column-1-padding dnd-column"
        data-widget-type="cell"
        data-x="0"
        data-w="12"
      >
        <div className="row-fluid-wrapper row-depth-1 row-number-13 dnd-row">
          <div className="row-fluid">
            <div
              className="span12 widget-span widget-type-custom_widget dnd-module"
              data-widget-type="custom_widget"
              data-x="0"
              data-w="12"
            >
              <div
                id="hs_cos_wrapper_dnd_area-dnd_partial-8-module-2"
                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                data-hs-cos-general-type="widget"
                data-hs-cos-type="module"
              >
                <div className="bg-gradient-to-b from-bluelight to-white max-w-screen-3xl m-auto scroll-pt-16">
                  <a id="how-it-works"></a>
                  <div className="pt-16 px-5 pb-20 lg:px-16 max-w-4xl mx-auto">
                    <div className="mb-10">
                      <h2 className="font-title text-bluedark text-4xl font-black">
                        How it works
                      </h2>
                      <div className="mt-4">
                        <div className="text-bluedark font-body">
                          See the step by step process we guide you through.
                        </div>
                      </div>
                    </div>

                    <ol className="relative border-l border-blue-700 ml-8">
                      {timelineSteps.map((step, index) => (
                        <li className="mb-10 ml-20" key={index}>
                          <span className="flex absolute -left-7 justify-center items-center border border-bluedark rounded-3xl px-1.5 py-4 bg-white">
                            <img
                              src={step.imgSrc}
                              alt={step.alt}
                              loading="lazy"
                              width="40"
                              height="40"
                              className="w-10 h-10"
                            />
                          </span>
                          <div className="uppercase text-sm mb-2">
                            {step.duration}
                          </div>
                          <h3 className="flex items-center mb-4 text-3xl font-black font-title text-bluedark">
                            {step.title}
                          </h3>
                          <p className="text-lg mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            {step.description}
                          </p>
                        </li>
                      ))}
                    </ol>
                    <div className="w-full">
                      <Twobutton />
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

export default Timeline;
