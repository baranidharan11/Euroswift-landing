export function Twobutton() {
  return (
    <div className="flex justify-center items-center gap-4 mt-10 w-full px-4">
      <button className="w-[29%] rounded-full border-2 border-black font-bold text-black px-6 py-2 transition duration-200 flex items-center justify-center bg-transparent hover:bg-blue-600 hover:text-white hover:border-blue-600">
        <span className="text-center">Learn More</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 transition duration-200"
        >
          <path d="M23.498 6.186a3.093 3.093 0 00-2.179-2.179C19.43 4 12 4 12 4s-7.43 0-9.319.007A3.093 3.093 0 00.502 6.186 36.146 36.146 0 000 12a36.146 36.146 0 00.502 5.814 3.093 3.093 0 002.179 2.179C4.57 20 12 20 12 20s7.43 0 9.319-.007a3.093 3.093 0 002.179-2.179A36.146 36.146 0 0024 12a36.146 36.146 0 00-.502-5.814zM9.545 15.387V8.613l5.335 3.387-5.335 3.387z" />
        </svg>
      </button>
      <button className="w-[30%] rounded-full border-2 font-bold border-black text-black px-6 py-2 transition duration-200 bg-yellow-500 hover:bg-white text-center">
        Contact Us
      </button>
    </div>
  );
}
