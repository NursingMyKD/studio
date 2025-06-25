import AdminAnalytics from '@/components/admin/AdminAnalytics';
import AdminUserList from '@/components/admin/AdminUserList';

export default function AdminDashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="mb-6">Welcome, admin! Here you can manage users and view analytics.</p>
      <AdminAnalytics />
      <AdminUserList />
    </div>
  );
}