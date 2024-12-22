import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function home() {
    return (
        <>
            <div className="bg-black">
                <div className="relative">
                    <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/hero/h1_hero1.jpg.webp"></img>
                    <p className="absolute bottom-[350px] left-32 text-white text-7xl my-2 font-poiret">Healthy Made</p>
                    <p className="absolute bottom-[270px] left-32 text-white text-7xl my-2 font-poiret">Delicious Cake</p>
                    <div className='absolute bottom-[160px] left-32'><button className="text-black border border-[#E5BF4A] py-5 px-10 bg-[#E5BF4A] text-sm">ORDER NOW</button></div> 
                </div>
                <div className="py-10">
                    <p className="text-white text-4xl font-poiret flex justify-center">This is Schilers. Awesome Food Theme.</p>
                    <p className="text-white text-4xl font-poiret ms-10 flex justify-center">Purchase it and eat Burgers.</p>
                </div>
                <div className="grid grid-cols-2 gap-8 ms-28 ">
                   <div className="text-white px-16">
                    <p className="font-poiret text-2xl text-[#E5BF4A]">This is Schilers. Awesome Food Theme.</p>
                    <p className="font-poiret text-2xl text-[#E5BF4A] mb-5">Purchase it and eat Burgers.</p>
                    <p className="font-jost mb-5 font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>
                    <p className="font-jost font-thin">Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>
                   </div>
                   <div>
                    <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/about1.jpg"></img>
                   </div>
                </div>
            </div>

        </>
    )
}