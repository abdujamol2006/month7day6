"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ShowBooks() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:4000/books"); // Replace with your actual API endpoint
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (isLoading) {
    return <div>Loading books...</div>;
  }

  return (
    <div>
      <h2>All Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>By: {book.author}</p>
            <img
              src={book.coverImage}
              alt={book.title}
              width="100"
              height="150"
            />
            <p>{book.description}</p>
            <p>Price: ${book.price}</p>
            {/* Add more details or buttons as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}
