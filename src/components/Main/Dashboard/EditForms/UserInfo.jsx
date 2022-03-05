import React, { useState } from "react";
import axios from "axios";

const UserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem("peopleData"));
  const token = localStorage.getItem("token");

  console.log(userInfo);
  const [firstName, setFirstName] = useState(userInfo.firstName);
  const [lastName, setLastName] = useState(userInfo.lastName);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber);
  const [gender, setGender] = useState(userInfo.gender);
  const [dateOfBirth, setDateOfBirth] = useState(userInfo.dateOfBirth);
  
  async function sendEditRequest(e) {
      e.preventDefault();

      const editRequestBody = {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          gender: gender,
          userName: userInfo.userName,
          dateOfBirth: dateOfBirth,
      };

      console.log(editRequestBody);
      const url = 'http://localhost:9067/person/profile/edit/personinfo';

      try {
          const editResponse = await axios.put(url, {
            headers: { Authorization: `Bearer ${token}`},
            params: {
              username: `${localStorage.getItem("username")}`,
            },
          }, editRequestBody);

          console.log(editResponse);
      } catch (err) {
          console.log(err);
      }
  }

  return (
    <div>
      <form className="user-edit-form">
        <div className="user-edit-input-fields">
          <input
            type="text"
            className="username"
            align="center"
            value={userInfo.userName}
            disabled
          />

          <input
            type="text"
            className="username"
            align="center"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />

          <input
            type="text"
            className="username"
            align="center"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />

          <input
            type="number"
            className="username"
            align="center"
            value={phoneNumber}
            pattern={/^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div className="gender">
          <select value={gender} onChange={(event) => setGender(event.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Prefer not to say">Rather not say</option>
          </select>

          <div className="firstName">
              <i class="fas fa-calendar"></i>
              <input className="date" placeholder="Enter BirthDay" type="date" value={dateOfBirth} pattern=" enter BirthDay \d{4}-\d{2}-\d{2}" onChange={(event) => setDateOfBirth(event.target.value)}/>
            </div>

        </div>

        <div className="user-edit-btns">
          <button
            type="submit"
            className="submit"
            onClick={sendEditRequest}
            href="/userdashboard"
          >
            Edit Info
          </button>

          <p className="forgot" align="center">
            <a href="#">Edit Password?</a>{" "}
          </p>
          <br></br>
          <p className="cancel" align="center">
            <a href="/userdashboard">Cancel</a>{" "}
          </p>
          <br></br>
        </div>
      </form>
    </div>
  );
};

/* 
"dateOfBirth": "2022-03-05T13:34:25.639Z",
  "firstName": "string",
  "gender": "string",
  "lastName": "string",
  "phoneNumber": "string",
  "userName": "string"
*/

export default UserInfo;
