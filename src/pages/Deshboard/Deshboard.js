import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Deshboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="open-side-nav" type="checkbox" class="drawer-toggle" />

            {/* <!-- Page content here --> */}
            <Outlet></Outlet>
            <div class="drawer-side">
                <label for="open-side-nav" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {/* <Link index >your appointment</Link> */}
                    <Link to='/'>your appointment</Link>

                </ul>

            </div>
        </div>
    );
};

export default Deshboard;