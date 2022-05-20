import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Spinner from '../Shared/Spinner';

const LoginAndREegister = () => {
    const [signInWithGoogle, googleuser, googleloading] = useSignInWithGoogle(auth);
    const signWithGoogle = () => {
        signInWithGoogle()
    }
    const location = useLocation()
    const navigate = useNavigate()
    const [token] = useToken(googleuser)
    console.log(token)
    let from = location.state?.from?.pathname || "/";
    if (googleuser) {
        navigate(from, { replace: true });
    }
    if (googleloading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <div className='text-center'>


                <Link className='font-bold text-xl text-secondary p-3  ' to='/login'>Login</Link>
                or

                <Link className='font-bold text-xl text-secondary p-3' to='/login/register'>Register</Link>

            </div>
            <Outlet></Outlet>
            <div className='p-5  w-[50%] mx-auto shadow-lg'>

                <button onClick={signWithGoogle} className='btn btn-secondary w-[100%] '>sign In with google</button>
            </div>

        </div>
    );
};

export default LoginAndREegister;