import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({ ...user, [name]: value });
  };


    const postData=async(e)=>{
      e.preventDefault();
      const{name,surname,email,phone,message}=user;

      if(name && surname && email && phone && message){

        const res=await fetch("https://simple-form-1db0f-default-rtdb.firebaseio.com/youtube.json",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({name,surname,email,phone,message}),
        });
        if(res){
          setUser({
            name: "",
            surname: "",
            email: "",
            phone: "",
            message: "",
          });
        }  
      }
      else{
        alert("Please fill the data");
      }
     }

  
  return (
    <>
      <div className="card">
      <form method="POST">
        <h2>Contact Us</h2>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="name"
                onChange={inputEvent}
                placeholder="Enter Your Name"
                value={user.name}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Surname</label>
              <input
                type="text"
                name="surname"
                onChange={inputEvent}
                placeholder="Enter Your Surname"
                value={user.surname}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={inputEvent}
                placeholder="Enter E-mail"
                value={user.email}
                required
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Phone</label>
              <input
                type="number"
                name="phone"
                onChange={inputEvent}
                placeholder="Enter Phone Number"
                value={user.phone}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Message</label>
              <textarea
              name="message"
              onChange={inputEvent}
              placeholder="Write Message"
              value={user.message}
              ></textarea>
            </div>
          </div>

          <div className="col">
            <button type="submit" className="btn_submit" onClick={postData} value="Submit" >submit</button>
          </div>
        </div>
        </form>
      </div>
    </>
  );
};

export default App;
