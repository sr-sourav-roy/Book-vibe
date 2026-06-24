import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../Utility/AddToBD";
import Book from "../Books/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const stortBookData = getStoreBook();
    const convertedStortBooks = stortBookData.map((id) => parseInt(id));
    const myReadlist = data.filter((book) =>
      convertedStortBooks.includes(book.bookId),
    );
    setReadList(myReadlist);
  }, []);
  return (
    <div className="mt-10 ">
      <Tabs className="">
        <TabList>
          <Tab>Readlist</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          {/* <h2>Any Readlist: {readList.length}</h2> */}
          {readList.map((b) => (
            <Book key={b.bookId} singleData={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any Wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
