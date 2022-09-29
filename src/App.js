import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TableList from "./components/TableList";
import Mentor from "./components/Mentor";
import Student from "./components/Student";
import DropDownMentor from "./components/DropDownMentor";
import MultipleStudent from "./components/MultipleStudent";
import FinalDropDown from "./components/FinalDropDown";
import { UserProvider } from "./components/UserContext";
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<TableList />} />
            <Route path="/mentor" element={<Mentor />} />.
            <Route path="/student" element={<Student />} />
            <Route path="/multipleStudent" element={<MultipleStudent />} />
            <Route path="/studentToMentor" element={<DropDownMentor />} />
            <Route path="/information" element={<FinalDropDown />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
