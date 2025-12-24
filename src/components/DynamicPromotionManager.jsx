// // import React, { useState, useRef } from 'react';
// // import { X, Plus, Video as VideoIcon } from 'lucide-react';

// // const DynamicPromotionManager = () => {
// //   // Main Promotions State (Video storage)
// //   const [promotions, setPromotions] = useState([
// //     { id: 1, title: 'Summer Sale', videoUrl: '' }, // Initial empty values
// //   ]);

// //   // UI States
// //   const [modalType, setModalType] = useState(null); // 'add', 'edit', 'details'
// //   const [selectedPromo, setSelectedPromo] = useState(null);
  
// //   // Form States
// //   const [tempTitle, setTempTitle] = useState('');
// //   const [tempVideo, setTempVideo] = useState(null); // Video Blob URL for preview
// //   const fileInputRef = useRef(null);

// //   // Modal Open Function
// //   const openModal = (type, promo = null) => {
// //     setModalType(type);
// //     if (promo) {
// //       setSelectedPromo(promo);
// //       setTempTitle(promo.title);
// //       setTempVideo(promo.videoUrl);
// //     } else {
// //       setSelectedPromo(null);
// //       setTempTitle('');
// //       setTempVideo(null);
// //     }
// //   };

// //   // Video Upload Handler
// //   const handleVideoChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       // Video size check (Optional: 10MB limit example)
// //       if (file.size > 10 * 1024 * 1024) {
// //         alert("Video size should be less than 10MB");
// //         return;
// //       }
// //       const videoUrl = URL.createObjectURL(file);
// //       setTempVideo(videoUrl);
// //     }
// //   };

// //   // Save or Add Logic
// //   const handleSave = () => {
// //     if (!tempTitle || !tempVideo) return alert("Please add a title and select a video!");

// //     if (modalType === 'add') {
// //       const newPromo = {
// //         id: Date.now(),
// //         title: tempTitle,
// //         videoUrl: tempVideo
// //       };
// //       setServices([...promotions, newPromo]);
// //       setPromotions(prev => [...prev, newPromo]);
// //     } else if (modalType === 'edit') {
// //       setPromotions(promotions.map(p => 
// //         p.id === selectedPromo.id ? { ...p, title: tempTitle, videoUrl: tempVideo } : p
// //       ));
// //     }
// //     closeModal();
// //   };

// //   const handleDelete = (id) => {
// //     setPromotions(promotions.filter(p => p.id !== id));
// //     closeModal();
// //   };

// //   const closeModal = () => {
// //     setModalType(null);
// //     setTempTitle('');
// //     setTempVideo(null);
// //   };

// //   return (
// //     <div className="p-8 bg-gray-50 min-h-screen">
// //       {/* 1. Promotion List Rendering */}
// //       <h2 className="text-xl font-bold mb-6 text-gray-800">Video Promotions</h2>
// //       <div className="flex flex-wrap gap-6">
// //         {promotions.map((promo) => (promo.videoUrl || promo.title) && (
// //           <div 
// //             key={promo.id} 
// //             className="flex flex-col items-center group cursor-pointer"
// //             onClick={() => openModal('details', promo)}
// //           >
// //             <div className="w-24 h-24 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center overflow-hidden group-hover:border-[#6200EE] transition-all">
// //                {promo.videoUrl ? (
// //                  <video src={promo.videoUrl} className="w-full h-full object-cover" />
// //                ) : (
// //                  <VideoIcon className="text-gray-300" />
// //                )}
// //             </div>
// //             <span className="text-xs mt-2 text-gray-700 font-semibold">{promo.title}</span>
// //           </div>
// //         ))}
        
// //         {/* Add Button */}
// //         <button 
// //           onClick={() => openModal('add')}
// //           className="w-24 h-24 bg-white rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-[#6200EE] hover:bg-purple-50 transition-all"
// //         >
// //           <Plus className="text-gray-400" />
// //         </button>
// //       </div>

// //       {/* 2. Dynamic Modal */}
// //       {modalType && (
// //         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
// //           <div className="bg-white rounded-[40px] shadow-2xl w-full max-w-md animate-in fade-in zoom-in duration-200">
            
