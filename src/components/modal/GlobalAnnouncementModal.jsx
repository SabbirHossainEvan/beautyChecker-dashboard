

// import React from 'react';
// import { X, Send, Megaphone } from 'lucide-react';

// const GlobalAnnouncementModal = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
//       <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8 relative animate-in fade-in zoom-in duration-200">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-bold text-purple-700 flex items-center gap-2">
//             <Megaphone /> Global Announcement
//           </h2>
//           <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors">
//             <X size={28} />
//           </button>
//         </div>
//         <textarea 
//           placeholder="Write your message to all users..."
//           className="w-full p-4 border-2 border-purple-100 rounded-2xl min-h-[150px] focus:border-purple-500 outline-none mb-4 font-nunito"
//         ></textarea>
//         <button 
//           onClick={() => { alert("Sent to everyone!"); onClose(); }}
//           className="w-full py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all shadow-md flex justify-center gap-2 items-center"
//         >
//           <Send size={20} /> Send Announcement
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GlobalAnnouncementModal;


import React from 'react';
import { X, Send, Megaphone } from 'lucide-react';

const GlobalAnnouncementModal = ({ onClose }) => (
  <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
    <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8 relative">
      <div className="flex justify-between items-center mb-6 text-purple-700">
        <h2 className="text-xl font-bold flex items-center gap-2"><Megaphone /> Global Announcement</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-red-500"><X size={28} /></button>
      </div>
      <textarea placeholder="Message to everyone..." className="w-full p-4 border-2 border-purple-100 rounded-2xl min-h-[150px] focus:border-purple-500 outline-none mb-4"></textarea>
      <button onClick={() => { alert("Broadcast Sent!"); onClose(); }} className="w-full py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all flex justify-center gap-2 items-center">
        <Send size={20} /> Send Announcement
      </button>
    </div>
  </div>
);

export default GlobalAnnouncementModal;