import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import bglogin from "../../assets/images/login.jpg";

const Login = () => {
    const { loginUser, auth } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider;
    const githubProvider = new GithubAuthProvider;
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("input data", email, password);
        loginUser(email, password)
            .then(result => {
                if (result.user) {
                    toast.success("Your account login successfuly")
                    navigate(location?.state ? location.state : "/")
                }
            })
            .catch(error => {
                error.message
                console.log(error.message);
                if (error.message) {
                    toast.error("Please check your email or password.")
                }
            })

    }

    // Login With Google
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                if (result.user) {
                    toast.success("Your account login successfuly")
                    navigate(location?.state ? location.state : "/")
                }
            })
            .catch(error => {
                if (error.message) {
                    toast.error("Please check your email or password.")
                }
            })
    }

    // // Login with Github
    const handleGitHubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                if (result.user) {
                    toast.success("Your account login successfuly")
                    navigate(location?.state ? location.state : "/")
                }
            })
            .catch(error => {
                if (error.message) {
                    toast.error("Please check your email or password.")
                }
            })
    }


    return (
        <div className='w-full'>
            <img className='w-full h-full object-cover absolute' src={bglogin} alt="" />
            <div className='relative md:w-1/2 md:mx-auto mx-4 py-32'>
                <div className='border bg-[#1b30445b] text-white rounded md:py-10'>
                    <h2 className="text-3xl font-bold py-5 text-center">Please Login your account</h2>
                    <p className="font-medium mb-5 text-center">Let's get started!</p>
                    <div className="p-5">
                        <form onSubmit={handleLogin} className="flex flex-col w-full px-4 mx-auto">

                            <label className="text-lg font-medium py-2">Email</label>
                            <input className="bg-[#1B3044] rounded text-xl py-2 pl-4 text-white placeholder:text-white focus:outline-none  focus:ring-0" type="email" placeholder="Enter your valid email" name="email" required />

                            <label className="text-lg font-medium py-2">Password</label>
                            <div className="relative">
                                <input className="bg-[#1B3044] w-full rounded text-xl py-2 pl-4 placeholder:text-white text-white focus:outline-none focus:ring-0" type={showPassword ? "text" : "password"} name="password" placeholder="Enter strong plassword" required />
                                <span onClick={() => setShowPassword(!showPassword)} className="text-white absolute top-[30%] right-4">
                                    {showPassword ? <IoEyeOff /> : <IoEye />
                                    }  </span>
                            </div>
                            <input className="bg-[#7D2AE8] rounded py-2 my-5 text-white font-medium text-xl hover:cursor-pointer" type="submit" value="Login" />
                            
                        </form>

                        <div className="flex flex-col lg:w-[90%] md:w-1/2 w-[90%] mx-auto">
                            <div className="divider">OR</div>
                            <Link><button onClick={handleGoogleLogin} className="bg-[#fff] rounded-full py-2 my-2 text-black border border-[#7D2AE8] font-medium text-xl w-full hover:bg-[#7D2AE8] hover:text-white ">Continue with Google</button>
                            </Link>
                            <Link><button onClick={handleGitHubLogin} className="bg-[#1B3044] rounded-full py-2 my-2 text-white font-medium text-xl w-full hover:bg-[#7D2AE8]">Continue with GitHub</button>
                            </Link>
                            <p className="text-center mt-3">Don't have an account? <Link className="font-bold" to={'/register'}>Register</Link></p>
                        </div>

                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;