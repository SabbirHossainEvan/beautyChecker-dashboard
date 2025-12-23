import React from 'react';
import DashboardOverview from '../components/DashboardOverview';
import UserOverviewChart from '../components/UserOverviewChart';
import UserTable from '../components/UserTable';

const DashboardPage = () => {
    return (
        <div className='md:mr-10'>
            <DashboardOverview />
            <div className='md:flex gap-2 mt-10'>
                <UserOverviewChart />
                <UserTable />
            </div>
        </div>
    );
}

export default DashboardPage;
