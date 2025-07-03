import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import GoogleLoginComp from '../../components/GoogleLogin/googleLoginComp'
import { ToastContainer,toast } from 'react-toastify'
import axios from 'axios'

const SignUp = (props) => {
    const navigate = useNavigate()

    const [registerField,setRegisterField] = useState({email:"",password:"",f_name:""});

    const handleInputField = (event,key)=>{
        setRegisterField({...registerField,[key]:event.target.value})
    }

    const handleRegister = async()=>{
        if(registerField.email.trim().length===0 || registerField.password.trim().length===0 || registerField.f_name.trim().length===0) {
            return toast.error("Please Fill All Details.")
        }

        await axios.post('http://localhost:4000/api/auth/register',registerField,).then(res=>{

            toast.success("You have registered successfully");
            setRegisterField({...registerField,email:"",password:"",f_name:""})
            navigate('/login')
        }).catch(err=>{
            console.log(err)
            toast.error(err?.response?.data?.error)
        })
    }
    
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='text-4xl mb-5'>Make the most of your professional life</div>
            <div className='w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10'>

                <div className='flex flex-col gap-4'>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input value={registerField.email} onChange={(e)=>handleInputField(e,'email')} type='text' className='w-full text-xl border-2 rounded-lg px-5 py-2' placeholder='Email ' />
                    </div>

                    <div>
                        <label htmlFor='password'>Password</label>
                        <input value={registerField.password} onChange={(e)=>handleInputField(e,'password')} type='password' className='w-full text-xl border-2 rounded-lg px-5 py-2' placeholder='Password ' />
                    </div>

                    <div>
                        <label htmlFor='f_name'>Full Name</label>
                        <input value={registerField.f_name} onChange={(e)=>handleInputField(e,'f_name')} type='text' className='w-full text-xl border-2 rounded-lg px-5 py-2' placeholder='Full Name ' />
                    </div>

                    <div onClick={handleRegister} className='w-full hover:bg-[#9B7EBD] bg-[#7F55B1] text-white py-3 px-4 rounded-xl text-center cursor-pointer my-2'>
                        Register
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <div className='border-b-1 border-gray-400 w-[45%]'/> <div>or</div><div className='border-b-1 border-gray-400 w-[45%] my-6' />
                </div>

                <GoogleLogin changeLoginValue={changeLoginValue}/>

            </div>

            <div className='mt-8 mb-10'>Already on WorkSphere? <Link to={'/login'} className='text-blue-800 cursor-pointer hover:underline'>Sign in</Link></div>
            <ToastContainer />
        </div>
    )
}

export default SignUp