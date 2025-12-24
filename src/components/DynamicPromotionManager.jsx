


import React, { useState, useRef } from 'react';
import { X, Plus, Video as VideoIcon, Calendar, Tag, Briefcase } from 'lucide-react';

const DynamicPromotionManager = () => {
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
  

  const [formData, setFormData] = useState({
    title: '',
    videoUrl: null,
    service: '',
    type: 'Discount', 
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