


import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router';
import TopNavbar from '../components/TopNavbar';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = () => {
        console.log("Logged out");
    };

    return (

        <div className='flex h-screen bg-gray-50 overflow-hidden w-full'>

            <aside className='hidden lg:block  h-full'>
                <Sidebar 
                    onLogout={handleLogout} 
                    isOpen={isSidebarOpen} 
                    setIsOpen={setIsSidebarOpen} 
                />
            </aside>


            <div className="flex flex-col flex-1 h-full overflow-hidden">


                <header className='flex-shrink-0'>
                    <TopNavbar 
                        onMenuClick={() => setIsSidebarOpen(true)} 
                    />
                </header>

                <main className="flex-1 overflow-y-auto  md:pt-0">
                    <Outlet />
                </main>

            </div>


            <div className={`lg:hidden fixed inset-0 z-50 ${isSidebarOpen ? 'block' : 'hidden'}`}>
                 <Sidebar 
                    onLogout={handleLogout} 
                    isOpen={isSidebarOpen} 
                    setIsOpen={setIsSidebarOpen} 
                />
            </div>
        </div>
    );
}

export default DashboardLayout;