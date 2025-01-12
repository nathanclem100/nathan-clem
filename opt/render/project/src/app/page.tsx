import Image from "next/image";
import Header from "./components/Header"
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <br />
      <br />
      <b>
      <h1 style={{fontSize: "3em", 
      textAlign: 'center'}}>Gaming With Nathan</h1>
      </b>
      <label htmlFor=""
      style={{
        color: "white"
      }}
      >mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</label>
      <div className="flex justify-center mt-8">
        <Link href="https://www.youtube.com/@GamingWithNathan-bz6cg" className="relative group">
          <div className="absolute
            -inset-0.5
            bg-gradient-to-r
            from-red-600
            to-red-500
            rounded-lg blur
            opacity-60
            group-hover:opacity-100
            transition
            duration-200
          "></div>
          <button className="relative flex items-center justify-center px-8 py-4 bg-red-600 text-white text-2xl font-semibold rounded-lg hover:bg-red-700 transition duration-200">
            Subscribe
          </button>
        </Link>
      </div>
      <br /><br /><br /><br /><br />
      <div className="flex justify-center">
        <Image 
          src="https://yt3.googleusercontent.com/daF2xCFCA9zHUGs-11y-Z4MZvoH006s3przNGzUxWIafANK5pGjjrjshuAZs6HTi6gKXo7RIzw=s160-c-k-c0x00ffffff-no-rj" 
          alt="Gaming With Nathan"
          width={500}
          height={300}
        />
      </div>
    </>
  );
}
