import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import employeeService from '../services/employee.service';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  // const [tempEmp, setTempemp] = useState([]);

  const init = () => {
    employeeService
      .getAll()
      .then((response) => {
        console.log('Printing employees data', response.data);
        setEmployees(response.data);
        // setTempemp(response.data);
        //  console.warn(response.data);
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    employeeService
      .remove(id)
      .then((response) => {
        console.log('employee deleted successfully', response.data);
        init();
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  return (
    <div className='container'>
      <h3>List of Employees</h3>
      <hr />
      <div>
        <Link to='/add' className='btn btn-primary mb-2'>
          Add Employee
        </Link>
        <table className='table table-bordered table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>AadharNo</th>
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.userName}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.role}</td>
                <td>{employee.aadharNo}</td>
                <td>
                  <Link
                    className='btn btn-info'
                    to={`/employees/edit/${employee.id}`}
                  >
                    Update
                  </Link>
                </td>

                {/* <td>
                  <Link
                    className='btn btn-info'
                    to={`/uploadImage/${employee.id}`}
                  >
                    Image Upload
                  </Link>
                </td> */}
                <td>
                  <button
                    className='btn btn-danger ml-2'
                    onClick={() => {
                      handleDelete(employee.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
