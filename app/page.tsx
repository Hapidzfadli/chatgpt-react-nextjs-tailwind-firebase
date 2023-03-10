import React from 'react'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
        <h1 className='text-5xl font-bold mb-20 sm:text-sm'>ChatGPT</h1>

        <div className='flex lg:flex-row  sm:flex-col space-x-2 text-center sm:text-sm'>
          <div>
            <div className='flex flex-col items-center justify-center mb-5'>
            <SunIcon className="h-6 w-6"/>
              <h2 className=''>Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText sm:text-sm">"Explain Something to me"</p>
              <p className="infoText sm:text-sm">"What the different the dog and cat?"</p>
              <p className="infoText sm:text-sm">"What is the color of the sun?"</p>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center mb-5'>
            <BoltIcon className="h-6 w-6"/>
              <h2>Capabilities</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">"Remembers what user said earlier in the conversation"</p>
              <p className="infoText">"Allows user to provide follow-up corrections"</p>
              <p className="infoText">"Trained to decline inappropriate requests"</p>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center mb-5'>
            <ExclamationTriangleIcon className="h-6 w-6"/>
              <h2>Limitation</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">"May occasionally generate incorrect information"</p>
              <p className="infoText">"May occasionally produce harmful instructions or biased content"</p>
              <p className="infoText">"Limited knowledge of world and events after 2021"</p>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default HomePage