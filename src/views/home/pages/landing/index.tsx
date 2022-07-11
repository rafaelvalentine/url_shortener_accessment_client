import React, {useEffect} from "react";
// import { useDispatch } from 'react-redux'
import { Navbar, Stats, IconBar, ListLinks } from "../../components";
// import {fetchLinks} from '../../../../store'

function Index() {

  // const dispatch = useDispatch()
  // useEffect(() => {
  
  // }, [])
  
  return (
    <>
      <div className="w-full h-screen max-h-[100vh] bg-shortener-grey-400">
        <Navbar />
        <div className="w-full mt-[32px] md:mt-[72px] h-full h-[80vh] max-h-[80vh] px-4 flex flex-col justify-start items-center">
          <Stats />
          <IconBar />
          <ListLinks/>
        </div>
      </div>
    </>
  );
}

export default Index;
