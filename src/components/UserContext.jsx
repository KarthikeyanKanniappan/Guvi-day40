import React, { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { env } from "../config";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [mentorName, setMentorName] = useState([]);
  const [StudentName, setStudentName] = useState([]);
  useEffect(() => {
    getMentor();
    getStudent();
  }, []);

  let getMentor = async () => {
    let response = await axios.get(`${env.api}/mentors`);
    setMentorName(response.data);
  };

  let getStudent = async () => {
    let response = await axios.get(`${env.api}/students`);
    setStudentName(response.data);
  };

  return (
    <UserContext.Provider
      value={{
        mentorName,
        StudentName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
