// import React, { Fragment } from "react";
// // import { useState } from "react";
// import ListingsMainCardOld from "./ListingsMainCardOld";
// // import Select from "react-select";
// import ListingsMainSignInCard from "./ListingsMainSignInCard";

// // const dropdownOptions = [
// //   {
// //     value: "Latest",
// //     label: "Latest",
// //   },
// //   {
// //     value: "Lorem",
// //     label: "Lorem",
// //   },
// // ];

// export default function ListingsMainOld() {
//   // const [values, setValues] = useState({
//   //   searchStr: "",
//   //   selectedSortBy: "",
//   // });

//   /*======================================================
//           handlers
//   ======================================================*/

//   // const handelOnChangeSearch = (e) => {
//   //   setValues({
//   //     ...values,
//   //     [e.target.name]: e.target.value,
//   //   });
//   //   // console.log(values.searchStr);
//   // };

//   // const handleOnChangeSortBy = (e) => {
//   //   console.log("Selected: " + e.value);
//   //   setValues({
//   //     ...values,
//   //     selectedSortBy: e,
//   //   });
//   // };

//   /*======================================================
//           renderStartAProject
//   ======================================================*/
//   // const renderStartAProject = () => {
//   //   return (
//   //     <>
//   //       {/* only on desktop */}
//   //       <a
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //         href="https://myrl-tech-augment.netlify.app/"
//   //         className="d-none d-md-block"
//   //       >
//   //         <div className="home-need-developer-btn home-need-developer-btn--listings">
//   //           <span className="home-need-developer-btn-plus">
//   //             <i className="fa fa-plus" />
//   //           </span>
//   //           Start A Project
//   //         </div>
//   //       </a>
//   //       {/* only on desktop end */}
//   //     </>
//   //   );
//   // };

//   /*======================================================
//           renderSearchSort
//   ======================================================*/
//   // const renderSearchSort = () => {
//   //   return (
//   //     <>
//   //       {/* only on desktop */}
//   //       <div className="d-md-flex flex-nowrap listings-search-sort-block d-none">
//   //         <div className="listings-search-sort-block__search">
//   //           <img
//   //             src="/imgs/desktop/icons/black-search-icon.svg"
//   //             alt="search"
//   //             className="listings-search-sort-block__search-img"
//   //           />
//   //           <input
//   //             type="text"
//   //             name="searchStr"
//   //             value={values.searchStr}
//   //             placeholder="Start searching..."
//   //             onChange={handelOnChangeSearch}
//   //           />
//   //         </div>
//   //         <div className="d-flex align-items-center">
//   //           <p className="listings-main-colm2__sortByText font-14-nunito-sans-400">
//   //             Sort by:
//   //           </p>
//   //           <Select
//   //             className="react-select-common-container"
//   //             classNamePrefix="react-select-common"
//   //             isSearchable={false}
//   //             options={dropdownOptions}
//   //             value={values.selectedSortBy}
//   //             onChange={handleOnChangeSortBy}
//   //             placeholder="Select"
//   //           />
//   //         </div>
//   //       </div>
//   //       {/* only on desktop end */}
//   //     </>
//   //   );
//   // };

//   /*======================================================
//           main
//   ======================================================*/
//   return (
//     <>
//       <div className="row mx-0 align-items-start listings-main">
//         <div className="col-12 col-md-5 listings-main-colm1">
//           <div className="listings-main-colm1__logoBlock">
//             <img src="/imgs/desktop/logo/augmnt-logo.svg" alt="augmnt" />
//           </div>
//           <h3 className="listings-main-colm1__text1 font-18-proxima-nova-700">
//             Sign in to start
//           </h3>
//           <ListingsMainSignInCard />
//         </div>
//         <div className="col-12 col-md-7 listings-main-colm2">
//           <div className="d-flex justify-content-between listings-main-colm2__titleFold">
//             <h2 className="listings-main-colm2__text1 font-42-poiret-one-400">
//               Listings live
//             </h2>
//             {/* {renderStartAProject()} */}
//           </div>
//           {/* {renderSearchSort()} */}
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, index) => (
//             <Fragment key={index}>
//               <ListingsMainCardOld />
//             </Fragment>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
