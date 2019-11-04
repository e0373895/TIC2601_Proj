import React from "react";
// import MaterialTable from "material-table";
// import Button from "material-ui/Button";
// import Babel from "material-ui/styles";
// import { save} from "material-ui/icons";
import ReactTable from 'react-table';

    // return (
    //   <MaterialTable
    //     title="Multiple Actions Preview"
    //     columns={[
    //       { title: 'Name', field: 'name' },
    //       { title: 'Surname', field: 'surname' },
    //       { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    //       {
    //         title: 'Birth Place',
    //         field: 'birthCity',
    //         lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    //       },
    //     ]}
    //     data={[
    //       { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    //       { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    //     ]}        
    //     actions={[
    //       {
    //         icon: 'save',
    //         tooltip: 'Save User',
    //         onClick: (event, rowData) => alert("You saved " + rowData.name)
    //       },
    //       {
    //         icon: 'delete',
    //         tooltip: 'Delete User',
    //         onClick: (event, rowData) => confirm("You want to delete " + rowData.name)
    //       }
    //     ]}
    //   />
    // )
//   const columns = [
//   {
//     Header: 'Name',
//     accessor: 'name',
//     headerStyle: { whiteSpace: 'unset' },
//     style: { whiteSpace: 'unset' },
//   },
//   {
//     Header: 'Username',
//     accessor: 'username',
//     headerStyle: { whiteSpace: 'unset' },
//     style: { whiteSpace: 'unset' },
//   },
//   {
//     Header: 'Password',
//     accessor: 'password',
//     headerStyle: { whiteSpace: 'unset' },
//     style: { whiteSpace: 'unset' },
//   },
//   {

//     Header: 'Email',
//     accessor: 'email',
//     headerStyle: { whiteSpace: 'unset' },
//     style: { whiteSpace: 'unset' },
//     maxWidth: 150,
//   },
// ];
const UserCard = ({
  key,
  name,
  username,
  password,
  email,
}) => {
    // return(
    //   // <ReactTable
    //   //   columns = {columns}
    //   //   data = {{name,username,password,email}}
    //   //   >
    //   // </ReactTable>
     
    //   <table className="table table-bordered table-responsive">
    //     <thread>
    //       <tr style={{ float: "center" }}>
    //         <th>Name</th>
    //         <th>UserName</th>
    //         <th>Password</th>
    //         <th>Email</th>
    //       </tr>
    //     </thread>
    //     <tbody>
    //       <tr>
            
    //         <td>{name}</td>
    //         <td>{username}</td>
    //         <td>{password}</td>
    //         <td>{email}</td>
    //       </tr>
    //     </tbody>
    //   </table>
    // )
    // return(
    //   <MaterialTable
    //     title="User Profile Data"
    //     columns={[
    //       { title: 'Name', field: {name} },
    //       { title: 'Username', field: {username} },
    //       { title: 'Password', field: {password} },
    //       { title: 'Email', field: {email} }
    //     ]}
    //     actions={[
    //       {
    //         icon: 'save',
    //         tooltip: 'Save User',
    //         onClick: (event, rowData) => alert("You saved " + rowData.name)
    //       },
    //       {
    //         icon: 'delete',
    //         tooltip: 'Delete User',
    //         //onClick: (event, rowData) => confirm("You want to delete " + rowData.name)
    //       }
    //     ]}
    //   />
    // )
  return (
    <div className="measure" style={{ float: "center" }}>
      <a className="db center mw5 black link dim" href="#">
        <dl className="mt2 f6 lh-copy">
          {/* <dt className="clip">Name</dt> */}
          <dt className="ml0 fw9">{name}</dt>
          <dt className="clip">UserName</dt>
          <dd className="ml0 fw9">{username}</dd>
          <dt className="clip">Password</dt>
          <dd className="m10 fw9">{password}</dd>
          <dt className="clip">Email</dt>y
          <dd className="ml0 gray">{email}</dd>
        </dl>
      </a>
    </div>
  );
};

export default UserCard;
