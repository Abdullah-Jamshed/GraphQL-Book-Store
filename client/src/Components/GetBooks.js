import React from "react";
// import { useQuery } from "@apollo/client";
// import { ALL_BOOKS } from "../GraphQL/Queries";

function GetBooks() {
  // const [books, setBooks] = useState([]);
  // eslint-disable-next-line
  // const [count, setCount] = useState(8);
  // const [limit, setLimit] = useState(2);
  // const [currentPage, setCurrentPage] = useState(1);

  // const { error, loading, data } = useQuery(ALL_BOOKS, { variables: { booksLimit: limit, booksCurrentPage: currentPage } });

  // useEffect(() => {
  //   data && setBooks(data.books);
  // }, [data]);

  return (
    <div>
      {/* {loading ? (
        <h1>Loading</h1>
      ) : books.length ? (
        books.map((val, i) => (
          <div key={i} className='data'>
            <h1>{val.id}</h1>
            <h2>{val.title}</h2>
          </div>
        ))
      ) : (
        <h1>No Data</h1>
      )}
      <div>
        <li className='list'>
          {count &&
            [...Array(Math.ceil(count / limit))].map((_, i) => (
              <ul key={i} onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </ul>
            ))}
        </li>
      </div> */}
    </div>
  );
}

export default GetBooks;
