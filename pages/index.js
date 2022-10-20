import React from "react";

export default function Login(props) {

  const handleLogin = async () => {
    alert('Berhasil Login');
  };

  return (
    <div align="center" style={{paddingTop: '200px'}}>
      <input type="email" placeholder="Masukan Email" />
      <br></br>
      <br></br>
      <input type="password" placeholder="Masukan Password" />
      <br></br>
      <br></br>
      <button onClick={(e) => handleLogin()}>Login</button>
    </div>
  );
}