import React, { useState } from "react";

export default function Caone() {
  const [quantity, setQuantity] = useState(1);

  const book = {
    id: 1,
    title: "The Power of Disciplines",
    img: "/dis.jpg",
    price: 299,
  };

  const addToWishlist = () => {
    const current = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = current.find((b) => b.id === book.id);
    if (!exists) {
      current.push(book);
      localStorage.setItem("wishlist", JSON.stringify(current));
      alert("Book added to wishlist!");
    } else {
      alert("Book already in wishlist!");
    }
  };

  const addToCart = () => {
    const current = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = current.find((b) => b.id === book.id);
    if (exists) {
      // increase quantity
      const updated = current.map((b) =>
        b.id === book.id ? { ...b, quantity: b.quantity + quantity } : b
      );
      localStorage.setItem("cart", JSON.stringify(updated));
    } else {
      current.push({ ...book, quantity });
      localStorage.setItem("cart", JSON.stringify(current));
    }
    alert("Book added to cart!");
  };

  return (
   <div className="p-6">
      {/* Book Info Section */}
      <div className="flex flex-col md:flex-row gap-6 bg-white shadow-md p-4 rounded-lg">
        {/* Left: Image */}
        <div>
          <img src={book.img} alt={book.title} className="w-60 h-60 md:w-[500px] md:h-[500px] object-cover rounded shadow" />
        </div>

        {/* Center: Book Details */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
          <p className="text-lg text-gray-600">The Urban Dweller’s Guide to Inner Freedom</p>
          <p className="text-lg text-gray-600">By: Adarsh Gupta, Neha Sareen, Shikha Mehra & Dr Mickey Mehta</p>
          <p className="text-lg text-gray-600">Sanyaas in the City</p>

          <div className="flex justify-left mt-7 gap-7 flex-wrap w-[500px] md:h-[50px]">
            <h2 className="text-xl font-semibold px-3 gap-6">Format</h2>
            <h2 className="text-xl font-semibold px-3">Pages</h2>
            <h2 className="text-xl font-semibold px-3">Weight</h2>
            <h2 className="text-xl font-semibold px-3">Language</h2>
          </div>
          <div className="flex justify-left mt- gap-7 flex-wrap">
            <p className="text-sm font-semibold text-gray-600 px-3">PaperBack</p>
            <p className="text-sm text-gray-600 font-semibold px-3">264</p>
            <h2 className="text-sm text-gray-600 font-semibold px-9">0.62 grams</h2>
            <h2 className="text-sm text-gray-600 font-semibold px-3">English</h2>
          </div>
          <div className="flex justify-left mt-7 gap-7 flex-wrap w-[500px] md:h-[50px] ">
          
  <h2 className="text-xl font-semibold px-3 gap-6">Public</h2>

  <h2 className="text-xl font-semibold px-3"> Year</h2>
  <h2 className="text-xl font-semibold px-3">Country</h2>
    <h2 className="text-xl font-semibold px-3">Language</h2>
    
</div>
         <div className="flex justify-left mt- gap-7 flex-wrap ">
          
  <p className="text-sm font-semibold text-gray-600 px-3">PaperBack</p>

  <p className="text-sm text-gray-600 font-semibold px-3">264</p>
  <h2 className="text-sm text-gray-600 font-semibold px-9">0.62 grams</h2>
    <h2 className="text-sm text-gray-600 font-semibold px-3">English</h2>
</div>
<div className="flex justify-left mt-7 gap-7 flex-wrap w-[500px] md:h-[50px] ">
          
  <h2 className="text-xl font-semibold px-3 gap-6">Public</h2>

  <h2 className="text-xl font-semibold px-3"> Year</h2>
  <h2 className="text-xl font-semibold px-3">Country</h2>
    <h2 className="text-xl font-semibold px-3">Language</h2>
    
</div>
<div className="flex justify-left mt- gap-7 flex-wrap ">
          
  <p className="text-sm font-semibold text-gray-600 px-3">PaperBack</p>

  <p className="text-sm text-gray-600 font-semibold px-3">264</p>
  <h2 className="text-sm text-gray-600 font-semibold px-9">0.62 grams</h2>
    <h2 className="text-sm text-gray-600 font-semibold px-3">English</h2>
    
</div>
        </div>

        {/* Right: Price, Quantity & Buttons */}
        <div className="flex flex-col items-center md:items-end gap-3 p-4 border rounded-lg shadow-lg shadow-pink-500/40 h-[500px]">
                  <div className="text-center md:text-center">
             
            <h1 className="text-xl  text- center text-gray-500 line-through">$399</h1>
            <h1 className="text-xl text-orange-600 font-bold">${book.price}</h1>
            <p className="text-gray-700">In Stock</p>
          </div>

    <div className="text-center md:text-left">
             <img src={book.img} alt={book.title} className="w-90 h-60 object-cover" />
             </div>
     

          {/* Quantity Controls */}
         
          {/* Add to Cart / Wishlist */}
                     
        <button
          onClick={addToWishlist}
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
        >
          Add to Wishlist
        </button>
<button
          onClick={addToCart}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full" 
        >
          Add to Cart
        </button>

</div>
      </div>

</div>
  );
}
