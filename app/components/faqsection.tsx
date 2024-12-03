import React from "react";

function FAQSection() {
  return (
    <div className="bg-blue-500 lg:pb-1 rounded-tl-tilesm lg:rounded-tl-none overflow-hidden scroll-pt-16 ">
      <a id="faqs"></a>

      <a
        href="https://www.medicruiter.com/en/videoask?hsLang=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="lg:hidden relative">
          <img
            src="https://www.medicruiter.com/hubfs/Videoask%20Module/videoaskelfride.png"
            loading="lazy"
            alt="videoaskelfride"
            style={{ maxWidth: "100%", height: "auto" }}
            className="w-full object-cover h-full max-h-96 lg:max-h-full"
          />
          <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">
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
              />
              <path d="M44 32L26 42.3923L26 21.6077L44 32Z" fill="white" />
            </svg>
          </div>
        </div>
      </a>

      <div className="max-w-screen-3xl m-auto lg:pb-10">
        <div className="pt-16 px-5 pb-5 max-w-3xl mx-auto">
          <div>
            <h2 className="font-title text-white text-4xl font-black">
              Questions about medicruiter?
            </h2>
            <div className="mt-4">
              <div className="text-white font-body">
                Find your answers here. Elfride is happy to help you clear all
                the uncertainties. For further information, please leave your
                contact details so that we can get back to you.
              </div>
            </div>
          </div>

          <div className="pt-4 m-auto lg:hidden">
            <a
              href="?hsLang=en"
              target="_self"
              className="group flex border-2 block max-w-fit border-white hover:bg-bluedark hover:text-white hover:font-bold active:font-bold active:text-white focus:font-bold focus:text-white text-white font-bold py-2 px-4 rounded-full"
            >
              <div className="grow relativ mr-5">
                <div className="text-center">Learn More</div>
              </div>
              <div className="shrink-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-white group-hover:fill-white"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 4C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4H3ZM15.2426 12L10 8.75735V15.2426L15.2426 12Z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl m-auto hidden lg:block lg:visible mb-10">
        <div
          className="relative overflow-hidden max-w-full m-0"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            data-src="https://www.videoask.com/fcqnvp8p3"
            loading="lazy"
            allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              border: "none",
            }}
            width="100%"
            height="600px"
            src="https://www.videoask.com/fcqnvp8p3"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
