import React from "react";

function Guide() {
  return (
    <div className="pt-20 px-10 py-16">
      <h1 className="text-4xl font-bold mb-8">Style Guide</h1>
      <div className="space-y-8">
        {/* Add your guide content here */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-600 mb-4">
            Welcome to the style guide. Here you'll find tips and tricks for
            styling outfits.
          </p>
          <p className="text-gray-600">
            Learn about color combinations, layering, and accessorizing to
            create stunning looks.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Fashion Tips</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Start with basics and build your wardrobe</li>
            <li>Invest in quality pieces that last</li>
            <li>Mix and match for versatile outfits</li>
            <li>Accessorize to elevate your look</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Guide;
