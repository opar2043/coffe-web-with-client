import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";

const Users = () => {
  const loadedUser = useLoaderData()
  const [users, setUsers] = useState(loadedUser);
  // console.log(users);

  function handleDelete(id){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/users/${id}`,{
          method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount){
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
           const remainUser = users.filter(user => user._id !== id);
          setUsers(remainUser)
          }
        })
      }
    });
  }
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Created AT</th>
        <th>lastLoginTime</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     

     {
      users.map(user =>   <tr key={user._id}>
        <th>1</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user?.createId}</td>
        <td>{user?.lastLoginTime}</td>
        <td>
          <button className="btn mr-2">Edit</button>
          <button className="btn btn-outline" onClick={()=>handleDelete(user._id)}>X</button>
        </td>
      </tr>)
     }
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Users