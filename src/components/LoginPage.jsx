import React from 'react';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const LoginPage = () => {
  return (
    <div className='flex flex-col h-screen w-screen overflow-hidden bg-gradient-to-br from-green-500 to bg-pink-500 justify-center items-center'>
        <div className='container h-[80%] w-[40%] bg-white bg-opacity-10 rounded-3xl'>
            <form className='flex flex-col h-full justify-evenly items-center'>
                <div className='text-3xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-pink-400 to bg-green-900 tracking-wider mt-5'>LOGIN HERE</div>
                <input type="text"
                placeholder='Username'
                className='text-black w-[70%] h-[10%] text-xl  rounded-xl px-2 border hover:bg-opacity-20' />
                <input type="password"
                placeholder='Password' 
                className='text-black w-[70%] h-[10%] text-xl rounded-xl px-2 border hover:bg-opacity-20'/>


                <BsFillArrowRightCircleFill 
                className='text-5xl text-white animate-bounce cursor-pointer hover:bg-opacity-10'/>

                

            </form>
            <h1 className='text-2xl flex text-white font-bold'>Thanks For Watching Please Like Share Subscribe for More React tuts...</h1>
        </div>

    </div>
  )
}

export default LoginPage;