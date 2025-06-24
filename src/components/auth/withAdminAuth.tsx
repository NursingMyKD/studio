"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export function withAdminAuth<P>(Component: React.ComponentType<P>) {
  return function AdminProtected(props: P) {
    const { user, loading, isAdmin } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && (!user || !isAdmin)) {
        router.replace('/'); // or a 403 page
      }
    }, [user, isAdmin, loading, router]);

    if (loading || !user || !isAdmin) return null; // or a spinner

    return <Component {...props} />;
  };
}
