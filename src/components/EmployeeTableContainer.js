import React, { useEffect, useState } from "react";
import API from "../utils/API";

const EmployeeTableContainer = () => {
    const [employees, setEmployees] = useState([]);
    
    useEffect(() => {
        API.searchAll()
        .then(response => {
            setEmployees(response.data.results);
        })  .catch(error => {console.log("error getting data" + error)})
    },[])

    const sortAlpha = (e) => {
        function compare(a, b) {
            if (a.name.first < b.name.first){
              return -1;
            }
            if (a.name.first > b.name.first){
              return 1;
            }
            return 0;
          }
         var sorted = employees.sort(compare);

         setEmployees([...sorted])
    }

    const sortLast = (e) => {
        function compare(a, b) {
            if (a.name.last < b.name.last){
              return -1;
            }
            if (a.name.last > b.name.last){
              return 1;
            }
            return 0;
          }
         var lastSort = employees.sort(compare);

         setEmployees([...lastSort])
        
    }


    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Photo</th>
                        <th scope="col"><button onClick={(e) => sortAlpha()}>First</button></th>
                        <th scope="col"><button onClick={(e) => sortLast()} id="button">Last</button></th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Birthday</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.login.uuid}>
                            <img className="img-thumbnail" src={employee.picture.thumbnail} alt={employee.name} />
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                            <td>{employee.dob.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTableContainer;