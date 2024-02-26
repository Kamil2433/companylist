import React, { useRef, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import Company from "./Company";
import { useComp } from "../Context/CompContext";
import Addcompmodal from "./Addcompmodal";

export default function Companies() {
  const { companies, setcomp, fetchcompanies, deletecomp, searchbyid } =
    useComp();
  const [show, setmodal] = useState(false);
  const [search, setsearch] = useState();

  const closethemodal = () => {
    setmodal(false);
  };

  const getcomp = (e) => {
    e.preventDefault();
    console.log("getting clicked");
    searchbyid(search);
  };

  return (
    <>
      <div>
        <form class="form-inline my-2 my-lg-0" onSubmit={getcomp}>
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search companies by id"
            aria-label="Search"
            id="compsearch"
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>

      <div
        className="mt-5 m-5"
        style={{ marginTop: "20%", paddingTop: "80px" }}
      >
        <Button className="primary " onClick={() => setmodal(true)}>
          Add New Company
        </Button>
      </div>

      <Modal show={show} onHide={closethemodal}>
        <Addcompmodal onHide={closethemodal} />
      </Modal>

      {/* <div className='col-md-3'> */}
      <div className=" row row-cols-3 g-3 ml-3" style={{ width: "1000px" }}>
        {companies ? (
          companies?.map((com, idx) => {
            // console.log("hii",note.title);
            return <Company title={com.name} desc={com.location} id={com.id} />;
            // <Note  title={element.title} desc={element.description} />
          })
        ) : (
          <div>No Companies Created</div>
        )}
      </div>
    </>
  );
}
