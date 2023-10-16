import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {

const users=useLoaderData()
console.log(users)
const [remains,setUser]=useState(users)
const handleDelete=id=>{

fetch(`http://localhost:5000/users/${id}`,{
    method:'DELETE'
})
.then(res=>res.json())
.then(data=>{

if(data.deletedCount >0){
      const remaining=remains.filter(remain=>remain._id!==id)
      setUser(remaining)
}


    
})



    console.log(id)
}



    return (
        <div>
            <h1 className="text-5xl  text-center">We Are hackers😂</h1>
          <div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Job</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user=><>
        
        <tr>
        <th>{user._id}</th>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td><button onClick={()=>handleDelete(user._id)} className=" btn btn-secondary">X</button></td>
      </tr>
        </>)
      }
   
    </tbody>
  </table>
</div>
          </div>
        </div>
    );
};

export default Users;