import React from 'react'

const EmployeeData = (  {isLoading, employees}) => {
    // const editPhone ({employee.phone}) {
    //     var edit = ('' + {employee.phone}.replace(/\D/g, ''))

    // }

    return isLoading ? (<tbody><tr><th scope="row">Loading</th></tr></tbody>) : (
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
    )
}

export default EmployeeData
