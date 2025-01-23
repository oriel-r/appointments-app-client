import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MessageComponent = ({message}) => {
const [counter, setCounter] = useState(3)
const navigate = useNavigate()

    
return (
    <div>
      <p>{message}</p>
    </div>
  )
}

export default MessageComponent
