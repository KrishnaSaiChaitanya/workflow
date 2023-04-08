import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";

export default function Table() {
  const [loading, setloading] = useState(false);
  const [ind, setind] = useState(0);
  const [arr, setarr] = useState([]);
  const FormatDate = (value) => {
    const date = new Date(value);
    return date.toLocaleDateString("nl-BE", {
      year: "numeric", // possible values: 'numeric', '2-digit'
      month: "short", // possible values: 'numeric', '2-digit', 'long', 'short', 'narrow'
      day: "numeric", // possible values: 'numeric', '2-digit'
    });
  };
  const LinkBodyTemplate = (value) => {
    return (
      <>
        <Link to={`/${value.name}`}>{value.name}</Link>
      </>
    );
  };

  useEffect(() => {
    setloading(true);
    const get_data = async (val) => {
      console.log(val);
      let res = await fetch(
        "https://64307b10d4518cfb0e50e555.mockapi.io/workflow",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await res.json();
      console.log(data);
      setloading(false);
      if (res.status == 200) {
        setarr(data);
        // alert("Sucussfully Fetched");
      } else {
        console.log("errorr");
      }
    };
    get_data();
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ height: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              id="chat_img"
              src="../images/loading_animation.gif"
              height={450}
            />
          </div>
          <h3 className="text-center p-2">Fetching Data .....</h3>
        </div>
      ) : (
        <div className="card" style={{ width: "70%" }}>
          <DataTable
            value={arr}
            paginator
            rows={8}
            template={{
              layout: "PrevPageLink CurrentPageReport NextPageLink",
            }}
          >
            <Column field="id" header="Id"></Column>
            <Column field="name" header="Name" body={LinkBodyTemplate}></Column>
            <Column field="input_type" header="input"></Column>
            <Column field="createdAt" header="Created at"></Column>
          </DataTable>
        </div>
      )}
    </>
  );
}
