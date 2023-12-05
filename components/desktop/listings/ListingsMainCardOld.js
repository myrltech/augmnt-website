// import React from "react";

// export default function ListingsMainCardOld() {
//   const renderViewDetailsButton = () => {
//     return (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://myrl-tech-augment.netlify.app/"
//       >
//         <span className="listings-main-card-btn">View Details</span>
//       </a>
//     );
//   };
//   return (
//     <div className="listings-main-card">
//       <div className="row mx-0 justify-content-between listings-main-card__row1">
//         <div className="col-12 col-md-9 listings-main-card__row1__colm1">
//           <h2 className="font-18-nunito-sans-700">
//             3 UI/UX Designer required{" "}
//             <img src="/imgs/desktop/icons/green-shield-icon.png" alt="" />
//           </h2>
//           <hr className="d-block d-md-none listings-card-hr" />
//           <div className="d-flex flex-wrap align-items-center listings-main-card__row1__colm1-textBlock">
//             <p className="font-12-nunito-sans-600">
//               <img
//                 src="/imgs/desktop/icons/orange-bag-icon.svg"
//                 alt="bag"
//                 className="listings-main-card__row1__colm1-img1"
//               />
//               Time &amp; Material
//             </p>
//             <p className="font-12-nunito-sans-600">
//               <img
//                 src="/imgs/desktop/icons/orange-location-icon.svg"
//                 alt="location"
//                 className="listings-main-card__row1__colm1-img2"
//               />
//               Remote
//             </p>
//             <p className="font-12-nunito-sans-600">
//               <img
//                 src="/imgs/desktop/icons/orange-calendar-icon.svg"
//                 alt="calendar"
//                 className="listings-main-card__row1__colm1-img3"
//               />
//               3 Months
//             </p>

//             <p className="font-12-nunito-sans-600">
//               <img
//                 src="/imgs/desktop/icons/orange-two-users-icon.svg"
//                 alt="resources"
//                 className="listings-main-card__row1__colm1-img4"
//               />
//               3 Resources Required
//             </p>
//             <p className="font-12-nunito-sans-600">
//               <img
//                 src="/imgs/desktop/icons/orange-billing-icon.svg"
//                 alt="billing"
//                 className="listings-main-card__row1__colm1-img5"
//               />
//               Monthly Billing
//             </p>
//           </div>
//         </div>
//         <div className="d-none d-md-block col-md-3 listings-main-card__row1__colm2">
//           <h3 className="listings-main-card__row1__colm2-title font-36-nunito-sans-800">
//             $3
//           </h3>
//           <p className="listings-main-card__row1__colm2-desc font-14-nunito-sans-600">
//             Per Hour Per Resource
//           </p>
//         </div>
//       </div>
//       <hr className="d-none d-md-block listings-card-hr" />
//       <p className="listings-main-card__desc font-14-nunito-sans-300">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//         commodo consequat.
//       </p>
//       <div className="row mx-0 justify-content-between align-items-center listings-main-card__row2">
//         <div className="col-12 col-md-9 listings-main-card__row2__colm1">
//           <div className="d-flex align-items-center">
//             <h3 className="font-10-nunito-sans-700">Key Skills</h3>
//             <ul className="d-flex listings-main-card__row2__colm1-ul">
//               <li>Angular Js</li>
//               <li>React JS</li>
//             </ul>
//           </div>
//         </div>
//         <div className="d-none d-md-block col-3 listings-main-card__row2__colm1">
//           {renderViewDetailsButton()}
//         </div>
//       </div>
//       <div className="d-flex d-md-none align-items-center listings-main-card__lastRowMobile">
//         <div className="col-6">
//           <h5 className="listings-main-card__lastRowMobile__text">
//             $24 / Hr / Resource
//           </h5>
//         </div>
//         <div className="col-6 text-right">{renderViewDetailsButton()} </div>
//       </div>
//     </div>
//   );
// }
