import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="p-5 mr-3 bg-slate-200">Admin Slider</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
