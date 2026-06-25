import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../Utility/AddToBD";

import Read from "./Read";
import WishList from "../WIshList/WishList";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const stortBookData = getStoreBook();
    const convertedStortBooks = stortBookData.map((id) => parseInt(id));
    const myReadlist = data.filter((book) =>
      convertedStortBooks.includes(book.bookId),
    );
    setReadList(myReadlist);
  }, []);

  // *****************
  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setReadList(sortByPage);
    }
    if (type === "rating") {
      const sortByPage = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortByPage);
    }
  };

  // %%%%%%%%%%%%%%%%%%%%%%
  return (
    <div className="mt-10 ">
      <details className="dropdown mb-20 lg:mb-10 lg:flex justify-center">
        <summary className="btn m-1 ">Sort by : {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm ">
          <li>
            <a onClick={() => handleSort("pages")}>pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("rating")}>rating</a>
          </li>
        </ul>
      </details>
      <Tabs className="">
        <TabList>
          <Tab>Readlist</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          {readList.map((b) => (
            <Read key={b.bookId} b={b}></Read>
          ))}
        </TabPanel>
        <TabPanel>
          <WishList></WishList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
