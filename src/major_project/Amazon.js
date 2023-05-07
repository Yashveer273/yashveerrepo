import React, { useState,useEffect } from "react";
import axios from "axios";
import { message } from 'antd';

function Amazon() {
  const [data, setData] = useState([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 32 },
    { id: 3, name: "Bob", age: 0 },
  ]);
const [vender,setvender]=useState([]);



  // ===================================================================
  const [username, setuserName] = useState("");
  const [file, setfile] = useState(null);

  const handleCellChange = (id, field, value) => {
    setData(
      data.map((row) => {
        if (row.id === id) {
          return { ...row, [field]: value };
        }
        return row;
      })
    );
  };
  const vendor_name = (e) => {
    e.preventDefault();

    setuserName(e.target.value);
  };

  const file_name = (e) => {
    setfile(e.target.files[0]);
  };
  const submit = async(e) => {    // formData.append("userName", username);
    e.preventDefault();
    var formData = new FormData();
    formData.append('photo',file)
    formData.append('userName',username);
    const confog={
      header:{
        "Content-Type":"multipart/form-data"
      }
    }

    // console.log(formData, "oooooo");

const res =await axios.post("http://localhost:5000/vendorData",formData,confog);
    console.log(res, "11111");
    if(res.data.status==201){
      message.success("  Successfully data sended");
    }else{
      message.error("  Successfully data sended");
      
    }
  };
  useEffect(()=>{
    fetch("http://localhost:5000/form10").then((Result) => {
      Result.json().then((resp) => {
        setvender(resp);
        console.log(resp,"jnjnj");
      });
    });
  },[]);
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td
                contentEditable={true}
                onBlur={(e) =>
                  handleCellChange(row.id, "name", e.target.innerText)
                }
              >
                {row.name}
              </td>
              <td
                contentEditable={true}
                onBlur={(e) =>
                  handleCellChange(row.id, "age", e.target.innerText)
                }
              >
                {row.age}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={submit} enctype="multipart/form-data">
        <input
          name="userName"
          onChange={vendor_name}
          placeholder="Use Name"
        ></input>

        <input
          // placeholder="CVC"

          type="file"
          name="photo"
          onChange={file_name}
        ></input>

        <button
          type="submit"
          value="Submit"

          // onClick={()=>Complete()}
        >
          submit
        </button>
      </form>


      <div>


      <div className="sq">
          {vender.map((item) => (
            <div key={item._id} className="sq1">
              <img className="api1" src={item.imgName} alt={item.name}></img>

              <span className="description">
                {" "}
                {item.name}&nbsp;&nbsp;&nbsp; ₹{item.price}&nbsp;{item.star}
                {item.Reviews}
                {/* <button onClick={() => add_to_cart(item)}>Shop Now</button> */}
              </span>
            </div>
          ))}
          </div>

      </div>
    </>
  );
}

export default Amazon;
