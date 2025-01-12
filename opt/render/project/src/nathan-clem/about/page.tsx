import { serialize } from "v8";
import Link from "next/link"

export default function About () {
    return (
        <>
            <br />
            <b>
                <h1 style={{fontSize: "3em", 
                    textAlign: 'center'}}>About</h1>
            </b>
            <br /><br />
            <p style={{
                fontSize: "1.25em",
                textAlign: 'center'
            }}>
                Hello, I am a youtuber who also does a lot of other stuff
                such as coding,
                <br />
                gaming, and other natural hobbies. I hope I can make a decent
                <br />
                portfolio website, which you would like. 
                <br />
                Make sure to subscribe to my
                youtube channel!
            </p>
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
                    <button className="relative px-8 py-4 bg-red-600 text-white text-2xl font-semibold rounded-lg hover:bg-red-700 transition duration-200">
                        Subscribe
                    </button>
                </Link>
            </div>
        </>
    )
}