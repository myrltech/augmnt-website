import Link from "next/link";
import React, { Fragment } from "react";
/*=======================================
                comapnyArray
========================================*/
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
  {
    imgPath: "/imgs/desktop/footer/chicago-tribune.svg",
    imgName: "footer chicago tribune logo",
    imgClass: "footer-chicago-tribune-logo",
  },
  //   {
  //     imgPath: "/imgs/desktop/footer/inc.svg",
  //     imgName: "inc",
  //     imgClass: "footer-inc-logo",
  //   },
];
export default function WebFooter({ activeMenu }) {
  /*=======================================
                return
========================================*/
  return (
    <footer className="web-footer-section d-flex  flex-nowrap ">
      <div className="d-flex flex-column web-footer-left-section">
        {/**================logo===================== */}
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
        {/**================ page list ===================== */}
        <ul className="web-footer-augmnt-list">
          <li
            className={
              activeMenu === "home"
                ? "font-24-proxima-nova-400 web-footer-home-text pt-60"
                : "font-24-proxima-nova-400  pt-60"
            }
          >
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <div className="d-flex flex-nowrap justify-content-between pt-15">
            <div className="d-flex flex-column">
              <li
                className={
                  activeMenu === "ourProcess"
                    ? "font-24-proxima-nova-400 web-footer-home-text"
                    : "font-24-proxima-nova-400"
                }
              >
                <Link href="/our-process">
                  <a>our process</a>
                </Link>
              </li>
              <li
                className={
                  activeMenu === "listings"
                    ? "font-24-proxima-nova-400 pt-15 web-footer-home-text"
                    : "font-24-proxima-nova-400 pt-15"
                }
              >
                {" "}
                <Link href="/listings">
                  <a>listings</a>
                </Link>
              </li>
            </div>
            <div className="d-flex flex-column pl-165">
              <li
                className={
                  activeMenu === "partner with us"
                    ? "font-24-proxima-nova-400 web-footer-home-text"
                    : "font-24-proxima-nova-400"
                }
              >
                {" "}
                <Link href="/">
                  <a>partner with us</a>
                </Link>
              </li>
              <li
                className={
                  activeMenu === "client login"
                    ? "font-24-proxima-nova-400 pt-15 web-footer-home-text"
                    : "font-24-proxima-nova-400 pt-15"
                }
              >
                <a
                  href="https://myrl-tech-augment.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  client login
                </a>
              </li>
            </div>
          </div>
          <li
            className={
              activeMenu === "testimonials"
                ? "font-24-proxima-nova-400 pt-20 web-footer-home-text"
                : "font-24-proxima-nova-400 pt-20"
            }
          >
            {" "}
            <Link href="/">
              <a>testimonials</a>
            </Link>
          </li>
          <li
            className={
              activeMenu === "blogs"
                ? "font-24-proxima-nova-400 pt-20 web-footer-home-text"
                : "font-24-proxima-nova-400 pt-20"
            }
          >
            <Link href="/blogs">
              <a>blogs</a>
            </Link>
          </li>
          <li
            className={
              activeMenu === "about us"
                ? "font-24-proxima-nova-400 pt-20 web-footer-home-text"
                : "font-24-proxima-nova-400 pt-20"
            }
          >
            <Link href="/agency">
              <a>agency</a>
              {/* <a>about us</a> */}
            </Link>
          </li>{" "}
        </ul>
        {/**================ terms and privacy ===================== */}
        <div className="d-flex align-items-center flex-nowrap web-footer-left-bottom-div">
          <img
            src={"/imgs/desktop/icons/white-m-icon.svg"}
            alt="m"
            className="web-footer-white-m-icon"
          />
          <img
            src={"/imgs/desktop/icons/white-hand-icon.svg"}
            alt="hand"
            className="web-footer-white-hand-icon"
          />
          <img
            src={"/imgs/desktop/icons/white-in-icon.svg"}
            alt="in"
            className="web-footer-white-in-icon"
          />
          <ul className="web-footer-augmnt-list d-flex">
            <li className="font-16-proxima-nova-700 web-footer-terms-text">
              terms &amp; Conditions
            </li>
            <li className="font-16-proxima-nova-700 web-footer-privacy-text">
              privacy policy
            </li>
          </ul>{" "}
        </div>
      </div>
      {/**================ right section ===================== */}
      <div className="web-footer-right-section">
        <h5 className="font-14-proxima-nova-700 web-footer-as-seen-text">
          As seen on
        </h5>
        {/**================ as seen on ===================== */}
        <div className="d-flex align-items-center flex-nowrap pt-15">
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
        {/**================ content ===================== */}
        <div className="web-footer-right-middle-section">
          <h3 className="font-36-poiret-one-400">Are you looking for</h3>
          <h2 className="font-36-proxima-nova-700 pt-10">
            the right Tech Agency?
          </h2>
          <p className="font-14-nunito-sans-400 pt-15">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. */}
            With Augmnt, you can find engineering resources on short-term
            contract basis from
            <br /> tech agencies that have been verified and vetted by Augmnt
          </p>
          <Link href="/our-process">
            <div className="web-footer-btn text-center">Learn More</div>
          </Link>{" "}
          <h5 className="text-right font-16-proxima-nova-700 web-footer-myrl-tech-text">
            <span>©</span> 2023 Myrl tech
          </h5>
        </div>
      </div>{" "}
    </footer>
  );
}
