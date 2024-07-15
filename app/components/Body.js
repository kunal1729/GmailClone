'use client'
import React from 'react'
import Left from './Left'
import Sidebar from './Sidebar'
import Mails from './Mails'
import { useState } from 'react'

import NewMail from './NewMail'

const Body = ({menu}) => {

  const [compose, setCompose] = useState(false)
  const [type, setType] = useState("Inbox");

  return (
    <div className='flex relative min-h-screen h-full pb-2 '>
          
        {menu ? (
            <Sidebar type = {type} setType = {setType} setCompose={setCompose} compose = {compose}/>
          )
         : null}
        <Mails type = {type} />
        <NewMail setCompose = {setCompose} compose = {compose} />
    </div>
  )
}

export default Body
