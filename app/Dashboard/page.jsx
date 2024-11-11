"use client";
import DashboardLayout from '@/components/Dashlayout';
import { useSession } from "next-auth/react"

export default function DashboardHome() {
  const { data: session, status } = useSession();

  return (
    <DashboardLayout>
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r  from-black/50 via-purple-700 to-cyan-400 ">Businessfest Admin Portal</h1>
        {status === "authenticated" && (
          <p className="text-lg text-gray-600">Welcome, {session.user.name}!</p>
        )}
      </div>
    </DashboardLayout>
  );
}
6