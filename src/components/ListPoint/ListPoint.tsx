import "./ListPoint.scss";

import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

interface ListPointProps {
  img: string;
  altImgText: string;
  heading: string;
  desc: string;
  url: string;
  isImgOnLeft?: boolean;
  hoverImgSrc?: string;
  onHoverImgEnter?: () => void; // function stabilized with useCallback in the parent to prevent unnecessary re-renders
  onHoverImgLeave?: () => void; // function stabilized with useCallback in the parent to prevent unnecessary re-renders
}

// React.memo skips re-rendering ListPoint when its props haven't changed.
// On the CompetencyModel page, hover state changes would otherwise re-render
// every ListPoint instance. The non-hoverable instances have stable props, so
// they skip the re-render entirely. The hoverable instance receives stabilized
// callbacks via useCallback (in CompetencyModel), so memo can also protect it
// from re-renders caused by anything other than the hover image itself changing.
const ListPoint = React.memo(function ListPoint({
  img,
  altImgText,
  heading,
  desc,
  url,
  isImgOnLeft,
  hoverImgSrc,
  onHoverImgEnter,
  onHoverImgLeave,
}: ListPointProps) {
  const isHoverable = !!hoverImgSrc && !!onHoverImgEnter && !!onHoverImgLeave;

  const textBlock = (
    <div
      className={`listPointText col-12 d-grid gap-3 ${isHoverable ? "col-lg-4 listPointTextHoverable" : "col-lg"}`}
    >
      <h1>{heading}</h1>
      <p>{desc}</p>
      <PrimaryButton href={url} className="primaryBtnList">
        Know More
      </PrimaryButton>
    </div>
  );

  const imageBlock = (
    <div
      className={`col-12 d-flex justify-content-center ${isHoverable ? "col-lg-8 hoverImgCol" : "col-lg-auto"}`}
    >
      <img
        src={hoverImgSrc || img}
        alt={altImgText}
        className={`img-fluid ${isHoverable ? "hoverImg" : "listPointImg"}`}
        onMouseEnter={onHoverImgEnter}
        onMouseLeave={onHoverImgLeave}
        onFocus={isHoverable ? onHoverImgEnter : undefined}
        onBlur={isHoverable ? onHoverImgLeave : undefined}
        tabIndex={isHoverable ? 0 : undefined}
      />
    </div>
  );

  return (
    <div
      className={`listPoint row align-items-center justify-content-center g-5`}
    >
      {isImgOnLeft ? imageBlock : textBlock}
      {isImgOnLeft ? textBlock : imageBlock}
    </div>
  );
});

export default ListPoint;
