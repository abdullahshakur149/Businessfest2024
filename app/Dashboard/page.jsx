'use client'
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession(); 
  
  return (
    <div className="flex justify-center mt-52 md:text-6xl">
      {session?.user ? (
        <h1>{`Welcome back ${session.user.name}`}</h1>
      ) : (
        <h1>{`Welcome! Please log in.`}</h1>
      )}
    </div>
  );
};

export default Page;
