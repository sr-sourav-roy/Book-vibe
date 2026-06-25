import { useLoaderData, useParams } from "react-router";
import { addToStoreBD } from "../../Utility/AddToBD";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBooks = data.find((singleBook) => singleBook.bookId === bookId);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    rating,
    publisher,
    yearOfPublishing,
  } = singleBooks;

  const handleMarkAsRead = (id) => {
    //store with id
    // whare to store
    //array of collections
    //if already exist the show a alart
    // if book not exist then push in the collection or array

    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });

    addToStoreBD(id);
  };
  return (
    <div className="card lg:card-side mt-20 p-3 ">
      <div className="lg:w-1/2 ">
        <img
          className="p-25 lg:h-[550px] bg-gray-100 rounded-xl"
          src={image}
          alt="image"
        />
      </div>
      <div className="lg:w-1/2">
        <h2 className="font-semibold text-2xl">{bookName}</h2>
        <p className="font-medium">By: {author}</p>
        <div className="divider lg:w-[500px]"></div>
        <p className="mt-0 mb-0 font-medium">{category}</p>
        <div className="divider lg:w-[500px]"></div>
        <small>
          {" "}
          <span className="font-medium">Review:</span> {review}
        </small>
        <div className="flex">
          <p className="font-medium ">Tags: </p>
          <div className="flex gap-10 ml-2 text-[#23BE0A] ">
            {tags.map((tag, index) => (
              <span key={index}> {tag}</span>
            ))}
          </div>
        </div>
        <div className="divider lg:w-[500px]"></div>
        {/* rating styles>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className="flex gap-3.5">
          <div className="text-gray-400">
            <small>Number of Pages:</small>
            <br />
            <small>Publisher:</small>
            <br />
            <small>Year of Publishing:</small>
            <br />
            <small>Rating:</small>
          </div>
          <div className="font-semibold">
            <small>{totalPages}</small>
            <br />
            <small>{publisher}</small>
            <br />
            <small>{yearOfPublishing}</small>
            <br />
            <small>{rating}</small>
          </div>
        </div>
        <div className="flex mt-1 gap-3">
          <button onClick={() => handleMarkAsRead(id)} className="btn btn-sm ">
            Mar as Read
          </button>
          <button className="btn btn-sm text-white bg-[#50B1C9]">
            add To Wishlist
          </button>
        </div>
      </div>
      l
    </div>
  );
};

export default BookDetails;
