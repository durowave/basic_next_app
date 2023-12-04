import React from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface Props{
  searchParams:{orderType:'email' | 'name';};
}

const UserPage = async ({searchParams:{orderType}}:Props) => {
  
  return (
    <>
      <h1>Users Table</h1>
      <Link href='users/new' className='btn'>New User</Link>
      <UserTable sortType={orderType} />
    </>
  );
};

export default UserPage;
