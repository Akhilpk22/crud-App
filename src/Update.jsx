import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';



function Update() {
  // const [data, setData] = useState([]);

  const {id} = useParams();

  const [values, setValues] = useState({
    Name: "",
    Email: "",
    Address: "",
    Phone: "",
  });

 const  navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3001/posts/" + id)
      .then((result) => {
        setValues(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleUpdate = (event) =>{
    event.preventDefault();

    axios
      .put("http://localhost:3001/posts/"+id, values)
      .then((result) => {
        console.log(result);
        navigate("/Home");
      })
      .catch((error) => console.log(error));

  };
  
  return (
    <>
    <div className="d-flex mt-5 mb-5 w-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-black shadow-lg px-5 pt-3 pb-5 rounded">
          <h1 className="text-center bg-white mt-3 p-2 shadow-lg">
            Update Empolyees
          </h1>
          <form onSubmit={handleUpdate} className="form-control mt-3">
            <div className="mb-3">
              <label htmlFor="Name">Name:</label>
              <input
                type="text"
                name="Name"
                className="form-control"
                placeholder="Enter  your Name.."
                // onChange={(e) => setValues({ ...values, Name: e.target.value })}
                onChange={(e) => setValues({ ...values, Name: e.target.value })}
                value={values.Name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email">Email:</label>
              <input
                type="Email"
                name="Email"
                className="form-control"
                placeholder="Enter your emil.."
                onChange={(e) =>
                  setValues({ ...values, Email: e.target.value })
                }
                value={values.Email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address">Address:</label>
              <input
                type="text"
                name="Address"
                className="form-control"
                placeholder="Enter your Address.."
                onChange={(e) =>
                  setValues({ ...values, Address: e.target.value })
                }
                value={values.Address}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Phone">Phone:</label>
              <input
                type="text"
                name="Phone"
                className="form-control"
                placeholder="Enter your Phone.. "
                onChange={(e) =>
                  setValues({ ...values, Phone: e.target.value })
                }
                value={values.Phone}
              />
            </div>
            <div className="d-flex justify-content-around align-items-center m-3">
              <button className="btn btn-success">UPdate</button>
              <Link
                style={{ textDecoration: "none" }}
                className="btn btn-primary ms-3"
                to={"/"}
              >
                Back{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Update ;