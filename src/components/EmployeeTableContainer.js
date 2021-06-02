import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import API from "../utils/API";
import EmployeeData from "./EmployeeData";

const EmployeeTableContainer = () => {
    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchEmp = async () => {
            const result = await axios(`https://randomuser.me/api/?results=50`)
            console.log(result.data.results);
            setEmployees(result.data.results);
            setIsLoading(false);
        }
        fetchEmp()
    }, [])
    
    return (
        <div>
            <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Photo</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Birthday</th>
                        </tr>
                    </thead>
                    <EmployeeData isLoading = {isLoading} employees = {employees}/>
                </table>

        </div>
    )
}

export default EmployeeTableContainer;