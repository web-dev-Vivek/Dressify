import React, { useState } from "react";

function Collection() {
  const [searchQuery, setSearchQuery] = useState("");

  // Comprehensive fashion collection data - organized by clothing type
  const fashionItems = [
    // TOP SECTION - 11 types
    { id: 1, type: "T-Shirt", image: "/image.jpg" },
    { id: 2, type: "Shirt", image: "/image4.jpg" },
    { id: 3, type: "Tank Top", image: "/image8.jpg" },
    { id: 4, type: "Crop Top", image: "/image1.jpg" },
    { id: 5, type: "Polo Shirt", image: "/image5.jpg" },
    { id: 6, type: "Hoodie", image: "/image10.jpg" },
    { id: 7, type: "Sweatshirt", image: "/image2.jpg" },
    { id: 8, type: "Sweater", image: "/image6.jpg" },
    { id: 9, type: "Cardigan", image: "/image11.jpg" },
    { id: 10, type: "Vest", image: "/image3.jpg" },
    { id: 11, type: "Camisole", image: "/image7.jpg" },

    // BOTTOMS SECTION - 11 types
    { id: 12, type: "Jeans", image: "/image.jpg" },
    { id: 13, type: "Trousers", image: "/image4.jpg" },
    { id: 14, type: "Chinos", image: "/image8.jpg" },
    { id: 15, type: "Cargo Pants", image: "/image1.jpg" },
    { id: 16, type: "Shorts", image: "/image5.jpg" },
    { id: 17, type: "Skirt", image: "/image10.jpg" },
    { id: 18, type: "Leggings", image: "/image2.jpg" },
    { id: 19, type: "Sweatpants", image: "/image6.jpg" },
    { id: 20, type: "Joggers", image: "/image11.jpg" },
    { id: 21, type: "Culottes", image: "/image3.jpg" },
    { id: 22, type: "Palazzos", image: "/image7.jpg" },

    // OUTERWEAR SECTION - 8 types
    { id: 23, type: "Jacket", image: "/image.jpg" },
    { id: 24, type: "Coat", image: "/image4.jpg" },
    { id: 25, type: "Blazer", image: "/image8.jpg" },
    { id: 26, type: "Parka", image: "/image1.jpg" },
    { id: 27, type: "Trench Coat", image: "/image5.jpg" },
    { id: 28, type: "Shrug", image: "/image10.jpg" },
    { id: 29, type: "Bomber Jacket", image: "/image2.jpg" },

    // ACCESSORIES SECTION - 4 types
    { id: 30, type: "Scarf", image: "/image6.jpg" },
    { id: 31, type: "Hat / Cap", image: "/image11.jpg" },
    { id: 32, type: "Belt", image: "/image3.jpg" },
    { id: 33, type: "Gloves", image: "/image7.jpg" },
  ];

  // Filter items based on search query
  const filteredItems = fashionItems.filter((item) =>
    item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get unique clothing types
  const clothingTypes = [...new Set(fashionItems.map((item) => item.type))];

  return (
    <div className="pt-24 px-8 pb-16 bg-[#f5f2ed] min-h-screen">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <p className="text-sm tracking-widest text-gray-600 mb-4">
          MY COLLECTION
        </p>
        <h1 className="text-5xl font-serif mb-6">Curated Fashion Collection</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Discover our carefully selected pieces that blend timeless elegance
          with modern style. Each item in our collection represents quality,
          comfort, and the perfect expression of your personal taste.
        </p>
      </div>

      {/* Search Bar Section */}
      <div className="mb-12 flex justify-center">
        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search clothing type... (e.g., Shirt, Pants, Dress, Jacket, Sweater, T-Shirt, Lower)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-gray-800 focus:outline-none text-lg transition-all shadow-sm"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Available Types Info */}
      {/* <div className="mb-8 text-center">
        <p className="text-gray-600">
          Available types:{" "}
          <span className="font-semibold">{clothingTypes.join(", ")}</span>
        </p>
      </div> */}

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative mb-4 overflow-hidden rounded-2xl bg-gray-200 h-80">
                <img
                  src={item.image}
                  alt={item.type}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Like Button */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-gray-100">
                  <span className="text-2xl">♡</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <p className="text-sm tracking-widest text-gray-700 font-semibold">
                  {item.type}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-xl text-gray-600">
              No items found for "{searchQuery}". Try searching for:{" "}
              <span className="font-semibold">{clothingTypes.join(", ")}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Collection;