// //             {/* Modal Header */}
// //             <div className="relative p-6 border-b border-gray-50 flex justify-center">
// //               <div className="border border-gray-300 rounded-full px-8 py-2">
// //                 <h2 className="text-lg font-medium text-gray-800 uppercase tracking-tight">
// //                   {modalType === 'add' && 'Add New Promotion'}
// //                   {modalType === 'edit' && 'Edit Promotion'}
// //                   {modalType === 'details' && 'Promotion Details'}
// //                 </h2>
// //               </div>
// //               <button 
// //                 onClick={closeModal}
// //                 className="absolute right-6 top-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full p-1.5 hover:rotate-90 transition-transform"
// //               >
// //                 <X size={18} />
// //               </button>
// //             </div>

// //             <div className="p-8 space-y-6">
// //               {/* Promotion Title Input */}
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-600 mb-2">Promotion Title</label>
// //                 <input 
// //                   type="text" 
// //                   value={tempTitle}
// //                   onChange={(e) => setTempTitle(e.target.value)}
// //                   disabled={modalType === 'details'}
// //                   className="w-full p-4 border border-purple-200 rounded-2xl focus:ring-2 focus:ring-[#6200EE] focus:outline-none bg-gray-50 disabled:bg-white"
// //                   placeholder="Enter promotion title..."
// //                 />
// //               </div>

// //               {/* Video Upload/Preview Area */}
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-600 mb-2">Promotion Video</label>
// //                 <input 
// //                   type="file" 
// //                   hidden 
// //                   ref={fileInputRef} 
// //                   onChange={handleVideoChange} 
// //                   accept="video/*"
// //                 />
// //                 <div 
// //                   onClick={() => modalType !== 'details' && fileInputRef.current.click()}
// //                   className={`border-2 border-dashed border-purple-200 rounded-[32px] min-h-[200px] flex flex-col items-center justify-center transition-all overflow-hidden ${modalType !== 'details' ? 'cursor-pointer hover:bg-purple-50' : ''}`}
// //                 >
// //                   {tempVideo ? (
// //                      <video 
// //                         src={tempVideo} 
// //                         controls={modalType === 'details'} 
// //                         className="w-full max-h-48 object-cover"
// //                       />
// //                   ) : (
// //                     <div className="text-center p-4">
// //                       <div className="text-purple-400 flex justify-center mb-2"><VideoIcon size={40} /></div>
// //                       <p className="text-[10px] text-gray-400 uppercase tracking-wider leading-relaxed">
// //                         Click To Select Video From PC <br /> (MP4, MKV supported)
// //                       </p>
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>

// //               {/* Action Buttons */}
// //               <div className="flex gap-4 pt-2">
// //                 {modalType === 'details' ? (
// //                   <>
// //                     <button 
// //                       onClick={() => handleDelete(selectedPromo.id)}
// //                       className="flex-1 py-4 border-2 border-red-500 text-red-500 rounded-2xl font-bold hover:bg-red-50 transition-colors"
// //                     >
// //                       Remove
// //                     </button>
// //                     <button 
// //                       onClick={() => setModalType('edit')}
// //                       className="flex-1 py-4 bg-[#6200EE] text-white rounded-2xl font-bold shadow-[0px_4px_0px_0px_rgba(98,0,238,1)] hover:opacity-90 active:translate-y-[2px] active:shadow-none transition-all"
// //                     >
// //                       Edit
// //                     </button>
// //                   </>
// //                 ) : (
// //                   <button 
// //                     onClick={handleSave}
// //                     className="w-full py-4 bg-[#6200EE] text-white rounded-2xl font-bold shadow-[0px_4px_0px_0px_rgba(98,0,238,1)] hover:opacity-90 active:translate-y-[2px] active:shadow-none transition-all"
// //                   >
// //                     {modalType === 'add' ? 'Add Promotion' : 'Save Changes'}
// //                   </button>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default DynamicPromotionManager;



// import React, { useState, useRef } from 'react';
// import { X, Plus, Video as VideoIcon } from 'lucide-react';

