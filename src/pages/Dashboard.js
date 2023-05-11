import React from 'react'
import Middle from '../components/Middle/Middle'
import RightSide from '../components/RightSide/RightSide'

const Dashboard = () => {
  return (
    <div className='flex'>
        <Middle />
        <RightSide />
    </div>
  )
}

export default Dashboard