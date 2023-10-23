import React from "react";

import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className=" mt-5">
        <div className="  w-100 mt-5 d-flex justify-content-between   align-items-center">
          <div style={{ height: "3px" }} class="w-75  bg-dark ms-2 "></div>
          <div className="ms-3">
            <FaFacebookSquare style={{ fontSize: "50px", color: "blue" }} />
          </div>
          <div className="ms-3 me-3">
            <FaGithubSquare style={{ fontSize: "50px" }} />
          </div>
          <div className="ms-3 me-3">
            <FaTwitterSquare style={{ fontSize: "50px", color: "blue" }} />
          </div>
          <div className="ms-3 me-3">
            <FaInstagramSquare style={{ fontSize: "50px", color: "#E4405F" }} />
          </div>
          <div className="ms-3 me-3">
            <FaLinkedin style={{ fontSize: "50px", color: "#0077B5" }} />
          </div>

          <div style={{ height: "3px" }} class="w-75 me-2 bg-dark "></div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-3 mb-2">
          <h1 style={{fontSize:'30px',fontWeight:'bolder'}}>CRUD-APPLICATION</h1>
          
        </div>
        <div className="d-flex justify-content-center align-items-center">
        <h6>This can be as simple as "© [2055] CRUD-Application</h6>
        </div>
      </div>

      <div style={{ height: "3px" }} class="w-100 bg-dark  mb-5"></div>
    </>
  );
}

export default Footer;
