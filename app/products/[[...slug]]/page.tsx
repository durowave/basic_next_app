import React from 'react'

interface Props{
    params:{slug:string[];};
    searchParams:{sortOrder:string;};
}

const PruductsPage = ({params:{slug},searchParams:{sortOrder}}:Props) => {
  return (
    <div>PruductsPage link - {slug} - {sortOrder}</div>
  )
}

export default PruductsPage