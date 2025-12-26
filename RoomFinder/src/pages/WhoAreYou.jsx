import { Button } from 'antd'
import React from 'react'

function WhoAreYou() {
  return (
    <>
        <div className='bg-indigo-300 w-screen h-screen flex justify-center items-center'>
            <div className=' w-[600px] h-[300px] flex justify-center items-center gap-3'>
                <Button size='large' className='px-20!'>User</Button>
                <Button size='large' className='px-20!'>User</Button>
            </div>
        </div>
    </>
  )
}

export default WhoAreYou