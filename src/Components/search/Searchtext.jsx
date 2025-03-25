import { useEffect, useState } from "react";
import "./searchs.css";
import Table from "./table";
import axios from "axios";

//////////////////////BASIC SEARCH

// function App() {
//   const [query, setQuery] = useState("");
//   return (
//     <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//       <ul className="list">
//         {Users.filter((asd) =>
//           asd.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li className="listItem" key={user.id}>
//             {user.first_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

///////////////////////SEARCH ON A DATATABLE

// function App() {
//   const [query, setQuery] = useState("");
//   const keys = ["first_name", "last_name", "email"];
//   const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().includes(query))
//     );
//   };
// return (
//   <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//     {<Table data={Search(Users)} />}
//   </div>
// );
// }

////////////////////// API SEARCH

export default function Searched() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://jobs-api-u83r.onrender.com/api/findjob?search=${query}`);
      setData(res.data);
    };
    if (query.length > 0 || query.length !== 0) fetchData();
  }, [query]);

  return (
    <>
    <div className="app">
        <input
          className="search"
          placeholder="search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      {query.length > 0 && <Table data={data}/>}
    </div>
      {/* {<Table data={data} />} */}
      </>

  );
}
