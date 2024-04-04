import React, { useState, useEffect } from 'react';
import "./Registration css/style.css";

// Step1

// const Registartionform = () => {
//     const data = {
//         name: "",
//         email: "",
//         password: ""
//     }
//     const [inputData, setInputData] = useState(data);
//     const [flag, setFlag] = useState(false);
//     // console.log(data);

//     const handleData = (e) => {
//         setInputData({ ...inputData, [e.target.name]: e.target.value });
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!inputData.name || !inputData.email || !inputData.password) {
//             alert("All fields are Mandatory");
//         } else {
//             setFlag(true);
//         }
//     }
//     useEffect(() => {
       
//         console.log("Registerd");
//     }, [inputData, flag]);

//   return (
//     <div className="container">
//           <h2>Registration Form</h2>
//           {
//              flag ? <h2> Hello {inputData.name}, You have registered succefully! </h2> : ""
//           }
//     <form id="registration-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="username">Username:</label>
//         <input type="text" name="name" value={inputData.name} onChange={handleData} />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email:</label>
//         <input type="email"  name="email" value={inputData.email} onChange={handleData} />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password:</label>
//         <input type="password" name="password" value={inputData.password} onChange={handleData}/>
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   </div>
//   )
// }

// export default Registartionform;

const Registartionform = () => {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [flag, setFlag] = useState(false);

    const handleData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

const handleSubmit = (e) => { 
    e.preventDefault();
    console.log("Input Data:", inputData); // Add this line for debugging
    if (!inputData.name || !inputData.email || !inputData.password) {
        console.log("Mandatory fields are empty"); // Add this line for debugging
        alert("All fields are mandatory.");
    } else if (!isValidEmail(inputData.email)) {
        console.log("Email validation failed"); // Add this line for debugging
        alert("Please enter a valid email address.");
    } else if (inputData.password.length < 6){
        alert("Password must be at least 6 characters long.");
    } else {
        setFlag(true);
        setInputData({
            name: "",
            email: "",
            password: "",
        })
    }
}

    const isValidEmail = (email) => {
        if (!email) {
            return false; // Return false if email is empty
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(String(email).toLowerCase());
    }

    return (
        <div className="container">
            <h2>Registration Form</h2>
            {flag ? <h2>Hello {inputData.name}, You have registered successfully!</h2> : null}
            <form id="registration-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="name" value={inputData.name} onChange={handleData} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value={inputData.email} onChange={handleData} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={inputData.password} onChange={handleData} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Registartionform