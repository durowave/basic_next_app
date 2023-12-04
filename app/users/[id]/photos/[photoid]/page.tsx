import React from "react";

interface Props {
  params: {id:number; photoid: number; };
}

const UserPhotos = ({ params: { id,photoid } }: Props) => {
  return <>
  <div>id: - {id}</div>
  <div>UserPhotos - {photoid}</div>
  </>;
};

export default UserPhotos;
