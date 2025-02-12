import React from "react";
import { Twobutton } from "./button";

function Multycards() {
  const cardsData = [
    {
      iconSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_Placement_qxftnc.svg",
      title: "Better Salary",
      description:
        "You can have much better contract conditions in Germany than in your home country. Salary: average EUR 3,100 (= USD 3,300), including health insurance, retirement, and unemployment insurance.",
    },
    {
      iconSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_Training_xyynfs.svg",
      title: "Work-life Balance",
      description:
        "Germany has an excellent work-life balance. You will have enough free time to enjoy your personal life and hobbies.",
    },
    {
      iconSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_Visa_eabkqt.svg",
      title: "Career Growth",
      description:
        "There are many opportunities for career development and specialization in Germany’s health care system.",
    },
    {
      iconSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_Placement_qxftnc.svg",
      title: "Modern Facilities",
      description:
        "Germany is known for its well-equipped, modern healthcare facilities that are supported by advanced technology.",
    },
    {
      iconSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Titel_Homogl_dwbich.svg",
      title: "Cultural Experience",
      description:
        "Living and working in Germany offers a rich cultural experience in the heart of Europe.",
    },
    {
      iconSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_Placement_qxftnc.svg",
      title: "Language Skills",
      description:
        "While working in Germany, you'll improve your German language skills, which can open new doors for your career.",
    },
    {
      iconSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_Placement_qxftnc.svg",
      title: "Travel Opportunities",
      description:
        "Germany’s central location in Europe makes it easy to travel and explore different countries.",
    },
    {
      iconSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_Placement_qxftnc.svg",
      title: "Great Public Services",
      description:
        "Germany is known for its top-notch public services, including transportation, healthcare, and education.",
    },
  ];
  return (
    <div className="flex flex-col items-center space-y-3 sm:space-y-4 mx-3 sm:ml-10 sm:mr-0 w-full mt-10 text-center sm:text-left">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
        The Medicruiter Program
      </h2>

      <p className="text-sm sm:text-lg text-gray-700 max-w-lg">
        The free All-in-One-Program is your guide to a better life in Germany.
        We find a perfect Job-Match and provide everything you need to get
        there.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="rounded overflow-hidden bg-blue-100 p-4 max-w-full sm:max-w-xs mb-4"
          >
            <div className="px-2 pt-2 pb-2">
              <div className="rounded overflow-hidden bg-blue-100 p-4 max-w-xs mx-auto">
                <div className="mr-1 shrink-0">
                  <img
                    loading="lazy"
                    src={card.iconSrc}
                    alt={card.title}
                    width="60"
                    height="60"
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                </div>
                <div className="font-title text-lg sm:text-xl font-bold">
                  {card.title}
                </div>
              </div>
              <div>
                <p className="text-xs sm:text-base">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full">
        <Twobutton />
      </div>
    </div>
  );
}
export default Multycards;
