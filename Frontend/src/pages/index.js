import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Search from './search'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Search />
  )
}
