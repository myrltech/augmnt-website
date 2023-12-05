import React from "react";

export default function OurProcessMainUsualWay() {
  return (
    <div className="our-process-usual-way-main-block">
      <h2 className="our-process-fold-title-text-1 font-18-proxima-nova-700 mb-27 text-right text-md-center relative">
        {/* the usual way? */}
        HOW is it the fastest?{" "}
      </h2>
      <h3 className="font-48-poiret-one-400 our-process-usual-way-main-block__title relative">
        {/* The way <b className="font-48-proxima-nova-700">everyone</b> has been
        doing it? */}
        Hire Engineers, when you need them at short notice
      </h3>
      <div className="row mx-0 justify-content-between our-process-usual-way-main-block-row">
        <div className="col-6 our-process-usual-way-main-block-row__colm">
          <h4 className="our-process-usual-way-main-block-row__colm-title font-36-poiret-one-400">
            {/* Asking your existing vendors? */}
            On Bench
            <sup className="our-process-fold-title-text-1 font-18-proxima-nova-700">
              1
            </sup>
          </h4>
          <p className="our-process-usual-way-main-block-row__colm-desc font-18-nunito-sans-400 relative">
            {/* Technologies change fast and your existing vendors may not have the
            resources to adapt to your demanding tech needs. */}
            Tech agenices usuaslly work at 120% capacity and are usually unable
            to utilize all of their resources, thereby leading to an ‘on-bench’
            pool of resources that are immediately available for hiring.
          </p>
        </div>
        <div className="col-6 our-process-usual-way-main-block-row__colm">
          <h4 className="our-process-usual-way-main-block-row__colm-title font-36-poiret-one-400">
            {/* Searching Online? */}
            Global Teams
            <sup className="our-process-fold-title-text-1 font-18-proxima-nova-700">
              {/* 2 */}3
            </sup>
          </h4>
          <p className="our-process-usual-way-main-block-row__colm-desc font-18-nunito-sans-400 relative">
            {/* If you found them, they must have solid SEO chops, but does that
            necessarily translate into equally solid tech chops? */}
            Looking for teams to report to your office in a specific city? Well,
            no worries. Augmnt has tech agencies from across the globe.
          </p>
        </div>
      </div>
      <div className="row mx-0 justify-content-between our-process-usual-way-main-block-row">
        <div className="col-6 our-process-usual-way-main-block-row__colm">
          <h4 className="our-process-usual-way-main-block-row__colm-title font-36-poiret-one-400">
            {/* Using Refernces? */}Fast &amp; Reliable
            <sup className="our-process-fold-title-text-1 font-18-proxima-nova-700">
              2
            </sup>
          </h4>
          <p className="our-process-usual-way-main-block-row__colm-desc font-18-nunito-sans-400 relative">
            {/* You’ve been relying on references and it’s better than the other
            options, but how fast and scalable is it? And if referral kickbacks
            are involved, can you be guaranteed of referrals based on pure
            talent? */}
            On-bench resources are available fast. They’re also highly reliable
            as they already have a defined place of employment.
          </p>
        </div>
        <div className="col-6 our-process-usual-way-main-block-row__colm">
          <h4 className="our-process-usual-way-main-block-row__colm-title font-36-poiret-one-400">
            {/* Hiring People? */}Flexible &amp; Scalable
            <sup className="our-process-fold-title-text-1 font-18-proxima-nova-700">
              4
            </sup>
          </h4>
          <p className="our-process-usual-way-main-block-row__colm-desc font-18-nunito-sans-400 relative">
            {/* Hiring new talent is tedious - setting up processes, training people
            and you might end up wasting months on just the hiring process that
            could have been spent shipping actual code. Not to mention the
            overheads of hiring an employee. */}
            Hire engineers on short-term contracts from multiple agencies at the
            same time. Increase or reduce the number of engineers easily.
          </p>
        </div>
      </div>
    </div>
  );
}
