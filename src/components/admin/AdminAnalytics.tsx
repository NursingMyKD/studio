"use client";
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminAnalytics() {
  const { user } = useAuth();
  const [analytics, setAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAnalytics() {
      if (!user) return;
      setLoading(true);
      setError(null);
      try {
        const token = await user.getIdToken();
        const res = await fetch('/api/admin/analytics', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Failed to fetch analytics');
        const data = await res.json();
        setAnalytics(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchAnalytics();
  }, [user]);

  if (loading) return <div>Loading analytics...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!analytics) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">App Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="p-4 bg-card rounded shadow">
          <div className="text-lg font-bold">{analytics.totalUsers}</div>
          <div className="text-muted-foreground">Total Users</div>
        </div>
        <div className="p-4 bg-card rounded shadow">
          <div className="text-lg font-bold">{analytics.totalAdmins}</div>
          <div className="text-muted-foreground">Admins</div>
        </div>
        <div className="p-4 bg-card rounded shadow">
          <div className="text-lg font-bold">{analytics.mostVisitedModule || 'N/A'}</div>
          <div className="text-muted-foreground">Most Visited Module</div>
        </div>
      </div>
      <div className="p-4 bg-card rounded shadow">
        <div className="font-semibold mb-2">Average Time Spent (seconds)</div>
        <div className="text-lg">{analytics.avgTimeSpent?.toFixed(1) || 'N/A'}</div>
      </div>
    </div>
  );
}
