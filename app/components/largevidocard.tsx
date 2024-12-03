import React from "react";

function Largevidcard() {
  const videoData = [
    {
      videoSrc:
        "https://cdn.medicruiter.com/hubfs/Videos/Testimonials/PH/PH_Team_Snippet_SlowMo.mp4",
      videoPoster:
        "https://cdn.medicruiter.com/hubfs/Videos/Testimonials/PH/PH-Poster.png",
      videoLink:
        "https://cdn.medicruiter.com/hubfs/Videos/Testimonials/PH/PH%20Team%20Sub%20EN%20-%20LQ.mp4?_gl=1*13jebul*_gcl_au*MTk3MDk5Nzg4NS4xNzI3MTYzODI4*_ga*MTkzNTc4Nzg2MS4xNzI3MTYzODI4*_ga_TF8E4G57RV*MTcyNzY4NDAyMC4yMS4wLjE3Mjc2ODQwMjAuMC4wLjA.",
      title: "A day in the life of a nurse in Germany",
      contributors: "Archie Francisco & Am Noel Delloro",
      duration: "02:59",
    },
  ];

  return (
    <div className="mb-10 mx-auto mt-20 max-w-4xl">
      <h2 className="font-title text-blue-800 text-4xl font-black text-center">
        Stories from our Nurses
      </h2>
      <div className="mt-4 text-center">
        <p className="text-blue-800 font-body">
          Listen to their experience with medicruiter and what they think about
          the program.
        </p>
      </div>

      {videoData.map((video, index) => (
        <div key={index} className="mx-auto mb-5 mt-8">
          <div className="flex flex-col bg-white rounded-lg rounded-tr-[70px] overflow-hidden shadow-md">
            <a href={video.videoLink} className="glightbox3 relative">
              <video
                data-desktop-vid={video.videoSrc}
                data-tablet-vid={video.videoSrc}
                data-mobile-vid={video.videoSrc.replace(".mp4", "-240.mp4")}
                autoPlay
                muted
                loop
                playsInline
                width="1024"
                height="576"
                className="w-full object-cover object-top"
                poster={video.videoPoster}
              >
                <source src={video.videoSrc} type="video/mp4" />
              </video>

              <div className="flex justify-center items-center absolute top-4 left-0 right-0 bottom-0">
                <svg
                  className="fill-white h-16"
                  width="48"
                  height="48"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z"
                    fill="white"
                    fillOpacity="0.3"
                  ></path>
                  <path
                    d="M44 32L26 42.3923L26 21.6077L44 32Z"
                    fill="white"
                  ></path>
                </svg>
              </div>

              <div className="absolute right-5 bottom-5 text-black text-sm bg-white px-1 py-0.5 rounded opacity-50">
                {video.duration}
              </div>
            </a>
            <div className="flex m-5">
              <div>
                <div className="mb-2 font-title font-black text-lg text-black">
                  {video.title}
                </div>
                <div className="font-title text-lg">{video.contributors}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Largevidcard;
