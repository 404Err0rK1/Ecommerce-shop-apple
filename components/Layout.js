import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/Nav";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import styled from "styled-components"

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);
  const { data: session } = useSession();
  const Wrapper = styled.div`
  position: relative;
  background-image: url("./apple-macbook-pro-m3-1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  width: 100vw;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `
  if (!session) {

    return (
      <Wrapper>
        <div className="w-screen h-screen bg-black bg-opacity-70 absolute top-0 left-0"></div>
        <div className="flex rounded-md w-1/3 h-1/2 items-center justify-center bg-white bg-opacity-40 z-50">
          <div className="text-center w-full flex flex-col justify-around items-center h-full">
            <div className="text-5xl font-bold">Admin login</div>
            <button onClick={() => signIn('google')} className="text-white p-2 px-4 rounded-lg bg-blue-500 ">Login with Google</button>
          </div>
        </div>
      </Wrapper>
    );
  }


  return (
    <div className="bg-bgGray min-h-screen ">
      <div className="block md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
      </div>
      <div className="flex">
        <Nav show={showNav} />
        <div className="flex-grow p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

