import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { BiUserCircle } from 'react-icons/bi';
import { IoMdLogOut } from 'react-icons/io';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)

    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/portfolio'>My Portfolio</Link></li>
        <li><Link to='/about'>About</Link></li>
    </>
    const logout = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken')
    };
    return (
        <div class="navbar bg-base-100 lg:px-10">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl">Bits n Bytes</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div class="navbar-end">
                {
                    user ? <>
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost">
                                <p className='text-2xl text-center'><BiUserCircle /></p>
                                <p>{user?.displayName}</p>

                            </label>
                            <ul tabindex="0" class="p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li><button onClick={logout} class="btn btn-xs btn-ghost pb-2">Logout<IoMdLogOut /></button></li>
                            </ul>
                        </div>
                    </>
                        : <ul class="menu menu-horizontal p-0">
                            <li><Link to='/login'>Login</Link></li>
                        </ul>

                }
                {/* <ul class="menu menu-horizontal p-0">
                    {
                        user && <>
                            <li><p class="btn btn-ghost"><span className='text-xl'><BiUserCircle /></span>{user?.displayName}</p></li>
                            <li><button class="btn btn-ghost">Logout</button></li>
                        </>
                    }
                </ul> */}
            </div>
        </div>
    );
};

export default Header;