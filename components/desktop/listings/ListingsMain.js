import React, { Fragment, useState } from "react";
import ListingsMainCard from "./ListingsMainCard";
import ListingsMainSignInCard from "./ListingsMainSignInCard";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

// pagination
const totalRecordsInOnePage = 10;
const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
                  <ListingsMainCard />
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
