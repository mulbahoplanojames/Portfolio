"use client";

import { useState } from "react";
import { FaRegClipboard } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import { sunburst } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

const AboutCode = () => {
  // State variable to keep track of whether the code has been copied
  const [copy, setCopy] = useState(false);

  const codeString = `
const AboutMe = () => {
  const [passion, setPassion] = useState("coding");

  useEffect(() => {
    setPassion("creating amazing web experiences");
  }, []);

     return (
       <>
           Hello, I am Oplano James Mulbah, 

          I passionate about Front-end React 
      </>
     );
   }
`;

  return (
    <>
      <div className="max-w-2xl md:min-w-[30rem] min-w-[20rem] bg-[#3a404d] rounded-md overflow-hidden ">
        <div className="flex justify-between px-4 text-text text-sm items-center">
          <p className="">Passion code</p>
          {copy ? (
            <button className="py-1 inline-flex items-center gap-1">
              <span className="text-sm my-1">
                {/* Rendering the check icon when the code has been copied */}
                <BsCheck />
              </span>
              Copied!
            </button>
          ) : (
            <button
              className="py-1 inline-flex items-center gap-1"
              onClick={() => {
                // Writing the code to the clipboard when the button is clicked
                navigator.clipboard.writeText(codeString);
                // Setting the copy state to true when the code has been copied
                setCopy(true);
                setTimeout(() => {
                  // Setting the copy state to false after 3 seconds
                  setCopy(false);
                }, 3000);
              }}
            >
              <span className="text-base my-1">
                <FaRegClipboard />
              </span>
              Copy code
            </button>
          )}
        </div>
        <SyntaxHighlighter
          language="javascript"
          style={sunburst}
          customStyle={{ padding: "1rem" }}
        >
          {/* Rendering the code string as the code block content */}
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default AboutCode;
