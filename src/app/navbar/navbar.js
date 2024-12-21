import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
export default function Navbar() {
  return (
    
    <div className="bg-black flex flex-row pt-10">
      <div className="basis-1/4 ms-10 mt-5">
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram}  />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" >
              <FontAwesomeIcon icon={faTwitter}  />
            </a>
          </li>
        </ul>
      </div>
      <div className="basis-1/2   me-10">
       <div className='flex justify-center'>
          <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/logo/logo.png" alt="Logo" />
       </div>
        <div className='flex justify-center mt-5' >
          <ul className='flex space-x-10 text-white mb-5 text-sm'>
            <li className='menu-item hover:text-[#E5BF4A] menu-item'><a href='#'>HOME</a></li>
            <li className=' hover:text-[#E5BF4A]'><a>CAKES</a></li>
            <li className=' hover:text-[#E5BF4A]'><a>ABOUT</a></li>
            <li className=' hover:text-[#E5BF4A]'><a>BLOG</a></li>
            <li className=' hover:text-[#E5BF4A]'><a>CONTACT</a></li>
          </ul>
        </div>
      </div>
      <div className="basis-1/4">
      <button className="text-[#E5BF4A] border border-[#E5BF4A] py-2 px-4 rounded hover:text-white hover:border-white">Call Us: +10 783 346 4378</button>
      </div>
    </div>
  );
}
