import Table from "rc-table";
import { useEffect, useState } from "react";
import { columns, data as fakeData } from "./components/Table";
import "./styles.css";
import _ from "lodash";
import { MyModal } from "./components/Modal";

export default function App() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [noData, setNoData] = useState("No Data");
  const [data, setData] = useState(fakeData);
  const getData = () => {
    fetch("https://retoolapi.dev/YcM50s/data")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        const filteredData = json.filter((ele) =>
          ele.JobTitle.toLowerCase().includes(search)
        );

        setIsLoading(false);
        if (filteredData.lenth === 0) setNoData("No Data");
        console.log("api called ", json, filteredData);
        setData(filteredData);
      });
  };
  const debounce_fun = _.debounce(getData, 3000);
  useEffect(() => {
    console.log("useEffect", isLoading, data, noData, search);
    debounce_fun();
  }, [isLoading]);

  useEffect(() => {
    if (isLoading === false) setNoData(noData);
  }, [isLoading]);
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    setIsLoading(true);
    setData([]);

    setNoData("Loading...");

    // setData(response.json())
  };
  return (
    <div className="App">
      <h1>Table Data</h1>
      <input type="text" onChange={onChangeHandler} />
      <h1>{`Searching for ${search}`}</h1>
      {true && <MyModal />}
      <Table columns={columns} emptyText={<h1>{noData}</h1>} data={data} />
    </div>
  );
}
