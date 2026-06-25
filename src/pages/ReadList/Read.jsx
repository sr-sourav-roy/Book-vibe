import { MapPin } from "lucide-react";
const Read = ({ b }) => {
  const {
    bookName,
    image,
    category,
    rating,
    publisher,
    tags,
    yearOfPublishing,
  } = b;
  return (
    <div className="card bg-base-100 shadow-sm lg:p-8 border border-gray-200 shadow grid grid-cols-1 lg:grid-cols-2 lg:w-full mb-5 mt-6">
      <div className="w-2/3">
        <figure className="p-6 bg-gray-100 rounded-2xl ml-4 mt-2.5 ">
          <img className="h-[180px]" src={image} alt="image" />
        </figure>
      </div>
      <div className="card-body w-full ">
        <h2 className=" font-bold text-xl lg:text-2xl">{bookName}</h2>
        <p className="font-medium text-sm">By: {publisher}</p>
        <div className="lg:flex gap-6 items-center">
          <span className="text-sm font-bold">Tag</span>
          <span>
            {tags.map((tag, index) => (
              <button
                key={index}
                className="ml-7 lg:mr-5 text-[#23BE0A] p-2 pt-1.5 bg-[#e9f9e6] pt-0.5 rounded-r-2xl rounded-l-2xl"
              >
                #{tag}
              </button>
            ))}
          </span>
          <span className="flex gap-2.5 text-gray-400 mt-3">
            <MapPin /> Year of Publishing:{yearOfPublishing}
          </span>
        </div>

        <div className="border-1 border-dotted border-gray-200 mt-2"></div>
        <div className="card-actions lg:flex items-center mt-2">
          <div className="badge text-[#328EFF] p-4 pt-3 bg-[#dde9f9] pt-0.5 rounded-r-2xl rounded-l-2xl">
            Category: {category}
          </div>
          <div className="badge text-[#FFAC33] p-4 pt-3 bg-[#fff1dd] pt-0.5 rounded-r-2xl rounded-l-2xl">
            Rating: {rating}
          </div>
          <button className="btn text-white p-4 pt-3 bg-[#23BE0A] pt-0.5 rounded-r-2xl rounded-l-2xl">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Read;
