import React, { useState } from "react";
import { Paginator } from "primereact/paginator";
import { Button } from "primereact/button";
import Table from "./components/Table";

function Home() {
  return (
    <div className="grid grid-nogutter" style={{ height: "100%" }}>
      <div
        className="col-12"
        style={{ backgroundColor: "skyblue", height: "10%" }}
      >
        <h2 className="text-center">
          Classforma Frontend Intern Assessment Task
        </h2>
      </div>
      <div
        className="col-12 grid grid-nogutter p-5 justify-content-center"
        style={{ height: "90%" }}
      >
        <Table />
      </div>
    </div>
  );
}

export default Home;
