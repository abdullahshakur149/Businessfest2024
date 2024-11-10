import React from 'react'
import "@/app/globals.css";

const layout = ({ children }) => {
  return (
    <html lang='en'>
      <body className='bg-gradient-to-r  from-black/50 via-purple-700 to-cyan-400'>
        <main >{children}</main>
      </body>
    </html>
  )
}

export default layout