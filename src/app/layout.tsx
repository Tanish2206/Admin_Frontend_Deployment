'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { Suspense } from 'react'
import secureLocalStorage from 'react-secure-storage'
import { useRouter } from 'next/navigation'
import Loading from './loading';
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const router=useRouter();
  const Token:any=secureLocalStorage.getItem("authToken");
  return (
    <html lang="en">
       <Head>
      <link rel="shortcut icon" href="logo.png" />
    </Head>
      <body className={inter.className}>
        <ChakraProvider>
        <ColorModeScript initialColorMode="light" />
        <Suspense fallback={<div>
        <Loading/>
          </div>}>
      {children}
        </Suspense>
        </ChakraProvider>
      
        </body>
    </html>
  )
}
