"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();
  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/" className="mr-5">
        Next Js
      </Link>
      <Link href="/users/" className="mr-5">
        User
      </Link>
      {status === "loading" && <div>loading...</div>}
      {status === "authenticated" && <div>{session.user!.name}</div>}
      {status === "authenticated" && <Link href="/api/auth/signout" className="mr-5">
          Log Out
        </Link>}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="mr-5">
          Login
        </Link>
      )}
    </div>
  );
};

export default NavBar;
