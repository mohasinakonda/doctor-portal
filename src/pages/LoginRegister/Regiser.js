import React from 'react';
import auth from '../../firebase.init'
// import {useSignWithGoogle} from 'react-firebase-hooks'
const Login = () => {
    const signWithGoogle = () => {
        // const [signWithGoogle]=SignWithGoogle(auth)
    }

    return (
        <div>

            <h3 className='text-2xl text-center py-5 text-secondary font-bold'>Please Register </h3>

            <div className='w-[50%] mx-auto m-5'  >
                <div className='card bg-base-100 shadow-xl '>

                    <form className=' grid grid-cols-1 gap-3 mx-auto  w-[100%] px-5'>
                        <label htmlFor="email"> Email</label>
                        <input name='email' type="email" placeholder="Enter your Email" class="input  input-bordered input-primary  " />
                        <label htmlFor="password"> Email</label>

                        <input type="password" name='password' placeholder="password" class="input  input-bordered input-primary w-[100%]  " />
                        <input type="submit" value='submit' className='btn btn-secondary' />
                    </form>
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