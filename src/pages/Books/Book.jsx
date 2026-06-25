import { IoStarHalf } from "react-icons/io5";
import { Link } from "react-router";
const Book = ({ singleData }) => {
  const {
    bookId,
    bookName,
    image,
    category,
    rating,
    publisher,
    tags,
    yearOfPublishing,
  } = singleData;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 lg:w-96 shadow-sm p-10 border border-gray-200 shadow mr-3.5">
        <figure className="p-6 bg-gray-100">
          <img className="h-[180px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-10">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>By: {publisher}</p>
          <div className="border-1 border-dashed border-gray-200"></div>
          <div className="card-actions flex justify-between mt-2">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <IoStarHalf />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
