import { GoogleLogin } from '@react-oauth/google'
import React,{ useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import axios from 'axios'
import GoogleLoginComp from '../../components/GoogleLogin/googleLoginComp'
 
const Login = (props) => {
  const navigate = useNavigate();
  const [LoginField, setLoginField] = useState({ email: "", password: "" })

  const onChangeInput = (event,key)=>{
    setLoginField({...LoginField,[key]:event.target.value})
  }

  const handleLogin = async()=>{
      if (LoginField.email.trim().length === 0 || LoginField.password.trim().length === 0){
      return toast.error("Please fill all credentials")
    }
    await axios.post('http://localhost:4000/api/auth/login',LoginField,{withCredentials:true}).then((res)=>{
      props.changeLoginValue(true);
      localStorage.setItem('isLogin', 'true');
      localStorage.setItem("userInfo", JSON.stringify(res.data.userExist));
      navigate('/feeds')
    }).catch(err=>{
      console.log(err)
      toast.error(err?.response?.data?.error)
    })
  }
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10'>
        <div className='text-3xl'>Sign In</div>
        <div className='my-5'>
          <GoogleLoginComp changeLoginValue={props.changeLoginValue}/>
        </div>

        <div className='flex items-center gap-2'>
          <div className='border-b-1 border-gray-400 w-[45%]' /> <div>or</div><div className='border-b-1 border-gray-400 w-[45%] my-6' />
        </div>

        <div className='flex flex-col gap-4'>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' value={LoginField.email} onChange={(e)=>{onChangeInput(e,'email')}} className='w-full text-xl border-2 rounded-lg px-5 py-2' placeholder='Email ' />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' value={LoginField.password} onChange={(e)=>{onChangeInput(e,'password')}} className='w-full text-xl border-2 rounded-lg px-5 py-2' placeholder='Password ' />
          </div>

          <div onClick={handleLogin} className='w-full hover:bg-[#9B7EBD] bg-[#7F55B1] text-white py-3 px-4 rounded-xl text-center cursor-pointer my-2'>
            Login
          </div>
        </div>

      </div>
      <div className='mt-8 mb-14'>New to WorkSphere? <Link to={'/signUp'} className='text-blue-800 hover:underline'>Join Now</Link></div>
      <ToastContainer />
    </div>
  )
}

export default Login