// const DynamicPromotionManager = () => {
//   // Main Promotions State
//   const [promotions, setPromotions] = useState([
//     { id: 1, title: 'Welcome Offer', videoUrl: '' },
//   ]);

//   // UI States
//   const [modalType, setModalType] = useState(null); 
//   const [selectedPromo, setSelectedPromo] = useState(null);
  
//   // Form States
//   const [tempTitle, setTempTitle] = useState('');
//   const [tempVideo, setTempVideo] = useState(null);
//   const fileInputRef = useRef(null);

//   const openModal = (type, promo = null) => {
//     setModalType(type);
//     if (promo) {
//       setSelectedPromo(promo);
//       setTempTitle(promo.title);
//       setTempVideo(promo.videoUrl);
//     } else {
//       setSelectedPromo(null);
//       setTempTitle('');
//       setTempVideo(null);
//     }
//   };

//   const handleVideoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // 50MB limit e barie dewa hoyeche jate error na ase
//       if (file.size > 50 * 1024 * 1024) { 
//         alert("Video size is too large! Please select a video under 50MB.");
//         return;
//       }
//       const videoUrl = URL.createObjectURL(file);
//       setTempVideo(videoUrl);
//     }
//   };

//   // Fixed Save Logic
//   const handleSave = () => {
//     if (!tempTitle || !tempVideo) {
//       alert("Please enter a title and upload a video.");
//       return;
//     }

//     if (modalType === 'add') {
//       const newPromo = {
//         id: Date.now(),
//         title: tempTitle,
//         videoUrl: tempVideo
//       };
//       // Fixed: setServices bad diye setPromotions kora hoyeche
//       setPromotions(prev => [...prev, newPromo]);
//     } else if (modalType === 'edit') {
//       setPromotions(prev => prev.map(p => 
//         p.id === selectedPromo.id ? { ...p, title: tempTitle, videoUrl: tempVideo } : p
//       ));
//     }
//     closeModal();
//   };

//   const handleDelete = (id) => {
//     setPromotions(prev => prev.filter(p => p.id !== id));
//     closeModal();
//   };

//   const closeModal = () => {
//     setModalType(null);
//     setTempTitle('');
//     setTempVideo(null);
//   };

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <h2 className="text-xl font-bold mb-6 text-gray-800">Video Promotions</h2>
      
//       {/* List View */}
//       <div className="flex flex-wrap gap-6">
//         {promotions.map((promo) => (
//           <div 
//             key={promo.id} 
//             className="flex flex-col items-center group cursor-pointer"
//             onClick={() => openModal('details', promo)}
//           >
//             <div className="w-24 h-24 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center overflow-hidden group-hover:border-[#6200EE] transition-all">
//                {promo.videoUrl ? (
//                  <video src={promo.videoUrl} className="w-full h-full object-cover" />
//                ) : (
//                  <VideoIcon className="text-gray-300" />
//                )}
//             </div>
//             <span className="text-xs mt-2 text-gray-700 font-semibold">{promo.title}</span>
//           </div>
//         ))}
        
//         <button 
//           onClick={() => openModal('add')}
//           className="w-24 h-24 bg-white rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-[#6200EE] transition-all"
//         >
//           <Plus className="text-gray-400" />
//         </button>
//       </div>

//       {/* Modal */}
//       {modalType && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-[40px] shadow-2xl w-full max-w-md">
            
//             <div className="relative p-6 border-b border-gray-50 flex justify-center">
//               <div className="border border-gray-300 rounded-full px-8 py-2">
//                 <h2 className="text-sm font-bold text-gray-800 uppercase">
//                    {modalType === 'add' ? 'Add New Promotion' : modalType === 'edit' ? 'Edit Promotion' : 'Promotion Details'}
//                 </h2>
//               </div>
//               <button onClick={closeModal} className="absolute right-6 top-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full p-1.5">
//                 <X size={18} />
//               </button>
//             </div>

