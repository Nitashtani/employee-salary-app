import React, { useState } from "react";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  const addEmployee = (e) => {
    e.preventDefault();
    if (name && salary) {
      setEmployees([...employees, { name, salary }]);
      setName("");
      setSalary("");
    }
  };

  return (
    <div className="App">
      <h1>Employee Salary App</h1>
      <form onSubmit={addEmployee}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <button type="submit">Add Employee</button>
      </form>
      <EmployeeList employees={employees} />
    </div>
  );
}

const EmployeeList = ({ employees }) => (
  <div>
    <h2>Employee List</h2>
    <ul>
      {employees.map((employee, index) => (
        <li key={index}>
          {employee.name}: ${employee.salary}
        </li>
      ))}
    </ul>
  </div>
);

export default App;
