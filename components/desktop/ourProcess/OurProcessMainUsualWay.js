import React from "react";

export default function OurProcessMainUsualWay() {
  return (
    <div className="our-process-usual-way-main-block">
      <h2 className="our-process-fold-title-text-1 font-18-proxima-nova-700 mb-27 text-right text-md-center relative">
        {/* the usual way? */}
        Why is it the most reliable?{" "}
      </h2>
      <h3 className="font-48-poiret-one-400  our-process-usual-way-main-block__title relative">
        {/* The way <b className="font-48-proxima-nova-700">everyone</b> has been
        doing it? */}
        We build out your fully managed team of experienced remote engineers
      </h3>
      <div
        style={{ marginTop: "70px" }}
        className=" row mx-0 justify-content-between our-process-usual-way-main-block-row"
      >
        <div className="col-6 our-process-usual-way-main-block-row__colm">
          <h4 style={{padding:"10px"}} className="our-process-usual-way-main-block-row__colm-title font-36-poiret-one-400">
            {/* Asking your existing vendors? */}
            Experienced Engineers
            <sup className="our-process-fold-title-text-1 font-18-proxima-nova-700">
              1
            </sup>
          </h4>
          <p style={{padding:"10px"}} className="our-process-usual-way-main-block-row__colm-desc font-18-nunito-sans-400 relative">
            {/* Technologies change fast and your existing vendors may not have the
            resources to adapt to your demanding tech needs. */}
            We build your remote team with experienced engineers who have a
            proven record of building stuff. Build a vetted A-Team to build out
            your next product.
          </p>
        </div>
        <div className="col-6 our-process-usual-way-main-block-row__colm">
          <h4 style={{padding:"10px"}} className="our-process-usual-way-main-block-row__colm-title font-36-poiret-one-400">
            {/* Searching Online? */}
            All Inclusive
            <sup className="our-process-fold-title-text-1 font-18-proxima-nova-700">
              {/* 2 */}3
            </sup>
          </h4>
          <p style={{padding:"10px"}} className="our-process-usual-way-main-block-row__colm-desc font-18-nunito-sans-400 relative">
            {/* If you found them, they must have solid SEO chops, but does that
            necessarily translate into equally solid tech chops? */}
            Our plans are all inclusive of local taxes settlements,
            international taxes, transfer fees, management fees and engineer
            charges
          </p>
        </div>
      </div>
      <div className="row mx-0 justify-content-between our-process-usual-way-main-block-row">
        <div className="col-6 our-process-usual-way-main-block-row__colm">
          <h4 style={{padding:"10px"}} className="our-process-usual-way-main-block-row__colm-title font-36-poiret-one-400">
            {/* Using Refernces? */}Fully Managed
            <sup className="our-process-fold-title-text-1 font-18-proxima-nova-700">
              2
            </sup>
          </h4>
          <p style={{padding:"10px"}} className="our-process-usual-way-main-block-row__colm-desc font-18-nunito-sans-400 relative">
            {/* You’ve been relying on references and it’s better than the other
            options, but how fast and scalable is it? And if referral kickbacks
            are involved, can you be guaranteed of referrals based on pure
            talent? */}
            We remove all hassles related to payment, settlements, hiring,
            onboarding, management, scaling the team when necessary, replacing
            engineers on your project when expectations aren’t met.
          </p>
        </div>
        <div className="col-6 our-process-usual-way-main-block-row__colm">
          <h4 style={{padding:"10px"}} className="our-process-usual-way-main-block-row__colm-title font-36-poiret-one-400">
            {/* Hiring People? */}Transparency
            <sup className="our-process-fold-title-text-1 font-18-proxima-nova-700">
              4
            </sup>
          </h4>
          <p style={{padding:"10px"}} className="our-process-usual-way-main-block-row__colm-desc font-18-nunito-sans-400 relative">
            {/* Hiring new talent is tedious - setting up processes, training people
            and you might end up wasting months on just the hiring process that
            could have been spent shipping actual code. Not to mention the
            overheads of hiring an employee. */}
            Our communication and process is 100% transparent we will help you
            build your team from our existing engineers or from our network or
            from our partner agencies.
          </p>
        </div>
      </div>
    </div>
  );
}
