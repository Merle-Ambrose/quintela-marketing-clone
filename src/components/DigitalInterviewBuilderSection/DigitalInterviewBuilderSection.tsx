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
  const excerptStyle = {
    "--excerpt-bg-image":
      bkg === "geometric"
        ? 'url("/img/bkgs/geometric.png")'
        : 'url("/img/bkgs/blue.png")',
  } as React.CSSProperties;

  return (
    <div className={`exerpt ${bkgClass} py-5`} style={excerptStyle}>
      <div className="container px-4">
        <h1 className="text-center pb-4 fw-bold">{header}</h1>
        {Array.isArray(body) ? (
          (body as React.ReactNode[]).map((el, i) =>
            typeof el === "string" || typeof el === "number" ? (
              <p key={i}>{el}</p>
            ) : React.isValidElement(el) ? (
              React.cloneElement(el, { key: i })
            ) : el == null || typeof el === "boolean" ? null : (
              <React.Fragment key={i}>{el}</React.Fragment>
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
