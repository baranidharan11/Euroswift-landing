/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const videoData = [
  {
    href: "https://cdn.medicruiter.com/hubfs/Videos/Testimonials/PH/PH%20Archie%20Sub%20EN%20-%20LQ.mp4",
    imgSrc:
      "https://www.medicruiter.com/hubfs/Videos/Testimonials/PH/PH%20Archie.png",
    title: "Happy to work in Germany",
    author: "Archie Francisco",
    duration: "01:15",
    altText: "Happy to work in Germany",
  },
  {
    href: "https://cdn.medicruiter.com/hubfs/Videos/Testimonials/PH/PH%20Noel%20Sub%20EN%20-%20LQ.mp4",
    imgSrc:
      "https://www.medicruiter.com/hubfs/Videos/Testimonials/PH/PH%20Noel.png",
    title: "WHY DO I RELY on medicruiter",
    author: "Am Noel Delloro",
    duration: "01:33",
    altText: "WHY DO I RELY on medicruiter",
  },
  {
    href: "https://cdn.medicruiter.com/hubfs/Videos/Testimonials/ES/Jessica%20Long%20Video/Jessica_LongStory.mp4",
    imgSrc:
      "https://www.medicruiter.com/hubfs/Videos/Testimonials/ES/Jessica.png",
    title: "See the whole Interview with Jessica Muñoz",
    author: "Jessica Muñoz",
    duration: "04:56",
    altText: "See the whole Interview with Jessica Muñoz",
  },
];

const Multyvidcard = () => {
  return (
    <div className="max-w-4xl pb-20 m-auto">
      <div className="px-5 max-w-4xl m-auto bg-white relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {videoData.map((video, index) => (
            <Link href={video.href} key={index}>
              <div className="flex flex-col bg-white rounded-lg rounded-tr-[80px] rounded-tl-none overflow-hidden shadow-md">
                <div className="w-full aspect-video lg:overflow-hidden shrink-0 relative">
                  <img
                    src={video.imgSrc}
                    loading="lazy"
                    alt={video.altText}
                    className="object-cover aspect-video w-full"
                    style={{ aspectRatio: "16 / 9" }}
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
                      ></path>
                      <path
                        d="M44 32L26 42.3923L26 21.6077L44 32Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <div className="absolute right-1 bottom-1 text-black text-xs bg-white px-1 py-0.5 rounded opacity-50">
                    {video.duration}
                  </div>
                </div>
                <div className="flex items-center m-5">
                  <div>
                    <div className="mb-2 font-title font-black text-lg text-black">
                      {video.title}
                    </div>
                    <div className="font-title text-lg text-black">
                      {video.author}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="https://www.medicruiter.com/en/stories"
            className="bg-white border-2 inline-block text-center min-w-fit border-bluedark hover:bg-blue-500 hover:text-white text-bluedark font-bold py-2 px-4 rounded-full"
          >
            More stories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Multyvidcard;
