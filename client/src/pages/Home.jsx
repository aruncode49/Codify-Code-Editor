import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="fullscreen pb-20 sm:pb-0 flex items-center justify-center">
      <section className=" text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-10 lg:flex lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-green-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl ">
              Welcome to Codify.
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-gray-200">
              Your ultimate destination for HTML, CSS, and JavaScript coding!
              Whether you're a seasoned developer or just starting out, Codify
              provides the perfect platform to bring your ideas to life.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to={"/compiler"}
                className="block w-full rounded border border-[#2D9596] bg-[#2D9596] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Get Started
              </Link>

              <a
                className="block w-full rounded border border-[#2D9596] px-12 py-3 text-sm font-medium text-white hover:[#2D9596] focus:outline-none focus:ring active:bg-[#2D9596] sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
