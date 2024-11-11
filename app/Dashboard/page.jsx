"use client";
import DashboardLayout from '@/components/Dashlayout';
import { useSession } from "next-auth/react"


export default function DashboardHome() {
  const { data: session, status } = useSession();

  return (
    <DashboardLayout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center'
      }}>
        <h1 className='text-4xl'>Businessfest admin portal</h1>
        {status === "authenticated" && (
          <p>Welcome, {session.user.name}!</p>
        )}
      </div>
    </DashboardLayout>
  );
}
