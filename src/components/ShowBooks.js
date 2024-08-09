"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ShowBooks() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          " https://online-json-server-api.up.railway.app/project/66b5fd9c340dd55056fb6f0a/books"
        ); // Replace with your actual API endpoint
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
      <h2 className="h2">All Books</h2>
      <ul>
        {books.data.map((book) => (
          <div key={book.id} className="book-cards">
            <div className="book-card">
              <div className="book-cover">
                <Image
                  src={book.coverImage}
                  alt="
                img"
                />
              </div>
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">By written: {book.author}</p>
              <p className="book-price">Price: {book.price}$</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
