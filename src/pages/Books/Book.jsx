const Book = ({ singleData }) => {
  const { bookName, author, image, category } = singleData;
  return (
    <div className="card bg-base-100 border border-gray-300 mb-10 pt-6">
      <figure className="w-9/12 p-10 ml-13 shadow-2xl bg-[#F3F3F3]">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body ml-10">
        <h2 className="card-title">
          Card Title
          <div className="badge badge-secondary">{category}</div>
        </h2>
        <div>
          <h2>{bookName}</h2>
          <p>{author}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
