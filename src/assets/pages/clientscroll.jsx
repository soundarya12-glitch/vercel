import React from "react";

const clients = [
  { name: "Client A", image: '/per1.jpg', feedback: "Great experience!" },
  { name: "Client B", image:'./per2.jpg', feedback: "Highly recommend!" },
  { name: "Client C", image: './per3.jpg', feedback: "Very professional." },
  { name: "Client D", image: './per4.jpg', feedback: "Amazing service!" },
  { name: "Client E", image: './per5.jpg', feedback: "Excellent team." },
  { name: "Client F", image: './per6.jpg', feedback: "Highly satisfied!" },
];

function DummyClients() {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Our Clients</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {clients.map((client, index) => (
          <div
            key={index}
            className="w-36 bg-white p-4 rounded-lg shadow flex flex-col items-center"
          >
            <img
              src={client.image}
              alt={client.name}
              className="w-20 h-20 object-cover rounded"
            />
          
            <p className="text-gray-800 text-sm mt-1 text-center">"{client.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DummyClients;
