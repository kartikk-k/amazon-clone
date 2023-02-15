import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AmazonLogo } from '../assets/logo2.svg'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'


function Login() {
    let navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const signIn = async (e) => {
        e.preventDefault()
        console.log("logging in: ")

        // auth.(email, password)
        let response = await signInWithEmailAndPassword(auth, email, password)
        if (response.user.auth) {
            navigate("/")
        }

        console.log("response: ", response.user)

    }

    return (
        <div>
            <div className='flex items-center justify-center h-screen'>
                <div className='p-4 space-y-6 max-w-[400px] '>
                    <div className='flex justify-center'>
                        <Link to="/">
                            <AmazonLogo className='h-8' />
                        </Link>
                    </div>
                    <div className='p-4 space-y-4 bg-gray-100 border rounded-md shadow-md border-dark-1'>
                        <h1 className='text-2xl font-semibold'>Sign In</h1>
                        <div className='space-y-1'>
                            <p className='text-sm font-medium'>Email Id</p>
                            <input type="text" value={email} className="w-full px-2 py-1 border border-gray-300 rounded-md focus:border-dark-1 focus:outline-none" onChange={(e) => setEmail(e.target.value)} />

                            <p className='text-sm font-medium'>Password</p>
                            <input type="password" value={password} className="w-full px-2 py-1 border border-gray-300 rounded-md focus:border-dark-1 focus:outline-none" onChange={(e) => setPassword(e.target.value)} /><br />

                            <div className='flex justify-center'>
                                <button onClick={signIn} className='w-full p-2 mt-2 bg-yellow-400 rounded-md'>Sign in</button>
                            </div>

                            <p className='text-xs'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                        </div>
                    </div>

                    {/*  */}
                    <div className='flex items-center'>
                        <div className='w-full flex-1 h-[2px] bg-gray-400'></div>
                        <p className='flex px-1 text-xs'>New to Amazon?</p>
                        <div className='w-full flex-1 h-[2px] bg-gray-400'></div>
                    </div>

                    <Link to="/register">
                        <button className='w-full p-2 mt-2 bg-gray-300 rounded-md'>Create Account</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login