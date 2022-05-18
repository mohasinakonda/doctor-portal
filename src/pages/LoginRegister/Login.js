import React from 'react';
import auth from '../../firebase.init'
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import Spinner from '../Shared/Spinner';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const [signInWithGoogle, gooleUser, googleLoading,] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (loading || googleLoading) {
        return <Spinner />
    }
    if (user || gooleUser) {
        navigate('/')
    }

    const signWithGoogle = () => {
        signInWithGoogle()
    }
    const signInPassword = (event) => {

        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div>

            <h3 className='text-2xl text-center py-5 text-secondary font-bold'>Please Register</h3>

            <div className='w-[50%] mx-auto m-5'  >
                <div className='card bg-base-100 shadow-xl '>

                    <form onClick={signInPassword} className=' grid grid-cols-1 gap-3 mx-auto  w-[100%] px-5'>
                        <label htmlFor="name"> Name</label>
                        <input name='name' type="text" placeholder="Enter your name" class="input  input-bordered input-primary  " />
                        <label htmlFor="email"> Email</label>
                        <input name='email' type="email" placeholder="Enter your Email" class="input  input-bordered input-primary  " />

                        <label htmlFor="password"> Password</label>

                        <input type="password" name='password' placeholder="password" class="input  input-bordered input-primary w-[100%]  " />
                        <input type="submit" value='submit' className='btn btn-secondary' />
                    </form>
                    <p className='p-5'>Need have an account? <Link to='/register' className='text-primary' >create Account</Link></p>
                    <div class="divider">OR</div>
                    <div className='p-5'>

                        <button onClick={signWithGoogle} className='btn btn-secondary w-[100%] '>sign In with google</button>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Login;