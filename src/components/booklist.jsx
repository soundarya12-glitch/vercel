// src/components/SimpleBookList.jsx
import { FaStar } from 'react-icons/fa';

const books = [
  {
    title: 'The Fault in Our Stars',
    image: 'https://covers.openlibrary.org/b/id/8231996-L.jpg',
    rating: 5,
  },
  {
    title: 'Stargirl',
    image: 'https://covers.openlibrary.org/b/id/240727-L.jpg',
    rating: 4,
  },
  {
    title: 'Star Wars: Thrawn',
    image: 'https://covers.openlibrary.org/b/id/8750695-L.jpg',
    rating: 4.5,
  },
];

export default function SimpleBookList() {
  return (
    <div className="p-4">
      {books.map((book, i) => (
        <div key={i} className="mb-6 border p-4 rounded-md bg-white shadow-sm w-64">
          <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded" />
          <h2 className="mt-2 text-md font-semibold">{book.title}</h2>
          <div className="flex mt-1">
            {Array.from({ length: 5 }, (_, j) => (
              <FaStar
                key={j}
                className={j < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
