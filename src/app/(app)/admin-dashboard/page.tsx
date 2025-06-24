"use client";

import AdminUserList from '@/components/admin/AdminUserList';
import { withAdminAuth } from '@/components/auth/withAdminAuth';

function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, admin! Here you can manage users and view analytics.</p>
      <AdminUserList />
      {/* Add analytics and more features here */}
    </div>
  );
}

export default withAdminAuth(AdminDashboard);
