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
          <div class="book-cards">
            <div class="book-card">
              <div class="book-cover">
                <img src={book.coverImage} alt="" />
              </div>
              <h3 class="book-title">{book.title}</h3>
              <p class="book-author">By written: {book.author}</p>
              <p class="book-price">Price: {book.price}$</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
