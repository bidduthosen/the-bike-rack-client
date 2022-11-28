import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ReportAdminCard from './ReportAdminCard';

const ReportAdmin = () => {
    const {data: reportProducts} = useQuery({
        queryKey: ['reportProducts'],
        queryFn: async()=> {
            const res = await fetch('https://the-bike-rack-server.vercel.app/reportProducts')
            const data = await res.json()
            return data
        }
    });
    return (
        <div>
            <h2 className="text-3xl font-semibold border-b-4 border-red-500 my-5 p-4 md:w-6/12 text-center mx-auto mb-9 text-red-500">Report a Products List</h2>
            <div className='mx-5'>
                {
                    reportProducts &&
                    reportProducts.map(reportProduct => <ReportAdminCard
                        key={reportProduct._id}
                        reportProduct={reportProduct}
                    ></ReportAdminCard>)
                }
            </div>
        </div>
    );
};

export default ReportAdmin;