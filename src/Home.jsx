import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://crud-json-rjqd.onrender.com/posts")
      .then((result) => setData(result.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      axios
        .delete(`https://crud-json-rjqd.onrender.com/posts/${id}`)
        .then(() => {
          // Remove the deleted item from the state without refreshing the page
          setData((prevData) => prevData.filter(item => item.id !== id));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center w-100 mt-5">
        <h1>List of items</h1>
        <div className="p-3 w-100">
          <div className="w-100 rounded bg-white border p-3">
            <div className="m-3 d-flex justify-content-end">
              <Link to={'/create'} style={{ color: 'white', fontWeight: 'bold' }} className="btn btn-close-white border bg-black  ">Add-new-Employee</Link>
            </div>
            <table className="table border shadow-lg">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((d, i) => (
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.Name}</td>
                    <td>{d.Email}</td>
                    <td>{d.Address}</td>
                    <td>{d.Phone}</td>
                    <td>
                      <div cls>
                        <Link to={`/red/${d.id}`} className="btn btn-sm btn-info me-3">
                          Read
                        </Link>
                        <Link to={`/uodate/${d.id}`} className="btn btn-sm btn-primary me-3">
                          Edit
                        </Link>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(d.id)} // Call the delete function on button click
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
