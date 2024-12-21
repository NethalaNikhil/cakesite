import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
export default function footer() {
    return (
        <>
            <div className="bg-black px-20 ">
                <div className=" flex flex-row pt-5 border-b-2 border-[#3B3B3B] mb-10">
                    <div className="basis-1/2 mb-5 ">
                        <div className='flex '>
                            <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/logo/logo.png" alt="Logo" />
                        </div>
                    </div>
                    <div className='basis-1/2 flex justify-end mt-5' >
                        <ul className='flex space-x-10 text-white mb-5 text-sm'>
                            <li className='menu-item hover:text-[#E5BF4A] menu-item'><a href='#'>HOME</a></li>
                            <li className=' hover:text-[#E5BF4A]'><a>CAKES</a></li>
                            <li className=' hover:text-[#E5BF4A]'><a>ABOUT</a></li>
                            <li className=' hover:text-[#E5BF4A]'><a>BLOG</a></li>
                            <li className=' hover:text-[#E5BF4A]'><a>CONTACT</a></li>
                        </ul>
                    </div>

                </div>
                <div className="grid grid-cols-3 text-white text-sm border-b-2 border-[#3B3B3B] pb-5">
                    <div>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="space-x-5 mt-5 mb-5">
                            <button className="text-white border border-[#3B3B3B] py-2.5 px-6  hover:text-[#E5BF4A] hover:border-[#E5BF4A]"><FontAwesomeIcon icon={faInstagram} /> Intagram</button>
                            <button className="text-white border border-[#3B3B3B] py-2.5 px-6  hover:text-[#E5BF4A] hover:border-[#E5BF4A]"><FontAwesomeIcon icon={faFacebook} /> Facebook</button>
                            <button className="text-white border border-[#3B3B3B] py-2.5 px-6  hover:text-[#E5BF4A] hover:border-[#E5BF4A]"><FontAwesomeIcon icon={faTwitter} /> Twitter</button>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <img src='https://preview.colorlib.com/theme/cakeshop/assets/img/icon/location.svg' />
                        </div>
                        <div className='ms-[215px]'>
                            <p className='text-[#E5BF4A] text-xl my-5'>Location</p>
                            <p>4736 Poe Lane, HOT</p>
                            <p>SPRINGS, Montana-59845</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <img src='https://preview.colorlib.com/theme/cakeshop/assets/img/icon/phone.svg' />
                        </div>
                        <div className='ms-[214px]'>
                            <p className='text-[#E5BF4A] text-xl my-5'>Contact</p>
                            <span className=' border-b-2 border-transparent hover:border-white'>913-473-7000</span>
                            <p className='mt-2'>contact@cakeshop.com</p>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center py-5'><p className='text-white text-sm'>Copyright ©2024 All rights reserved </p></div>
            </div>
        </>
    )
}