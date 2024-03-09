import Link from 'next/link'
import { metadata } from './layout'
import { endpoints } from '@/const'
const HomePage = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>{metadata.title}</h1>
          <p className='py-6 text-lg leading-loose'>{metadata.description}</p>
          <Link href={endpoints.chat} className='btn btn-secondary'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
