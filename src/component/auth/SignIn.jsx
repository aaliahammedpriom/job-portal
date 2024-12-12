import Lottie from 'lottie-react';
import signInAnimation from '../../assets/lottie/signInAnimation.json'
import { useContext } from 'react';
import AuthContext from '../provider/Provider';

const SignIn = () => {
    const {handleSignINUser}= useContext(AuthContext)
    const handleSignIn = (e)=>{
        e.preventDefault();
        const form =e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password})
        // pasword validation
        // password validation error
        handleSignINUser(email,password)
        .then(res =>console.log(res))
        .catch(err => console.log(err))
        

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={signInAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                        

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                                name="email"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                                name="password"
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>

                        <div className="text-center mt-2">
                            <span className="text-sm">Don,t have an account?</span>
                            <a href="/register" className="link link-hover text-sm">register</a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SignIn;