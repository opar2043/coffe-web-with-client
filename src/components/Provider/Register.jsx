import React, { useContext } from 'react'
import  { AuthContex } from './AuthProvider'
import { Link } from 'react-router-dom';

const Register = () => {
    const { user, register,handleUserPass} = useContext(AuthContex); 

    function handleRegister(e){
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        const name = e.target.name.value;
        //  console.log('object');
        handleUserPass(email,pass)
        .then(res => {
            const createId = res.user.metadata?.creationTime;

            const newUser = {name , email, createId}

            // user collection post
            fetch('http://localhost:5000/users',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
                
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data, "user DB here");
            })
        })
        .catch(err => {
            console.log(err.message);
        })
        console.log(email ,pass,name);
        e.target.reset()
    }


  return (
    <div className="card bg-base-100 w-full mx-auto my-11 border max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleRegister}>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='pass' className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      <div><h2 className='text-green-500 text-center'><Link to={'/login'}>Al-Ready Have an Account? LOGIN</Link></h2></div>
      </form>
    </div>
  )
}

export default Register