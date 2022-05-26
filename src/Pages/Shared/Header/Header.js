import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { BiUserCircle } from 'react-icons/bi';
import { IoMdLogOut } from 'react-icons/io';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/portfolio'>My Portfolio</Link></li>
        <li><Link to='/about'>About</Link></li>
    </>
    const logout = () => {
        signOut(auth);
        navigate('/login')
        localStorage.removeItem('accessToken')
    };
    return (
        <div className="navbar bg-accent text-primary font-bold lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Bits n Bytes</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="dropdown dropdown-end">
                            {
                                user && <label tabIndex="0" className="btn btn-ghost">
                                    <p className='text-2xl text-center'><BiUserCircle /></p>
                                    <p>{user.displayName}</p>

                                </label>
                            }
                            <ul tabIndex="0" className="p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li><button onClick={logout} className="btn btn-xs btn-ghost pb-2">Logout<IoMdLogOut /></button></li>
                            </ul>
                        </div>
                    </>
                        : <ul className="menu menu-horizontal p-0">
                            <li><Link to='/login'>Login</Link></li>
                        </ul>

                }
                {/* <ul className="menu menu-horizontal p-0">
                    {
                        user && <>
                            <li><p className="btn btn-ghost"><span className='text-xl'><BiUserCircle /></span>{user?.displayName}</p></li>
                            <li><button className="btn btn-ghost">Logout</button></li>
                        </>
                    }
                </ul> */}

                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Header;