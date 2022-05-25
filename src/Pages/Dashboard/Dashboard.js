import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="db-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h2 className='text-3xl font-bold text-secondary'>Welcome! to your Dashboard</h2>
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="db-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={"/dashboard"}>My Appointments</Link></li>
                        <li><Link to={"/dashboard/review"}>Add A Review</Link></li>
                        <li><Link to={"/dashboard/profile"}>My Profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;