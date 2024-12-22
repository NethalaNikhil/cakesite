import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
export default function cakes() {
    return (
        <>

            <div className="bg-black px-20 ">
                <div className="relative">  
                    <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/hero/h2_hero1.jpg.webp" alt="Hero Image" />
                    <p className="absolute bottom-20 left-20 text-white text-6xl my-2 font-poiret">Delicious Cakes</p> 
                </div>

                <div className="bg-black pt-20 grid grid-cols-3 gap-4  cursor-pointer">
                    <div >
                        <div className="relative group">
                            <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items1.jpg" alt="Properties Image" className="w-full h-auto" />
                            <span className="absolute bottom-0 left-0 right-0 text-[#0A0A0A] bg-[#E5BF4A] py-3 text-center text-base cursor-pointer transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                Add to Card
                            </span>
                        </div>

                        <p className="text-white text-2xl my-2 font-poiret">Cashmere Tank + Bag</p>
                        <p className="text-[#E5BF4A] text-lg font-thin my-2 font-poiret">$98.00</p>
                    </div>
                    <div>
                        <div className="relative group">
                            <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items2.jpg" alt="Properties Image" className="w-full h-auto" />
                            <span className="absolute bottom-0 left-0 right-0 text-[#0A0A0A] bg-[#E5BF4A] py-3 text-center text-base cursor-pointer transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                Add to Card
                            </span>
                        </div>
                        <p className="text-white text-2xl my-2 font-poiret">Delightful Lemon</p>
                        <p className="text-[#E5BF4A] text-lg font-thin my-2 font-poiret">$98.00</p>
                    </div>
                    <div>
                        <div className="relative group">
                            <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items3.jpg" alt="Properties Image" className="w-full h-auto" />
                            <span className="absolute bottom-0 left-0 right-0 text-[#0A0A0A] bg-[#E5BF4A] py-3 text-center text-base cursor-pointer transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                Add to Card
                            </span>
                        </div>
                        <p className="text-white text-2xl my-2 font-poiret">Sweet Suprise</p>
                        <p className="text-[#E5BF4A] text-lg font-thin my-2 font-poiret">$98.00</p>
                    </div>
                    <div>
                        <div className="relative group">
                            <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items4.jpg" alt="Properties Image" className="w-full h-auto" />
                            <span className="absolute bottom-0 left-0 right-0 text-[#0A0A0A] bg-[#E5BF4A] py-3 text-center text-base cursor-pointer transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                Add to Card
                            </span>
                        </div>
                        <p className="text-white text-2xl my-2 font-poiret">Cashmere Tank + Bag</p>
                        <p className="text-[#E5BF4A] text-lg font-thin my-2 font-poiret">$98.00</p>
                    </div>
                    <div>
                        <div className="relative group">
                            <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items5.jpg" alt="Properties Image" className="w-full h-auto" />
                            <span className="absolute bottom-0 left-0 right-0 text-[#0A0A0A] bg-[#E5BF4A] py-3 text-center text-base cursor-pointer transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                Add to Card
                            </span>
                        </div>
                        <p className="text-white text-2xl my-2 font-poiret">Cashmere Tank + Bag</p>
                        <p className="text-[#E5BF4A] text-lg font-thin my-2 font-poiret">$98.00</p>
                    </div>
                    <div>
                        <div className="relative group">
                            <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items6.jpg" alt="Properties Image" className="w-full h-auto" />
                            <span className="absolute bottom-0 left-0 right-0 text-[#0A0A0A] bg-[#E5BF4A] py-3 text-center text-base cursor-pointer transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                Add to Card
                            </span>
                        </div>
                        <p className="text-white text-2xl my-2 font-poiret">Cashmere Tank + Bag</p>
                        <p className="text-[#E5BF4A] text-lg font-thin my-2 font-poiret">$98.00</p>
                    </div>
                </div>
                <div className=" mt-20 pb-5">
                    <div className='flex justify-center'><p className="text-white text-4xl  font-poiret">Follow us on Instagram</p></div>
                    <div className='flex justify-center my-5'><button className="text-[#E5BF4A] border border-[#E5BF4A] py-2.5 px-6 "><FontAwesomeIcon icon={faInstagram} /> Intagram</button></div>
                </div>
                <div className='grid grid-cols-4 py-5'>
                    <div><img src='https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra1.jpg'/></div>
                    <div><img src='https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra2.jpg'/></div>
                    <div><img src='https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra3.jpg'/></div>
                    <div><img src='https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra4.jpg'/></div>
                </div>
            </div>
        </>
    )
}