import React, { Fragment, useState } from "react";
import ListingsMainCard from "./ListingsMainCard";
import ListingsMainSignInCard from "./ListingsMainSignInCard";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

// pagination
const totalRecordsInOnePage = 10;
const dummyData = [
  {
    lang: "NodeJs",
    lang2: "ReactJs",
    lang3: "Go",
    lang4: "Python",
    amount: "60",
    title:"2 ReactJs Developer required",
    location:"Hyderabad",
    estd:"2018",
    members:"8",
  },
  {
    lang: "Python",
    lang2: "Rust",
    lang3: "ReactJs",
    lang4: "Go",
    amount: "80",
    title:"2 Python Developer required",
    location:"Pune",
    estd:"2017",
    members:"12"
  },
  {
    lang: "Javascript",
    lang2: "ReactJs",
    lang3: "NodeJs",
    lang4: "Python",
    amount: "70",
    title:"2 Javascript Developer required",
    location:"Mumbai",
    estd:"2020",
    members:"15"
  },
  {
    lang: "Rust",
    lang2: "Java",
    lang3: "TypeScript",
    lang4: "ReactJs",
    amount: "80",
    title:"2 Java Developer required",
    location:"Bangalore",
    estd:"2017",
    members:"10"
  },
  {
    lang: "Ruby",
    lang2: "ReactJs",
    lang3: "Swift",
    lang4: "Kotlin",
    amount: "50",
    title:"2 Ruby Developer required",
    location:"Bangalore",
    estd:"2017",
    members:"10"
  },
  {
    lang: "HTML/CSS",
    lang2: "ReactJs",
    lang3: "NodeJs",
    lang4: "Javascript",
    amount: "90",
    title:"2 Javascript Developer required",
    location:"Pune",
    estd:"2020",
    members:"10"
  },
  {
    lang: "Go",
    lang2: "Javascript",
    lang3: "Swift",
    lang4: "Rust",
    amount: "70",
    title:"2 Rust Developer required",
    location:"Hyderabad",
    estd:"2021",
    members:"5"
  },
  { lang: "Python", lang2: "Rust", lang3: "NodeJs", lang4: "Go", amount: "80" },
  {
    lang: "Rust",
    lang2: "Javascript",
    lang3: "NodeJs",
    lang4: "Swift",
    amount: "60",
    title:"2 NodeJs Developer required",
    location:"Hyderabad",
    estd:"2022",
    members:"7"
  },
  {
    lang: "Go",
    lang2: "Python",
    lang3: "Javascript",
    lang4: "ReactJs",
    amount: "80",
    title:"2 ReactJs Developer required",
    location:"Mumbai",
    estd:"2022",
    members:"5"
  },
  {
    lang: "NodeJs",
    lang2: "ReactJs",
    lang3: "Go",
    lang4: "ReactJs",
    amount: "70",
    title:"2 ReactJs Developer required",
    location:"Bangalore",
    estd:"2015",
    members:"20"
  },
  { lang: "Go", lang2: "Ruby", lang3: "Rust", lang4: "ReactJs", amount: "90",title:"2 Ruby Developer required" },
];

export default function ListingsMain() {
  const [currentPagination, setCurrentPagination] = useState(1);

  // pagination

  const onChangePagination = (page) => {
    setCurrentPagination(page);
  };
  /*======================================================
          main
  ======================================================*/
  return (
    <>
      <div className="row mx-0 align-items-start listings-main">
        <div className="col-12 col-md-5 listings-main-colm1">
          <div className="listings-main-colm1__logoBlock">
            <img src="/imgs/desktop/logo/augmnt-logo.svg" alt="augmnt" />
          </div>
          <h3 className="listings-main-colm1__text1 font-18-proxima-nova-700">
            Sign in to start
          </h3>
          <ListingsMainSignInCard />
        </div>
        <div className="col-12 col-md-7 listings-main-colm2">
          <div className="d-flex justify-content-between listings-main-colm2__titleFold">
            <h2 className="listings-main-colm2__text1 font-42-poiret-one-400">
              Live Listings
            </h2>
          </div>

          {dummyData.map(
            (data, index) =>
              index >= (currentPagination - 1) * totalRecordsInOnePage &&
              index < currentPagination * totalRecordsInOnePage && (
                <Fragment key={index}>
                  <ListingsMainCard data={data} />
                </Fragment>
              )
          )}
          <div className="pagination-common">
            <Pagination
              onChange={onChangePagination}
              current={currentPagination}
              defaultPageSize={totalRecordsInOnePage}
              total={dummyData.length}
              showTitle={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
