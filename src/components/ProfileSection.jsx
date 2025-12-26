import React, { useState } from "react";
import { User, Mail, Phone, Edit3, Save, X } from "lucide-react"; // Using Lucide for icons
import { Link } from "react-router";

const ProfileSection = () => {
  // 1. State for Edit Mode
  const [isEditing, setIsEditing] = useState(false);

  // 2. State for User Data
  const [userData, setUserData] = useState({
    name: "Evan",
    email: "gddvc@gmail.com",
    phone: "5735353",
    role: "Admin",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className=" mx-auto p-2 mr-10 ">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <Link to={"/dashboard"}>
          <h2 className="text-xl font-semibold text-indigo-700 flex items-center gap-2">
            <span className="cursor-pointer">←</span> Personal Information
          </h2>
        </Link>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all"
        >
          {isEditing ? (
            <>
              <Save size={18} /> Save Profile
            </>
          ) : (
            <>
              <Edit3 size={18} /> Edit Profile
            </>
          )}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Avatar Card */}
        <div className="w-full md:w-1/3 flex flex-col items-center p-6 border border-gray-100 rounded-2xl bg-gray-50/50">
          <div className="relative">
            <img
              src="https://via.placeholder.com/150" // Replace with your Luffy image path
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
            />
          </div>
          <h3 className="mt-4 text-xl font-bold text-indigo-700">
            {userData.role}
          </h3>
          <p className="text-gray-500">Profile</p>
        </div>

        {/* Right Side: Form Fields */}
        <div className="w-full md:w-2/3 space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-600 mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              disabled={!isEditing}
              value={userData.name}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border transition-all ${
                isEditing
                  ? "border-indigo-400 bg-white"
                  : "border-gray-200 bg-gray-50"
              } outline-none`}
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-600 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              disabled={!isEditing}
              value={userData.email}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border transition-all ${
                isEditing
                  ? "border-indigo-400 bg-white"
                  : "border-gray-200 bg-gray-50"
              } outline-none`}
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-gray-600 mb-2 font-medium">
              Phone Number
            </label>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 bg-indigo-100 px-3 py-2 rounded-lg border border-indigo-200">
                <span className="text-sm font-bold text-indigo-700">🇺🇸 +1</span>
              </div>
              <input
                type="text"
                name="phone"
                disabled={!isEditing}
                value={userData.phone}
                onChange={handleChange}
                className={`flex-1 p-3 rounded-lg border transition-all ${
                  isEditing
                    ? "border-indigo-400 bg-white"
                    : "border-gray-200 bg-gray-50"
                } outline-none`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
