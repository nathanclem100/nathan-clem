import Link from 'next/link'

export default function member () {
    return(
        <div>
            <h1
            className="
                flex justify-center
            "
            style={{
                fontSize: "5em"
            }}
            >
                Membership
            </h1>
            <div
                className="
                    flex justify-center
                    mt-8
                "
            >
                <Link href="https://www.youtube.com/@GamingWithNathan-bz6cg" className="relative group" target='_blank'>
                        <div className="
                            absolute
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
                            Work In Progress
                        </button>
                </Link>
            </div>
            <strong className="flex justify-center" style={{margin: "3em"}}>
                MEMBERSHIP CANNOT BE APPLIED TO ANYBODY WHO IS NOT A MEMBER OF THE YOUTUBE CHANNEL
                <br />
                OR DOES NOT HAVE CONTACT, PARTNERSHIP, OR AFFILIATION WITH THE OWNER OF THE YOUTUBE
                <br />
                CHANNEL. YOU CAN BE GIVEN FREE ACCESS TO THE MEMBERSHIP URL IF YOU ARE A VIEWER OF
                <br />
                THE CHANNEL FOR MORE THAN 6 MONTHS, HOWEVER IT IS NOT GUARANTEED. IF YOU BELIEVE
                <br />
                THAT YOU WERE DENIED ACCESS TO THE MEMBERSHIP PERKS, PLEASE ASK WITHIN MAIL,
                <br />
                MY GMAIL ACCOUNT IS nathanclem100@gmail.com  
            </strong>
        </div>
    )
}