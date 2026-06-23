// import { useState } from "react";

import { Suspense } from "react";
import Book from "./Book";

const Books = ({ data }) => {
  // const [allBooks, setAllBooks] = useState([]);

  //API one more systems:
  // useEffect(() => {
  //   fetch("bookAll.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllBooks(data);
  //     });
  // }, []);

  //API second systems:
  // const promiseData = fetch("bookAll.json").then((res) => res.json());

  return (
    <div className="mt-20">
      <h3 className="text-4xl font-bold mb-8 text-center">All Books</h3>
      <Suspense fallback={<span>Looding.........</span>}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-3 lg:ml-5 gap-5">
          {data.map((singleData) => (
            <Book key={singleData.bookId} singleData={singleData}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
