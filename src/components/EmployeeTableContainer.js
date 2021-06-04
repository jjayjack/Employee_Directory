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

    const filterAge = (e) => {
        var peopleFifty = []
        for (let index = 0; index < employees.length; index++) {
            const element = employees[index];
                if (element.dob.age > 50){
                    peopleFifty.push(element)
                }
        }
        setEmployees([...peopleFifty])
    }


    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Photo</th>
                        <th scope="col"><button onClick={sortAlpha()}>First</button></th>
                        <th scope="col">Last</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col"><button onClick={filterAge()} id="button">Birthday</button></th>
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