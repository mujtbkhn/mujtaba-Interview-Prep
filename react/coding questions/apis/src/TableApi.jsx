import axios from "axios";
import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const TableApi = () => {
  const [data, setData] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [originalData, setOriginalData] = useState(null);

  const debounceValue = useDebounce(searchValue, 800);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [debounceValue]);

  const fetchDataFromApi = async () => {
    try {
      const res = await axios.get(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      console.log(res.data);
      setData(res.data.data);
      setOriginalData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (idYear) => {
    setData(data.filter((item) => item["ID Year"] !== idYear));
    setOriginalData(originalData.filter((item) => item["ID Year"] !== idYear));
  };

  const handleSearch = () => {
    console.log(debounceValue);
    if (debounceValue.trim() === "") {
      setData(originalData);
    } else {
      setData(
        originalData.filter(
          (item) =>
            item.Year.includes(debounceValue) ||
            item.Population.toString().includes(debounceValue)
        )
      );
    }
  };

  const handleReset = () => {
    setSearchValue("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Year Or Population"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button onClick={() => handleReset()}>Reset</button>
      <table>
        <thead>
          <tr>
            <th>Years</th>
            <th>Population</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item["ID Year"]}>
                <td>{item.Year}</td>
                <td>{item.Population}</td>
                <td>
                  <button onClick={() => handleDelete(item["ID Year"])}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableApi;
