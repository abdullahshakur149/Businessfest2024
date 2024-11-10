import React from 'react'
import "@/app/globals.css";
import SessionProvider from "@/lib/SessionProvider";


const layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
        <SessionProvider>
    <main>{children}</main>
    </SessionProvider>
        </body>
    </html>
  )
}

export default layout