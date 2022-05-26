import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className='flex flex-col lg:h-screen justify-between'>
            <div class="drawer drawer-mobile font-bold">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-blue-100 text-primary">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        {
                            !admin && <>
                                <li><Link to='/dashboard/orders'>My Orders</Link></li>
                                <li><Link to='/dashboard/review'>Add A Review</Link></li>
                            </>
                        }
                        {admin && <>
                            <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                            <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                            <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                            <li><Link to='/dashboard/manageOrders'>Manage Orders</Link></li>
                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;