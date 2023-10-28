import './globals.css'
import '@fontsource/dm-sans';

import Footer from '@/components/main/Footer'

export const metadata = {
  title: 'Travel Agency - Home',
  description: 'Travel Agency Demo Web-page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          {children}
        </div>
        {/* <Footer/> */}
      </body>
    </html>
  )
}