//             <div className="p-8 space-y-6">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-600 mb-2">Promotion Title</label>
//                 <input 
//                   type="text" 
//                   value={tempTitle}
//                   onChange={(e) => setTempTitle(e.target.value)}
//                   disabled={modalType === 'details'}
//                   className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#6200EE] outline-none"
//                   placeholder="Enter promotion title..."
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-600 mb-2">Promotion Video</label>
//                 <input type="file" hidden ref={fileInputRef} onChange={handleVideoChange} accept="video/*" />
//                 <div 
//                   onClick={() => modalType !== 'details' && fileInputRef.current.click()}
//                   className="border-2 border-dashed border-purple-200 rounded-[32px] min-h-[180px] flex flex-col items-center justify-center overflow-hidden cursor-pointer"
//                 >
//                   {tempVideo ? (
//                      <video src={tempVideo} controls={modalType === 'details'} className="w-full max-h-44 object-cover" />
//                   ) : (
//                     <div className="text-center">
//                       <VideoIcon className="mx-auto text-purple-400 mb-2" size={40} />
//                       <p className="text-[10px] text-gray-400">CLICK TO SELECT VIDEO FROM PC</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="flex gap-4 pt-2">
//                 {modalType === 'details' ? (
//                   <>
//                     <button onClick={() => handleDelete(selectedPromo.id)} className="flex-1 py-4 border-2 border-red-500 text-red-500 rounded-2xl font-bold">Remove</button>
//                     <button onClick={() => setModalType('edit')} className="flex-1 py-4 bg-[#6200EE] text-white rounded-2xl font-bold shadow-[0px_4px_0px_0px_rgba(98,0,238,1)]">Edit</button>
//                   </>
//                 ) : (
//                   <button onClick={handleSave} className="w-full py-4 bg-[#6200EE] text-white rounded-2xl font-bold shadow-[0px_4px_0px_0px_rgba(98,0,238,1)] active:translate-y-[2px] transition-all">
//                     {modalType === 'add' ? 'Add Promotion' : 'Save Changes'}
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DynamicPromotionManager;


import React, { useState, useRef } from 'react';
import { X, Plus, Video as VideoIcon, Calendar, Tag, Briefcase } from 'lucide-react';

