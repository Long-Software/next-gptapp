'use client'

import { useState } from 'react'

const Chat = () => {
  const [text, setText] = useState('')
  const [message, setMessage] = useState([])
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <div className='min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]'>
      <div>
        <h2 className='text-5xl'></h2>
      </div>
      <form onSubmit={handleSubmit} className='max-w-4xl pt-12'>
        <div className='join w-full'>
          <input
            type='text'
            className='input input-bordered join-item w-full'
            name='text'
            value={text}
            placeholder='Input Message'
            required
            onChange={e => setText(e.target.value)}
          />
          <button className='btn btn-primary join-item' type='submit'>
            Ask Question
          </button>
        </div>
      </form>
    </div>
  )
}

export default Chat
