import { useState } from 'react';

function AccountSettings() {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    company: 'CodedWeb Ventures',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    console.log('Profile updated:', formData);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log('Password changed');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Account Settings</h1>
        <p className="text-[#8b949e] text-sm mt-1">Manage your account information and security</p>
      </div>

      {/* Profile Information */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
        <h2 className="text-white font-semibold mb-4">Profile Information</h2>
        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#8b949e] text-sm mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#58a6ff]"
              />
            </div>
            <div>
              <label className="block text-[#8b949e] text-sm mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#58a6ff]"
              />
            </div>
          </div>
          <div>
            <label className="block text-[#8b949e] text-sm mb-2">Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#58a6ff]"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-medium text-sm">
            Save Changes
          </button>
        </form>
      </div>

      {/* Change Password */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
        <h2 className="text-white font-semibold mb-4">Change Password</h2>
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label className="block text-[#8b949e] text-sm mb-2">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#58a6ff]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#8b949e] text-sm mb-2">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#58a6ff]"
              />
            </div>
            <div>
              <label className="block text-[#8b949e] text-sm mb-2">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#58a6ff]"
              />
            </div>
          </div>
          <button type="submit" className="px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-medium text-sm">
            Update Password
          </button>
        </form>
      </div>

      {/* Danger Zone */}
      <div className="bg-[#161b22] border border-[#ef4444] border-opacity-30 rounded-lg p-6">
        <h2 className="text-[#ef4444] font-semibold mb-2">Danger Zone</h2>
        <p className="text-[#8b949e] text-sm mb-4">Permanently delete your account and all your data</p>
        <button className="px-4 py-2 bg-[#ef4444] hover:bg-[#dc2626] text-white rounded-lg font-medium text-sm">
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default AccountSettings;