const DynamicPromotionManager = () => {
  // Mock Services (Real code-e eta apnar service state theke asbe)
  const availableServices = ["Hair Salons", "Nail Salons", "Makeup Artist", "Skincare", "Waxing"];

  const [promotions, setPromotions] = useState([
    { 
      id: 1, 
      title: 'Winter Special', 
      videoUrl: '', 
      service: 'Hair Salons', 
      type: 'Discount', 
      startDate: '2023-12-01', 
      endDate: '2023-12-31' 
    },
  ]);

  const [modalType, setModalType] = useState(null);
  const [selectedPromo, setSelectedPromo] = useState(null);
  
  // Dynamic Form States
  const [formData, setFormData] = useState({
    title: '',
    videoUrl: null,
    service: '',
    type: 'Discount', // Discount, BOGO, Seasonal
    startDate: '',
    endDate: ''
  });

  const fileInputRef = useRef(null);

  const openModal = (type, promo = null) => {
    setModalType(type);
    if (promo) {
      setSelectedPromo(promo);
      setFormData({...promo});
    } else {
      setSelectedPromo(null);
      setFormData({ title: '', videoUrl: null, service: '', type: 'Discount', startDate: '', endDate: '' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) { 
        alert("Video size is too large (Max 50MB)");
        return;
      }
      setFormData(prev => ({ ...prev, videoUrl: URL.createObjectURL(file) }));
    }
  };

  const handleSave = () => {
    if (!formData.title || !formData.videoUrl || !formData.service) {
      alert("Please fill Title, Service and Video!");
      return;
    }

    if (modalType === 'add') {
      setPromotions(prev => [...prev, { ...formData, id: Date.now() }]);
    } else {
      setPromotions(prev => prev.map(p => p.id === selectedPromo.id ? formData : p));
    }
    closeModal();
  };

  const closeModal = () => { setModalType(null); };

  return (
    <div className=" pr-9 bg-gray-50 min-h-screen font-sans">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Advanced Promotions</h2>
        <button onClick={() => openModal('add')} className="flex items-center gap-2 bg-[#6200EE] text-white px-6 py-3 rounded-2xl font-bold shadow-[0px_4px_0px_0px_rgba(98,0,238,1)] active:translate-y-1 transition-all">
          <Plus size={20}/> Add New
        </button>
      </div>
      
      {/* Promotion Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.map((promo) => (
          <div key={promo.id} onClick={() => openModal('details', promo)} className="bg-white p-4 rounded-[32px] shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all">
            <div className="relative h-40 bg-gray-200 rounded-3xl overflow-hidden mb-4">
              {promo.videoUrl ? <video src={promo.videoUrl} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full"><VideoIcon className="text-gray-400"/></div>}
              <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold text-[#6200EE] uppercase">
                {promo.type}
              </div>
            </div>
            <h3 className="font-bold text-gray-800 truncate">{promo.title}</h3>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1"><Briefcase size={12}/> {promo.service}</p>
          </div>
        ))}
      </div>

      {/* Advanced Modal */}
      {modalType && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[40px] shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            
            {/* Header */}
            <div className="sticky top-0 bg-white p-6 border-b border-gray-50 flex justify-between items-center z-10">
              <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
                {modalType === 'add' ? 'Create Promotion' : 'Promotion Info'}
              </h2>
              <button onClick={closeModal} className="bg-red-500 text-white rounded-full p-2 hover:rotate-90 transition-all"><X size={18}/></button>
            </div>

            <div className="p-8 space-y-5">
              {/* Title */}
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Promotion Title</label>
                <input name="title" value={formData.title} onChange={handleInputChange} disabled={modalType === 'details'} className="w-full mt-1 p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#6200EE] outline-none" placeholder="e.g. 50% Ramadan Sale" />
              </div>

              {/* Service & Type Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase ml-1">Target Service</label>
                  <select name="service" value={formData.service} onChange={handleInputChange} disabled={modalType === 'details'} className="w-full mt-1 p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none">
                    <option value="">Select Service</option>
                    {availableServices.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase ml-1">Promo Type</label>
                  <select name="type" value={formData.type} onChange={handleInputChange} disabled={modalType === 'details'} className="w-full mt-1 p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none">
                    <option value="Discount">Discount</option>
                    <option value="BOGO">Buy 1 Get 1</option>
                    <option value="Flash Sale">Flash Sale</option>
                  </select>
                </div>
              </div>

              {/* Dates Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase ml-1">Start Date</label>
                  <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} disabled={modalType === 'details'} className="w-full mt-1 p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase ml-1">End Date</label>
                  <input type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} disabled={modalType === 'details'} className="w-full mt-1 p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none" />
                </div>
              </div>

              {/* Video Upload */}
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Promotion Video</label>
                <input type="file" hidden ref={fileInputRef} onChange={handleVideoChange} accept="video/*" />
                <div onClick={() => modalType !== 'details' && fileInputRef.current.click()} className="mt-2 border-2 border-dashed border-purple-100 rounded-[32px] h-48 flex flex-col items-center justify-center overflow-hidden bg-gray-50 cursor-pointer">
                  {formData.videoUrl ? <video src={formData.videoUrl} controls={modalType === 'details'} className="w-full h-full object-cover" /> : 
                  <div className="text-center"><VideoIcon className="mx-auto text-purple-300 mb-2" size={32}/><p className="text-[10px] text-gray-400">UPLOAD PROMO VIDEO</p></div>}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4">
                {modalType !== 'details' ? (
                  <button onClick={handleSave} className="w-full py-4 bg-gradient-to-r from-[#6200EE] to-purple-500 text-white rounded-2xl font-bold active:translate-y-1 transition-all">
                    {modalType === 'add' ? 'Publish Promotion' : 'Update Details'}
                  </button>
                ) : (
                  <button onClick={() => setModalType('edit')} className="w-full py-4 bg-gradient-to-r from-[#6200EE] to-purple-500 text-white rounded-2xl font-bold  active:translate-y-1 transition-all">
                    Edit Promotion
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicPromotionManager;