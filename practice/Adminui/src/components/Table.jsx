import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import Footer from "./Footer";

const Table = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      const res = await data.json();
      setData(res);
      console.log(res);
    } catch (e) {
      console.log(e.message);
    }
  }

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  let itemPerPage = 10;
  let totalPageLength = Math.ceil(data.length/10);
//   console.log(totalPageLength);
  return (
    <div>
      {searchText}
      {/* <SearchBar/> */}
      <input
        className="search-bar"
        type="text"
        value={searchText}
        onChange={handleSearch}
        placeholder="Search by name email or role"
      />

      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0,10)?.map((item) => (
            <tr key={item.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td className="icon">
                <BiEdit /> <AiOutlineDelete />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer totalPage={totalPageLength}/>
    </div>
  );
};

export default Table;
