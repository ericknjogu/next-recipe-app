import React from "react";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={getRecipeDetails?.image}
              name={getRecipeDetails?.name}
              alt={getRecipeDetails?.name}
              className="w-4/5 rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
