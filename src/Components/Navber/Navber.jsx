import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from '../../assets/images/Genius Work Place logo.png';
const Navber = () => {
    const { user, logout } = useContext(AuthContext);
    // console.log(user.photoURl);
    const navlinks = <>
        <Link to={'/'}>Home</Link>
        <Link to={'/all-jobs'}>All Jobs</Link>
        <Link to={'/add-job'}>Add Jobs</Link>
        <Link to={'/blog'}>Blog</Link>
        <Link to={'/about'}>About Us</Link>
        <Link to={'/contact'}>Contact Us</Link>
    </>
    const userLinks = <>
        <li>            
            <Link to={'/my-jobs'}>My Jobs</Link>
            <Link to={'/my-applied-jobs'}>My Applied Jobs</Link>
            <Link to={'/profile'}>Profile</Link>
        </li>
    </>

    const handleLogout = () =>{
        logout()
        .then(()=>{
            toast.success('Your account logout successfully')
        })
        .catch((error)=>{
            toast.error(`${error.message}`)
        })
    }

    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto bg-transparent z-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </div>
                </div>
                <Link to={'/'}> <img width={200} src={logo} alt="" /> </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="menu menu-horizontal flex gap-5">
                    {navlinks}
                </div>
            </div>
            <div className="navbar-end">
                {
                    user ?                    
                    <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div title={user?.displayName} className="w-10 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[20] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    {
                        userLinks
                    }
                    <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
            </div> : 
                    
                    <Link to={'/login'}> <button className="btn">Login</button> </Link>
                }
            </div>

            
        </div>
    );
};

export default Navber;