import React from "react";

function CardContainer() {
  const cardsData = [
    {
      iconSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_Salary_ecw3be.svg",
      title: "Better Salary",
      description:
        "You can have much better contract conditions in Germany than in your home country. Salary: average EUR 3,100 (= USD 3,300), including health insurance, retirement, and unemployment insurance.",
    },
    {
      iconSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/SafetyFlower_lxbytr.svg",
      title: "Safe Environment",
      description:
        "Germany is known for its strong focus on creating a safe environment, offering reasonable working hours and plenty of holidays.",
    },
    {
      iconSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_Personal_Davelopment_hnwmr9.svg",
      title: "Personal Development",
      description:
        "Germany offers numerous career opportunities in the healthcare sector, ensuring job security and professional growth.",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-title text-bluedark text-4xl font-black mb-8 text-center">
        A better life in Germany
        <br />
        <span className="text-2xl font-body">
          For you. For your family. For your patients.
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="rounded overflow-hidden bg-blue-100 p-4 max-w-xs mx-auto"
          >
            <div className="px-2 pt-2 pb-2">
              <div className="flex items-center mb-3">
                <div className="mr-1 shrink-0">
                  <img
                    loading="lazy"
                    src={card.iconSrc}
                    alt={card.title}
                    width="60"
                    height="60"
                    className="w-14 h-14"
                  />
                </div>
                <div className="font-title text-xl lg:text-lg font-bold">
                  {card.title}
                </div>
              </div>
              <div>
                <p className="text-sm lg:text-base">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
