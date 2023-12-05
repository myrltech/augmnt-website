import React from "react";

export default function OurProcessMainWhyAugmentCard({
  extraClass,
  title,
  desc,
  icon,
}) {
  return (
    <div
      className={`row mx-0 flex-nowrap align-items-center our-process-why-augment-card ${extraClass}`}
    >
      <div className="our-process-why-augment-card__imgBlock">
        <img src={icon} alt="" />
      </div>
      <div className="flex-shrink-0 our-process-why-augment-card__title-block">
        {/* font-48-poiret-one-400  */}
        <h3 className="font-36-poiret-one-400">{title}</h3>
      </div>
      {/* font-24-nunito-sans-200  */}
      <p className="our-process-why-augment-card__desc font-18-poiret-one-400">
        {desc}
      </p>
    </div>
  );
}
