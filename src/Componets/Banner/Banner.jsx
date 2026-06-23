import BooksImage from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 mt-12">
      <div className="hero-content flex-col lg:flex-row-reverse lg:pt-10 lg:pb-10">
        <img
          src={BooksImage}
          className="lg:max-w-lg sm:max-w-sm rounded-lg shadow-2xl lg:mr-6"
        />
        <div className="lg:ml-8">
          <h1 className="text-4xl lg:text-5xl font-bold lg:w-10/12 mb-5 w-full">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn bg-[#23BE0A] lg:mt-5">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
