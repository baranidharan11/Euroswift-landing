"use client"; // Add this line to indicate that this is a Client Component

import React, { useState } from "react";

// Define the props interface
interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full"
      >
        <div className="flex-auto font-title text-white font-bold text-2xl">
          {question}
        </div>
        <div className="flex-none">
          {isOpen ? (
            <svg
              className="accordion-icon--open fill-white"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
          ) : (
            <svg
              className="accordion-icon--closed fill-white"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path d="M6 19h12v2H6v-2z"></path>
            </svg>
          )}
        </div>
      </button>
      {isOpen && <div className="content text-white">{answer}</div>}
    </div>
  );
};

export default AccordionItem;
