import React from "react";

// Define an array of job data
const jobListings = [
  {
    id: 1,
    title: "Nursing specialist",
    link: "/en/jobs/nursing-specialist?hsLang=en",
    icon: "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_emergency_care_kwwpyz%20(1).svg",
  },
  {
    id: 2,
    title: "Nursing specialist for emergency care",
    link: "/en/jobs/nursing-specialist-for-emergency-care?hsLang=en",
    icon: "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_emergency_care_kwwpyz%20(1).svg",
  },
  {
    id: 3,
    title: "Nursing specialist for intensive anasthesia care",
    link: "/en/jobs/nursing-specialist-for-emergency-care?hsLang=en",
    icon: "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_emergency_care_kwwpyz%20(1).svg",
  },
  {
    id: 4,
    title: "Opreating room (or) Nurse",
    link: "/en/jobs/nursing-specialist-for-emergency-care?hsLang=en",
    icon: "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_emergency_care_kwwpyz%20(1).svg",
  },
  {
    id: 5,
    title: "Nursing specialist for geriatriic care",
    link: "/en/jobs/nursing-specialist-for-emergency-care?hsLang=en",
    icon: "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_emergency_care_kwwpyz%20(1).svg",
  },
  {
    id: 6,
    title: "Nursing specialist periaatric care",
    link: "/en/jobs/nursing-specialist-for-emergency-care?hsLang=en",
    icon: "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_emergency_care_kwwpyz%20(1).svg",
  },
  {
    id: 6,
    title: "Nursing speciali for outpatient care",
    link: "/en/jobs/nursing-specialist-for-emergency-care?hsLang=en",
    icon: "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_emergency_care_kwwpyz%20(1).svg",
  },
];

function Joblistnurse() {
  return (
    <div className="pt-16 px-5 pb-20 lg:px-16 max-w-4xl mx-auto scroll-pt-16">
      <a id="current-opportunities"></a>
      <div className="mb-10">
        <h2 className="font-title text-bluedark text-4xl font-black">
          Current Opportunities
        </h2>
        <div className="mt-4">
          <div className="text-bluedark font-body">
            Find some of the most offered Nursing-Jobs today
          </div>
        </div>
      </div>

      <div className="mb-10">
        {jobListings.map((job) => (
          <a key={job.id} href={job.link}>
            <div className="flex items-center border-b border-grey pb-4 pt-4 hover:bg-slate-50">
              <div className="flex-none mr-2">
                <img
                  alt="Icon"
                  loading="lazy"
                  height="50"
                  width="50"
                  src={job.icon}
                />
              </div>
              <div className="flex-auto font-title text-black font-bold text-xl">
                {job.title}
              </div>
              <div className="flex-none bg-grey rounded-full p-2 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Joblistnurse;
