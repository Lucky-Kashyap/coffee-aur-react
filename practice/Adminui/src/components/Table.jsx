import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import Footer from "./Footer";

const Table = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [filterData,setFilterData] = useState([]);
  const[page,setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(()=>{
    filterSearchText(searchText,data);
},[searchText]);

  async function fetchData() {
    try {
      const data = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      const res = await data.json();
      setData(res);
      setFilterData(res);
    //   console.log(res);
    } catch (e) {
      console.log(e.message);
    }
  }

//   const handleSearch = (e) => {
//     setSearchText(e.target.value);
//   };

  const filterSearchText=(searchText,data)=>{
    // setSearchText(e.target.value);
    const text = data.filter(prod=>prod.name.toLowerCase().includes(searchText.toLowerCase()));

    setFilterData(text);
  }

  let itemPerPage = 10;
  let totalPageLength = Math.ceil(data.length/10);

  let startIndex =(page -1) * itemPerPage;
  let endIndex = startIndex + itemPerPage;
 
//   console.log(totalPageLength);
  return (
    <div>
      {searchText}
      {/* <SearchBar/> */}
      <input
        className="search-bar"
        type="text"
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
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
          {filterData.slice(startIndex,endIndex)?.map((item) => (
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

      <Footer page={page} setPage={setPage}  totalPage={totalPageLength}/>
    </div>
  );
};

export default Table;
