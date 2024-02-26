import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useEffect } from "react";
import Companies from "./Companies";
import Navbaruse from "./Navbaruse";
import { useComp } from "../Context/CompContext";

const data = [
  { name: "abc", location: "sol", id: 123 },
  { name: "abc", location: "sol", id: 123 },
  { name: "abc", location: "sol", id: 123 },
];

export default function Dashboard() {
  const { fetchcompanies, companies } = useComp();

  useEffect(() => {
    fetchcompanies();
  }, []);


  return (
    <>
      <Navbaruse />

      <Companies />
    </>
  );
}
