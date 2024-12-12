import Lottie from "lottie-react";
import registerAnimation from '../../assets/lottie/registerAnimation.json'
import { useContext } from "react";
import AuthContext from "../provider/Provider";

const Register = () => {
    const {handleCreateUser} =useContext(AuthContext)
    const handleRegister = (e)=>{
        e.preventDefault();
        const form =e.target;
        const fullName = form.fullName.value;
        const userName =form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const rePassword = form.rePassword.value;
        // pasword validation
        // password validation error

        // singnup firebase
        handleCreateUser(email,password)
        .then(res => console.log(res.user))
        .catch(err => console.log(err))


        console.log({fullName,userName, email,password,rePassword})
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={registerAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="input input-bordered"
                                required
                                name="fullName"
                            />
                        </div>

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
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Username"
                                className="input input-bordered"
                                required
                                name="username"
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

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Re-Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Re-enter password"
                                className="input input-bordered"
                                required
                                name="rePassword"
                            />
                        </div>

                        <div className="form-control mt-2">
                            <label className="label cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-primary" name="terms" />
                                <span className="label-text">Agree our terms and policy</span>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit & Register</button>
                        </div>

                        <div className="text-center mt-2">
                            <span className="text-sm">Already have an account?</span>
                            <a href="#" className="link link-hover text-sm">Sign In</a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Register;