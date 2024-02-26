import React, { useState } from "react";
import { useContext } from "react";

const ComContext = React.createContext();

export function useComp() {
  return useContext(ComContext);
}

export default function CompContext({ children }) {
  const [companies, setcom] = useState();

  ///function to add new company
  async function addcomp(inputtitle, inputdescription) {
    const response = await fetch("http://localhost:3200/company", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ name: inputtitle, location: inputdescription }),
    });
    const res = await response.json();

    console.log(companies);

    fetchcompanies();
  }

  ///function t0 fetch company

  async function fetchcompanies() {
    const response = await fetch("http://localhost:3200/companies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const res = await response.json();

    const temp = Array.from(res);
    setcom(temp);
    console.log(companies);
    return res;
  }

  ///function to update company
  async function updatecomp(id, inputtitle, inputdesc) {
    console.log("here is the input to the fun", inputdesc, inputtitle, id);

    const response = await fetch(`http://localhost:3200/company/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ name: inputtitle, location: inputdesc }),
    });
    const res = await response.json();

    console.log(res);
    fetchcompanies();
  }

  ///function to delete company
  async function deletecomp(id) {
    const response = await fetch(`http://localhost:3200/company/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    fetchcompanies();
  }

  ///function to search

  async function searchbyid(id) {
    const response = await fetch(`http://localhost:3200/company/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      //  body:JSON.stringify({id:inputid,password:inputpassword})
    });
    const res = await response.json();

    var temp = [];
    temp.push(res);
    await setcom(temp);

    return res;
  }

  return (
    <ComContext.Provider
      value={{
        setcom,
        companies,
        fetchcompanies,
        addcomp,
        deletecomp,
        updatecomp,
        searchbyid,
      }}
    >
      {children}
    </ComContext.Provider>
  );
}
