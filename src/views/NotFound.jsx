import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const NotFound = () => {
  return (
    <div className='w-screen h-screen flex flex-col gap-5 justify-center items-center'>
        <span className=' font-semibold font-dm text-3xl text-text-secondary'>404 Page Not Found</span>
        <span className=' font-medium font-dm text-xl text-text-secondary'>The requested URL is not found on this server</span>
        <Link to={'/'}>
        <Button className={"border "}>Go Back</Button>
        </Link>
    </div>
  )
}

export default NotFound