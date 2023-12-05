import Link from "next/link";
import React from "react";

export default function WebNavbar({ activeIndex }) {
  return (
    <div className="web-navbar-section">
      <nav className="d-flex align-items-center justify-content-between flex-nowrap">
        <Link href="/">
          <a>
            <img
              src="/imgs/desktop/logo/augmnt-logo.svg"
              alt="augmnt"
              className={
                activeIndex === "home"
                  ? "web-navbar-augmnt-logo web-navbar-augmnt-logo--active"
                  : "web-navbar-augmnt-logo"
              }
            />
          </a>
        </Link>
        <div className="d-flex align-items-center flex-nowrap">
          <ul className="d-flex align-items-center flex-nowrap web-navbar-augmnt-list">
            <li className="font-14-proxima-nova-400">
              <Link href="/our-process">
                <a>
                  <span
                    className={
                      activeIndex === "ourProcess"
                        ? "cursor-default web-navbar-menu--active"
                        : "cursor-pointer"
                    }
                  >
                    {" "}
                    Our Process
                  </span>
                </a>
              </Link>{" "}
            </li>
            <li className="font-14-proxima-nova-400">
              <Link href="/listings">
                <a>
                  <span
                    className={
                      activeIndex === "listings"
                        ? "cursor-default web-navbar-menu--active"
                        : "cursor-pointer"
                    }
                  >
                    Listings
                  </span>
                </a>
              </Link>
            </li>
            <li className="font-14-proxima-nova-400 ">
              <Link href="/">
                <a>
                  <span
                    className={
                      activeIndex === "tech-agencies"
                        ? "cursor-default web-navbar-menu--active"
                        : "cursor-pointer"
                    }
                  >
                    Tech Agencies
                  </span>
                </a>
              </Link>
            </li>
            <li className="font-14-proxima-nova-400 p-0">
              <Link href="/blogs">
                <a>
                  <span
                    className={
                      activeIndex === "blogs"
                        ? "cursor-default web-navbar-menu--active"
                        : "cursor-pointer"
                    }
                  >
                    Blogs
                  </span>
                </a>
              </Link>
            </li>
            {/* <li className="font-14-proxima-nova-400 p-0">
              <Link href="/">
                <a>
                  <span
                    className={
                      activeIndex === "about-us"
                        ? "cursor-default web-navbar-menu--active"
                        : "cursor-pointer"
                    }
                  >
                    About Us
                  </span>
                </a>
              </Link>
            </li> */}
          </ul>
          <Link href="/contact-us">
            <a>
              <div className="web-navbar-contact-btn text-center">
                Contact Us
              </div>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
