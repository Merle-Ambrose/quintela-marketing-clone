import React from "react";

function DigitalInterviewBuilderSection({ header, body, bkg = "blue", id }) {
  // bkg: 'blue' or 'geometric'
  const bkgClass = bkg === "geometric" ? "exerpt-geometric" : "exerpt-blue";
  return (
    <div className={`exerpt ${bkgClass} py-5`} id={id}>
      <div className="container px-4">
        <h1 className="text-center pb-4 fw-bold">{header}</h1>
        {Array.isArray(body) ? (
          body.map((el, i) =>
            typeof el === "string" ? (
              <p key={i}>{el}</p>
            ) : (
              React.cloneElement(el, { key: i })
            ),
          )
        ) : typeof body === "string" ? (
          <p>{body}</p>
        ) : (
          body
        )}
      </div>
    </div>
  );
}

export default DigitalInterviewBuilderSection;
