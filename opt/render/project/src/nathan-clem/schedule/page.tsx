import Link from 'next/link'

export default function Schedule() {
    return (
        <div>
            <b>
                <h1 style={{
                    fontSize: "3em", 
                    textAlign: 'center',
                    margin: "0.5em"
                    }}>
                    Scheduling   
                </h1>
                <br />
                <h1 style={{textAlign: "center"}}>
                    <strong>
                        DISCLAIMER: IF YOU ARE NOT LOGGED IN, WE CANNOT IDENTIFY THE CALLER,
                        THUS YOU WILL NOT BE ANSWERED.
                        <br />
                        EVEN IF YOU ARE LOGGED IN, DO NOT BE ASSURED YOUR CALL WILL BE ANSWERED.
                    </strong>
                </h1>
            </b>
            <div className="flex justify-center mt-8">
                <Link target="_blank" href="https://calendar.app.google/qqAfRyGFYxQrr9Rw7">
                    <button className="px-8 py-4 bg-[#D88C7D] text-white text-xl font-semibold rounded-lg hover:bg-[#C07A6D] transition duration-200">
                        Book An Appointment
                    </button>
                </Link>
            </div>
        </div>
    )
}