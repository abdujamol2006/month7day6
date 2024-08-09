"use client";

import { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const author = formData.get("author");
    const coverImage = formData.get("coverImage");
    const description = formData.get("description");
    const price = formData.get("price");

    if (!title || !author || !coverImage || !description || !price) {
      alert("Please fill in all fields");
      return;
    }

    // Create the book card data object
    const bookCardData = {
      title,
      author,
      coverImage,
      description,
      price,
    };

    // Here, you would typically:

    // 1. Send the bookCardData to your backend API for saving
    // 2. Handle the API response and potentially update the UI

    // Example: sending data to a fake API
    try {
      const response = await fetch(
        " https://online-json-server-api.up.railway.app/project/66b5fd9c340dd55056fb6f0a/books",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookCardData),
        }
      );

      if (response.ok) {
        console.log("Book card created successfully!");
        // Clear the form
        setTitle("");
        setAuthor("");
        setCoverImage("");
        setDescription("");
        setPrice("");
      } else {
        console.error("Error creating book card");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Create Book Card</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <label htmlFor="coverImage">Cover Image URL:</label>
        <input
          type="text"
          id="coverImage"
          name="coverImage"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit">Create Card</button>
      </form>
    </div>
  );
}
