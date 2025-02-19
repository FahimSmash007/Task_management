import { NavLink } from "react-router-dom";
import BannerWave from "../assets/BannerWave.svg";
import 'transition-style';
const Banner = () => {
    return (
        <div className="relative ">
            <svg
                className="w-20 h-20 fill-current ml-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
            <img src={BannerWave} alt="" className="w-full h-auto" />
            <h1 transition-style="in:circle:bottom-right" className="   bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 banner  absolute font- inset-0 
            flex md:items-start md:justify-between sm:items-center sm:justify-center sm:flex md:flex  ml-24 sm:text-xl md:text-9xl sm:w-52 md:w-2xl 
            tracking-widest   mt-28  font-bold  border-2 p-8 rounded-3xl h-fit">
                &quot;Stay Focused. Stay Organized. Achieve More.&quot;
            </h1>
            <p className=" shadow-2xl
            bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  absolute place-content-center justify-center top-80 border-2 p-5 rounded-3xl w-96 right-80 text-2xl    md:ml-96 ">Every small task completed is a step closer to your dreams. Don’t let distractions hold you back. Stay focused....


                <NavLink to={'/task'}>

                    <button className="css-button-shadow-border-sliding--black mt-5"> Let&apos;s go</button>

                </NavLink>

            </p>
        </div>
    );

};

export default Banner;
