import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
  { name: 'Jan', value: 38 },
  { name: 'Feb', value: 94 },
  { name: 'Mar', value: 52 },
  { name: 'Apr', value: 88 },
  { name: 'May', value: 65 },
  { name: 'Jun', value: 68 },
  { name: 'July', value: 88 },
  { name: 'Aug', value: 28 },
  { name: 'Sep', value: 68 },
  { name: 'Oct', value: 42 },
  { name: 'Nov', value: 98 },
  { name: 'Dec', value: 92 },
];

const UserOverviewChart = () => {
  return (
    <div className="w-full bg-[#EFE6FD1A] p-6  rounded-2xl border border-purple-300 shadow-sm">
      {/* Chart Container */}
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              {/* This creates the purple gradient fill seen in your image */}
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.01}/>
              </linearGradient>
            </defs>
            
            {/* Dotted Grid Lines */}
            <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#e5e7eb" />
            
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }} 
              dy={10}
            />
            
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }} 
            />
            
            <Tooltip 
              contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />

            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#7c3aed" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorValue)" 
              dot={{ r: 4, fill: '#6d28d9', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-6">
        <h2 className="text-xl font-bold text-purple-700">User Overview</h2>
        <div className="flex items-center gap-2 px-4 py-1 border border-purple-300 rounded-lg text-purple-600 bg-purple-50">
          <span className="text-sm font-medium">2025</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
};

export default UserOverviewChart;