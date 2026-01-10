import React from "react";

function Inspiration() {
  return (
    <div className="pt-20 px-10 py-16">
      <h1 className="text-4xl font-bold mb-8">Inspiration</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your inspiration items here */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="bg-gray-300 h-64 rounded-lg mb-4"></div>
          <h2 className="text-xl font-semibold">Inspiration Item</h2>
          <p className="text-gray-600">Discover fashion inspiration here</p>
        </div>
      </div>
    </div>
  );
}

export default Inspiration;
