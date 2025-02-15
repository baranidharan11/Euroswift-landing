export function CertificationSection() {
  return (
    <div className="bg-blue-500 m-auto mt-6 w-full overflow-hidden">
      <div className="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:px-2 max-w-4xl mx-auto">
        <div className="mb-6 sm:mb-10 text-center sm:text-left">
          <h2 className="font-title text-white text-2xl sm:text-4xl font-black">
            medicruiter is officially certified
          </h2>
          <div>
            <p className="text-white font-body text-sm sm:text-base">
              By awarding the quality seal, the RAL quality association
              Recruitment and placement of foreign nursing staff e.V. promotes
              the recruitment and placement of international nursing staff from
              abroad who meet a high ethical standard. <br />
              medicruiter GmbH is co-funded by the European Union.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <div className="flex justify-center items-center">
            <div className="rounded overflow-hidden">
              <img
                alt="RAL Logo"
                loading="lazy"
                src="https://www.medicruiter.com/hubfs/Website%20Files/ral_neu.jpg"
                className="max-h-[150px] sm:max-h-[200px] max-w-full"
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              alt="EU Co-funded Logo"
              loading="lazy"
              src="https://www.medicruiter.com/hubfs/cofunded_EU.jpg"
              className="bg-white p-2 rounded max-w-full"
              style={{ maxWidth: "150px", maxHeight: "150px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
