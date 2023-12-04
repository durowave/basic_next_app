import React from 'react'

interface Props{
    params : {id : number}
}

const userDetailPage = ({params:{id}}:Props) => {
  return (
    <div>userDetailPage {id}</div>
  )
}

export default userDetailPage