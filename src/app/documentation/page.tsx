export default function documentation () {
    return (
    <div className="p-8">
        <h1 
            style={{fontSize: "4.5em"}} 
            className="flex justify-center mb-8"
        >
            Documentation
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
            <section>
                <h2 className="text-2xl font-bold mb-4">Navigation</h2>
                <p className="text-xl mb-4">
                    At the top of the page, you&apos;ll find the navigation header. On mobile devices, 
                    this becomes a dropdown menu accessible via the menu icon next to &quot;GWN&quot;.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-xl mb-4">
                    The About page provides information about GWN, our mission, and what we offer. 
                    Here you can learn more about our expertise and approach to web development.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">FAQ</h2>
                <p className="text-xl mb-4">
                    Find answers to commonly asked questions about our services, pricing, and process. 
                    This section helps address your initial concerns before getting started.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
                <p className="text-xl mb-4">
                    Browse through our collection of completed projects and case studies. 
                    This showcases our work and gives you an idea of what we can create for you.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
                <p className="text-xl mb-4">
                    Read what our clients say about working with us. This section features real feedback 
                    and experiences from past projects.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Schedule a Call</h2>
                <p className="text-xl mb-4">
                    To schedule a consultation:
                    1. Click the &quot;Schedule Call&quot; button in the navigation
                    2. Read the disclaimer carefully
                    3. Click &quot;Book An Appointment&quot; to access the Google Calendar interface
                    4. Choose your preferred time slot
                    5. Log in with your website credentials
                    6. Wait for confirmation - we&apos;ll email you if any scheduling conflicts arise
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Account Management</h2>
                <p className="text-xl mb-4">
                    Use the &quot;Log In&quot; button to access your existing account or &quot;Sign Up&quot; to create 
                    a new one. Having an account allows you to schedule calls and access additional features.
                </p>
            </section>
        </div>
    </div>
    )
}