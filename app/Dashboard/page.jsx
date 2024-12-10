// 'use client';
// import React from "react";
// import { useSession, signIn, signOut } from "next-auth/react";

// const Page = () => {
//   const { data: session } = useSession();

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
//       <div className="text-center">
//         {session?.user ? (
//           <div className="bg-white text-gray-900 p-8 rounded-xl shadow-md max-w-md mx-auto">
//             <h1 className="text-2xl font-semibold mb-4">Welcome back, {session.user.name}!</h1>
//             <p className="text-md text-gray-600 mb-6">We're glad to have you back!</p>
//             <button
//               onClick={() => signOut()}
//               className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md text-lg"
//             >
//               Log Out
//             </button>
//           </div>
//         ) : (
//           <div className="bg-white text-gray-900 p-8 rounded-xl shadow-md max-w-md mx-auto">
//             <h1 className="text-2xl font-semibold mb-4">Welcome!</h1>
//             <p className="text-md text-gray-600 mb-6">Please log in to continue.</p>
//             <button
//               onClick={() => signIn()}
//               className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md text-lg"
//             >
//               Log In
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Page;
