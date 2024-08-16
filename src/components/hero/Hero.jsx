
const Hero = () => {
    return (
        <div
            className="hero min-h-screen mt-12 rounded-2xl overflow-hidden"
            style={{
                backgroundImage: "url(https://www.caterer.com/advice/wp-content/uploads/head-chef-executive-chef-job-description.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-4xl">
                    <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5 text-lg text-justify">
                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                    </p>
                    <div className="flex gap-3 justify-center">
                        <button className="btn bg-green-500 border-none rounded-full text-lg text-black">Explore Now</button>
                        <button className="btn bg-gray-400 bg-opacity-5 border-1 border-white rounded-full text-lg text-white ">Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;