import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvide";


const Login = () => {
const {createUser}=useContext(AuthContext)
const handleClick=e=>{
    e.preventDefault()
    const form=e.target
    const email=form.email.value
    const password=form.password.value 
    //const user={email,password}

createUser(email,password)
.then(result=>{
    console.log(result.user)
    const user={email,password}
    fetch('http://localhost:5000/users',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(user)
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    form.reset()
})
})
.catch(error=>{
    console.error(error)
})






}

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl text-blue-600 font-bold">facebook</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleClick} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;