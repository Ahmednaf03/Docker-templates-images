import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  console.log(data);
  
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/sample`)
      .then((res) => {
        setData(res.data);
        
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);
  
  
  const deleteData = async (id) => {
    try {
      console.log("entered the function id is "+id);
      axios.delete(`${import.meta.env.VITE_API_URL}/api/sample/${id}`);
      setData(...data)
    } catch (error) {
      console.log("error", error);
      
    }
  }

  return (
    <main className="container">
      <h1 className="heading">List</h1>
      <p className="sub_heading">Add some data to check  if db and api containers work right </p>

      <ul className="sample_list" >
        {data.length > 0 &&
          data.map((data) => (
            <li key={data._id} className="sample_card">
              <div className="sample_info">
                <h4>{data.title}</h4>
                <p>{data.description} - id : {data._id}</p>  
               
              </div>

              <div className="sample_link" >
                <button className="delete" onClick={() => deleteData(data._id)}>delete</button>
                <Link to={data.link} target="_blank" className="link">
                  Redirect
                </Link>
              </div>
            </li>
          ))}
      </ul>

      {data.length === 0 && (
        <p className="no_result">Added data will appear here :) </p>
      )}
    </main>
  );
}

export default Home;
