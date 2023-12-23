'use client';

import React from 'react'

import { FaGoogle} from "react-icons/fa";

const LoginGoogle = () => {
  return (
    <div>
        <button className=" shadow-lg shadow-gray-400  text-center w-full py-3 items-center rounded-full flex gap-2 hover:bg-gray-100 justify-center" onClick={()=>{}}>
					<FaGoogle />
		<p className="font-semibold"> Continue with Google </p>
		</button>
    </div>
  )
}

export default LoginGoogle