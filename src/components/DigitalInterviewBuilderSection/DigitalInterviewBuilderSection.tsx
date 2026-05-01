import React from "react";
import "./DigitalInterviewBuilderSection.scss";

interface Props {
  header: string;
  body: React.ReactNode | React.ReactNode[] | string;
  bkg: "blue" | "geometric";
}

export default function DigitalInterviewBuilderSection({
  header,
  body,
  bkg = "blue",
}: Props) {
  const bkgClass = bkg === "geometric" ? "exerptGeometric" : "exerptBlue";
  return (
    <div className={`exerpt ${bkgClass} py-5`}>
      <div className="container px-4">
        <h1 className="text-center pb-4 fw-bold">{header}</h1>
        {Array.isArray(body) ? (
          (body as React.ReactNode[]).map((el, i) =>
            typeof el === "string" ? (
              <p key={i}>{el}</p>
            ) : (
              React.cloneElement(el as React.ReactElement, { key: i })
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
