import React from 'react'
import { sort } from 'fast-sort';
import Link from 'next/link';

interface Users {
    id: number;
    name: string;
    email:string;
  }

interface Props{
    sortType: 'email' | 'name';
}

const UserTable = async ({sortType}:Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache : 'no-store'});
    const users: Users[] = await res.json();
    const sorted = sort(users).asc(sortType);

  return (
    <table className='table table-bordered'>
        <thead>
          <tr>
            <th>
                <Link className='btn btn-ghost' href='?orderType=name' >Name</Link>
            </th>
            <th><Link className='btn btn-ghost' href='?orderType=email' >Email</Link></th>
          </tr>
        </thead>
        <tbody>
        {sorted.map((user) =>
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        )}
        </tbody>
      </table>
  )
}

export default UserTable