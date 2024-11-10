import React from 'react'

const layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
    <main>{children}</main>
        </body>
    </html>
  )
}

export default layout