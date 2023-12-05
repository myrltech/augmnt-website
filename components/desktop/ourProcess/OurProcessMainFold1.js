import React from "react";

export default function OurProcessMainFold1() {
  return (
    <div className="row mx-0 flex-nowrap align-items-center our-process-fold1-row relative">
      <div className="our-process-fold1-row__colm1">
        {/* <h2 className="our-process-fold-title-text-1 font-18-proxima-nova-700 mb-27">
          Our process
        </h2>
        <h3 className="font-72-poiret-one-400">
          You have to
          <b className="font-72-proxima-nova-700"> ‘Augment’ </b>your tech team,
          how do you want to do it?
        </h3> */}
        <h2 className="our-process-fold-title-text-1 font-18-proxima-nova-700 mb-27">
          Our process
        </h2>
        <h3 className="font-72-poiret-one-400">
          {" "}
          <b className="font-72-proxima-nova-700">‘Augmnt’</b> is the fastest
          way to augment your tech team.
        </h3>
      </div>
      <div className="our-process-fold1-row__colm2">
        <img src="/imgs/desktop/our-process/our-process-fold-1.png" alt="" />
      </div>
    </div>
  );
}
