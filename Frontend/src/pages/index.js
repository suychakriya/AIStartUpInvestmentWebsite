import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Searchpage from './Layout/Searchpage'
import Homepage from './Layout/Homepage'





const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Homepage />
  )
}
