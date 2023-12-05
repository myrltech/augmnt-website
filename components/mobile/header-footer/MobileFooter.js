import Link from "next/link";
import React, { Fragment } from "react";

const companyAraay = [
  {
    imgPath: "/imgs/desktop/footer/inc.svg",
    imgName: "inc",
    imgClass: "footer-inc-logo",
  },
  {
    imgPath: "/imgs/desktop/footer/onevest.svg",
    imgName: "inc",
    imgClass: "footer-onevest-logo",
  },
  {
    imgPath: "/imgs/desktop/footer/chicago-tribune.svg",
    imgName: "footer chicago tribune logo",
    imgClass: "footer-chicago-tribune-logo",
  },
  {
    imgPath: "/imgs/desktop/footer/fast-company.svg",
    imgName: "fast company",
    imgClass: "footer-fast-company",
  },
  {
    imgPath: "/imgs/desktop/footer/entrepreneur.svg",
    imgName: "footer entrepreneur logo",
    imgClass: "footer-entrepreneur-logo",
  },
];

const menu1 = [
  {
    title: "home",
    linkPath: "/",
    activeMenu: "home",
  },
  { title: "our process", linkPath: "/our-process", activeMenu: "ourProcess" },
  { title: "listings", linkPath: "/listings", activeMenu: "listings" },
  { title: "testimonials", linkPath: "/", activeMenu: "testimonials" },
  { title: "blogs", linkPath: "/blogs", activeMenu: "blogs" },
  // { title: "about us", linkPath: "/about-us", activeMenu: "aboutUs" },
  { title: "agency", linkPath: "/agency", activeMenu: "Agency" },
];

const menu2 = [
  { title: "partner with us", linkPath: "/", activeMenu: "partnerWithUs" },
  { title: "client login", linkPath: "/", activeMenu: "clientLogin" },
];

const menu3 = [
  { title: "privacy policy", linkPath: "/", activeMenu: "privacyPolicy" },
  { title: "terms of use", linkPath: "/", activeMenu: "termsOfUse" },
];

/*=======================================
              main
========================================*/
export default function MobileFooter({ activeIndex }) {
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
      <div className="d-flex flex-nowrap justify-content-between m-footer-fold-1">
        <div>
          <h3 className="font-36-poiret-one-400">Are you looking for</h3>
          <h3 className="font-36-proxima-nova-700">the right Tech Agency?</h3>
        </div>
        <button className="web-footer-btn">Join Us</button>
      </div>

      <div className="d-flex flex-nowrap web-footer-augmnt-list-row">
        <ul className="web-footer-augmnt-list">
          {menu1.map((data, index) => (
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
        </ul>
        <ul className="web-footer-augmnt-list">
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
        </ul>
        <ul className="web-footer-augmnt-list">
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
        </ul>
      </div>
      <h5 className="font-14-proxima-nova-700 web-footer-as-seen-text">
        As seen on
      </h5>

      <div className="d-flex align-items-center justify-content-center flex-nowrap m-footer-companies">
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

      <div className="d-flex align-items-center flex-nowrap m-footer-social-media">
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

      <h5 className="text-center web-footer-myrl-tech-text">
        <span>©</span> 2023 Myrl tech
      </h5>
    </footer>
  );
}
