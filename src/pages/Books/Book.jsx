import { IoStarHalf } from "react-icons/io5";
const Book = ({ singleData }) => {
  const { bookName, author, image, category, rating } = singleData;
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-10 border border-gray-200">
      <figure className="p-6 bg-gray-100">
        <img className="h-[180px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">
            {rating} <IoStarHalf />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
