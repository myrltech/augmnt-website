import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";

const companyAraay = [
  {
    imgPath: "/imgs/desktop/footer/fast-company.svg",
    imgName: "fast company",
    imgClass: "footer-fast-company",
  },
  {
    imgPath: "/imgs/desktop/footer/inc.svg",
    imgName: "inc",
    imgClass: "footer-inc-logo",
  },
  {
    imgPath: "/imgs/desktop/footer/entrepreneur.svg",
    imgName: "footer entrepreneur logo",
    imgClass: "footer-entrepreneur-logo",
  },
  //   {
  //   imgPath: "/imgs/desktop/footer/onevest.svg",
  //   imgName: "inc",
  //   imgClass: "footer-onevest-logo",
  // },
  {
    imgPath: "/imgs/desktop/footer/chicago-tribune.svg",
    imgName: "footer chicago tribune logo",
    imgClass: "footer-chicago-tribune-logo",
  },
];

const menu1 = [
  {
    id: "problem",
    title: "problem",
    linkPath: "/",
    activeMenu: "problem",
  },
  {
    id: "solution",
    title: "solution",
    linkPath: "/#solution",
    activeMenu: "solution",
  },
  { id: "perks", title: "perks", linkPath: "/#perks", activeMenu: "perks" },
  {
    id: "testimonials",
    title: "Testimonials",
    linkPath: "/#testimonials",
    activeMenu: "testimonials",
  },
  {
    id: "join",
    title: "join",
    linkPath: "/#join",
    activeMenu: "join",
  },
  // {
  //   id: "useCase",
  //   title: "Use cases",
  //   linkPath: "/#useCases",
  //   activeMenu: "aboutUs",
  // },
];

// const menu2 = [
//   { title: "partner with us", linkPath: "/", activeMenu: "partnerWithUs" },
//   { title: "client login", linkPath: "/", activeMenu: "clientLogin" },
// ];

// const menu3 = [
// { title: "privacy policy", linkPath: "/", activeMenu: "privacyPolicy" },
// { title: "terms of use", linkPath: "/", activeMenu: "termsOfUse" },
// ];

/*=======================================
              main
========================================*/
export default function MobileFooter({ activeIndex }) {
  const router = useRouter();

  useEffect(() => {
    // window.scrollTo(0, 0);
    window.addEventListener("load", () => {
      router.push("/");
    });
    return () =>
      window.removeEventListener("load", () => {
        // window.scrollTo(0, 0);
        router.push("/");
      });
  }, []);

  return (
    <footer className="m-footer">
      <div className="web-footer-augmnt-white-logo">
        <Link href="/">
          <a>
            <img
              src={"/imgs/desktop/logo/augmnt-white-logo.svg"}
              alt="augmnt"
            />
          </a>
        </Link>
      </div>

      <div className="d-flex flex-nowrap web-footer-augmnt-list-row justify-content-between">
        <ul className="web-footer-augmnt-list">
          {menu1.map((data, index) => (
            <li
              key={index}
              className={
                router.asPath === data.linkPath
                  ? "font-24-proxima-nova-400 web-footer-home-text"
                  : "font-24-proxima-nova-400"
              }
            >
              {/* {console.log(router.asPath)} */}
              <Link href={data.linkPath}>
                <a>{data.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <h5 className="font-14-proxima-nova-700 web-footer-as-seen-text-left">
            As seen on
          </h5>

          <div className="d-flex align-items-center justify-content-start flex-wrap m-footer-companies">
            {companyAraay.map((data, index) => (
              <Fragment key={index}>
                <img
                  src={data.imgPath}
                  alt={data.imgName}
                  className={data.imgClass}
                />
              </Fragment>
            ))}
          </div>
        </div>
        {/* <ul className="web-footer-augmnt-list">
          {menu2.map((data, index) => (
            <li
              key={index}
              className={
                activeIndex === data.activeMenu
                  ? "font-24-proxima-nova-400 web-footer-home-text"
                  : "font-24-proxima-nova-400"
              }
            >
              <Link href={data.linkPath}>
                <a>{data.title}</a>
              </Link>
            </li>
          ))}
        </ul> */}
        {/* <ul className="web-footer-augmnt-list">
          {menu3.map((data, index) => (
            <li
              key={index}
              className={
                activeIndex === data.activeMenu
                  ? "font-24-proxima-nova-400 web-footer-home-text"
                  : "font-24-proxima-nova-400"
              }
            >
              <Link href={data.linkPath}>
                <a>{data.title}</a>
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
      <div className="d-flex flex-nowrap justify-content-between m-footer-fold-1">
        <div>
          <h3 className="mobile-font-12-poiret-one-400">
            {/* Are you looking for */}
            Connect With Other Agencies
          </h3>
          <h3 className="mobile-font-12-coda-400">
            {/* the right Tech Agency? */}
            Collaborate with others
          </h3>
          <p className="mobile-font-12-nunito-sans-400 pt-4">
            Augmnt is the perfect platform to find other agencies to partner up
            and collaborate with on projects. Find projects as well as quality
            resources by networking with other tech agencies.
          </p>
        </div>
        {/* <button className="web-footer-btn">Join Us</button> */}
      </div>
      <div>
        <h5 className="mobile-font-12-coda-400 web-footer-myrl-tech-text">
          terms &amp; Conditions
        </h5>
        <h5 className="mobile-font-12-coda-400 web-footer-myrl-tech-text pt-10">
          privacy policy
        </h5>
      </div>
      <div className="d-flex align-items-center justify-content-between m-footer-social-media pt-20">
        <h5 className="mobile-font-12-coda-400 web-footer-myrl-tech-text ">
          <span>©</span> 2021 Myrl tech
        </h5>
        <div className="d-flex align-items-center flex-nowrap ">
          <img
            src={"/imgs/desktop/icons/white-m-icon.svg"}
            alt="medium"
            className="web-footer-white-m-icon"
          />
          <img
            src={"/imgs/desktop/icons/white-hand-icon.svg"}
            alt="hand"
            className="web-footer-white-hand-icon"
          />
          <img
            src={"/imgs/desktop/icons/white-in-icon.svg"}
            alt="linkedIn"
            className="web-footer-white-in-icon"
          />
        </div>
      </div>
    </footer>
  );
}
