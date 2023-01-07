import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="footer  flex lg:flex-row flex-col items-center  lg:justify-center gap-5 p-4 bg-skills px-8  lg:px-24 py-8 text-slate-700 bg-[#F9F9F4]  ">
            <div className='flex items-center justify-center lg:flex-row flex-col'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div className='flex gap-2 flex-col lg:flex-row lg:gap-8 items-center justify-center '>
                <div className='flex items-center  gap-1'>
                    <MdCall></MdCall>
                    <p> +90 507 626 0228</p>
                </div>
                <div className='flex items-center gap-1'>
                    <MdEmail></MdEmail>
                    <p> tauhidhasan11@gmail.com</p>
                </div>
            </div>

            <div className="flex">
                <a href="https://github.com/tauhid-hasan-dev" target='blank'><SiGithub className='text-lg lg:text-[16px] text-slate-400 hover:text-text' ></SiGithub></a>
                <a href="https://www.linkedin.com/in/tauhid-hasan/" target='blank'><SiLinkedin className='text-lg lg:text-[16px] text-slate-400 hover:text-text' ></SiLinkedin></a>
                <a href="https://drive.google.com/file/d/1ix8ayp0IoC7mFdCLm0ZmK4v3okuf3HhK/view" target='blank'><FaFileDownload className=' text-lg lg:text-[16px] text-slate-400 hover:text-text' ></FaFileDownload></a>
            </div>
        </footer>
    );
};

export default Footer;