import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { SiGithub, SiLinkedin } from "react-icons/si";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-[#F9F9F4]  px-5 lg:px-20 ">
                <div className="navbar-start">
                    <img className='w-[100px]' src="https://i.ibb.co/cgYPTtb/preview-image.png" alt="" />

                </div>
                <div className="navbar-center hidden lg:flex justify-center items-center text-center">
                    Rick and Monty Frontend Challenge
                </div>
                <div className="navbar-end  gap-3">
                    Tauhid Hasan
                    <div className="flex gap-2">
                        <a href="https://github.com/tauhid-hasan-dev" target='blank'><SiGithub className='text-lg lg:text-[16px] text-slate-600 hover:text-text' ></SiGithub></a>
                        <a href="https://www.linkedin.com/in/tauhid-hasan/" target='blank'><SiLinkedin className='text-lg lg:text-[16px] text-slate-600 hover:text-text' ></SiLinkedin></a>
                        <a href="https://drive.google.com/file/d/1ix8ayp0IoC7mFdCLm0ZmK4v3okuf3HhK/view" target='blank'><FaFileDownload className=' text-lg lg:text-[16px] text-slate-600 hover:text-text' ></FaFileDownload></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;