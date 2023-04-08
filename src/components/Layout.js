import { Button } from "primereact/button";
import { Link, Outlet, useParams } from "react-router-dom";
import FlowGraph from "./FlowGraph";
import { useEffect, useState } from "react";
import { Paginator } from "primereact/paginator";

function Layout() {
  const [arr, setarr] = useState([1, 2, 3, 4, 5]);
  let params = useParams();
  const [name, setname] = useState("Loading ...");
  const [loading, setloading] = useState(false);
  const [paginator, setpaginator] = useState(0);
  const onPageChange = (event) => {
    setpaginator(event.first);
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

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div style={{ height: "100vh" }}>
      <div className="grid-nogutter grid" style={{ height: "100%" }}>
        <div
          className="grid grid-nogutter col-12 md:col-4 "
          style={{
            backgroundColor: "#989EAA",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="col-12 grid-nogutter grid mt-3">
            {" "}
            {/* Name */}
            <div className="col-12">
              <h1 className="text-center ">Modules</h1>
            </div>
          </div>
          <div
            className="col-12"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <aside>
              <div className="p-1 justify-content-center align-items-center flex">
                <div
                  className="p-2"
                  style={{
                    border: "2px solid black",
                    borderRadius: "15px",
                    width: "230px",
                  }}
                  onDragStart={(event) =>
                    onDragStart(
                      event,
                      arr[paginator].name + " - " + arr[paginator].input_type
                    )
                  }
                  draggable
                >
                  {arr[paginator].name + " - " + arr[paginator].input_type}
                </div>
              </div>
              <div className="p-1 justify-content-center align-items-center flex">
                {paginator + 1 < arr.length && (
                  <div
                    className="p-2"
                    style={{
                      border: "2px solid black",
                      borderRadius: "15px",
                      width: "230px",
                    }}
                    onDragStart={(event) =>
                      onDragStart(
                        event,
                        arr[paginator + 1].name +
                          " - " +
                          arr[paginator + 1].input_type
                      )
                    }
                    draggable
                  >
                    {arr[paginator + 1].name +
                      " - " +
                      arr[paginator + 1].input_type}
                  </div>
                )}
              </div>
              <div className="p-1 justify-content-center align-items-center flex">
                {paginator + 2 < arr.length && (
                  <div
                    className="p-2"
                    style={{
                      border: "2px solid black",
                      borderRadius: "15px",
                      width: "230px",
                    }}
                    onDragStart={(event) =>
                      onDragStart(
                        event,
                        arr[paginator + 2].name +
                          " - " +
                          arr[paginator + 2].input_type
                      )
                    }
                    draggable
                  >
                    {arr[paginator + 2].name +
                      " - " +
                      arr[paginator + 2].input_type}
                  </div>
                )}
              </div>
              <div className="p-1 justify-content-center align-items-center flex">
                {paginator + 3 < arr.length && (
                  <div
                    className="p-2"
                    style={{
                      border: "2px solid black",
                      borderRadius: "15px",
                      width: "230px",
                    }}
                    onDragStart={(event) =>
                      onDragStart(
                        event,
                        arr[paginator + 3].name +
                          " - " +
                          arr[paginator + 3].input_type
                      )
                    }
                    draggable
                  >
                    {arr[paginator + 3].name +
                      " - " +
                      arr[paginator + 3].input_type}
                  </div>
                )}
              </div>
              <div className="p-1 justify-content-center align-items-center flex">
                {paginator + 4 < arr.length && (
                  <div
                    className="p-2"
                    style={{
                      border: "2px solid black",
                      borderRadius: "15px",
                      width: "230px",
                    }}
                    onDragStart={(event) =>
                      onDragStart(
                        event,
                        arr[paginator + 4].name +
                          " - " +
                          arr[paginator + 4].input_type
                      )
                    }
                    draggable
                  >
                    {arr[paginator + 4].name +
                      " - " +
                      arr[paginator + 4].input_type}
                  </div>
                )}
              </div>
            </aside>
          </div>
          <div className="col-12">
            <Paginator
              first={paginator}
              rows={5}
              totalRecords={arr.length}
              onPageChange={onPageChange}
              template={{
                layout: "PrevPageLink CurrentPageReport NextPageLink",
              }}
            />
          </div>{" "}
        </div>

        <div className="col-12 md:col-8 " style={{ height: "100%" }}>
          <FlowGraph />
        </div>
      </div>
    </div>
  );
}
export default Layout;
