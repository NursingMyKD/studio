"use client";

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminUserList() {
  const { user } = useAuth();
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      if (!user) return;
      setLoading(true);
      setError(null);
      try {
        const token = await user.getIdToken();
        const res = await fetch('/api/admin/users', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Failed to fetch users');
        const data = await res.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, [user]);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">All Users</h2>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-2 py-1">First Name</th>
            <th className="border px-2 py-1">Last Name</th>
            <th className="border px-2 py-1">Position</th>
            <th className="border px-2 py-1">Manager</th>
            <th className="border px-2 py-1">Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => {
            // Assume user.name is 'First Last' or split by space
            let firstName = '';
            let lastName = '';
            if (u.name) {
              const parts = u.name.split(' ');
              firstName = parts[0];
              lastName = parts.slice(1).join(' ');
            }
            return (
              <tr key={u.uid}>
                <td className="border px-2 py-1">{firstName}</td>
                <td className="border px-2 py-1">{lastName}</td>
                <td className="border px-2 py-1">{u.position || ''}</td>
                <td className="border px-2 py-1">{u.position === 'Assistant Nurse Manager' ? (u.manager || 'N/A') : ''}</td>
                <td className="border px-2 py-1">{u.admin ? 'Yes' : 'No'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
