import React from "react";

export default function OurProcessMainWhyAugmentCardMobile({
  title,
  desc,
  icon,
}) {
  return (
    <div className="our-process-why-augment-card">
      <div className="our-process-why-augment-card__imgBlock">
        <img src={icon} alt="" />
      </div>
      <h3 className="font-48-poiret-one-400">{title}</h3>
      <p className="our-process-why-augment-card__desc font-24-nunito-sans-200">
        {desc}
      </p>
    </div>
  );
}
