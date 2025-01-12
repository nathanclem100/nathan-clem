import Link from "next/link";
import Image from "next/image";

export default function portfolio () {
    return (
        <>
            <Link href="https://to-do-app-s4j7.onrender.com">
                <div style={{margin: "4em", textAlign: "center"}}>
                    <button className="px-8 py-4 bg-[#D88C7D] text-white text-xl font-semibold rounded-lg hover:bg-[#C07A6D] transition duration-200">
                        To Do App
                    </button>
                </div>
            </Link>
            <h1 style={{textAlign: "center", fontSize: "1.5em"}}>
                This is my biggest website creation up until about 19/12/24,
                <br />
                I am very proud of this website, even though most of the things
                <br />
                don't work.
            </h1>
            <br /><br />
            <div className="flex justify-center">
                <Image 
                    src="https://yt3.googleusercontent.com/daF2xCFCA9zHUGs-11y-Z4MZvoH006s3przNGzUxWIafANK5pGjjrjshuAZs6HTi6gKXo7RIzw=s160-c-k-c0x00ffffff-no-rj" 
                    alt="Gaming With Nathan"
                    width={500}
                    height={300}
                />
            </div>
        </>
    )
}