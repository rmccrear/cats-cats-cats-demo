import { useEffect, useState } from "react";

const catData = {
  "length": "15 to 18 inches",
  "origin": "Burma and Thailand",
  "image_link": "https://api-ninjas.com/images/cats/burmese.jpg",
  "family_friendly": 5,
  "shedding": 2,
  "general_health": 2,
  "playfulness": 4,
  "children_friendly": 5,
  "stranger_friendly": 5,
  "grooming": 5,
  "intelligence": 5,
  "other_pets_friendly": 4,
  "min_weight": 8,
  "max_weight": 12,
  "min_life_expectancy": 10,
  "max_life_expectancy": 16,
  "name": "Burmese"
}

export default function CatPage() {
  // const cat = catData;
  // Step 3: set cat data with useState instead of hardcoded data
  const [ cat, setCat ] = useState({});
  // Get data from
  // https://cats-cats-cats-demo.deno.dev/cats/burmese

  // Step 1: put a function INSIDE your component that fetches
  // This is like an event handler
  async function fetchCat() {
    const result = await fetch("https://cats-cats-cats-demo.deno.dev/cats/persian");
    const data = await result.json();
    console.log(data);
    //Step 4: use setCat to set the value of the cat variable.
    setCat(data);
    // const frank = {
    //   name: "Maine Coon",
    //   origin: "Maine",
    //   image_link: "..."
    // }
    // setCat(frank);
  }

  // Run once on start with second args []
  useEffect(() => {
    // Step 2: run our async fetch here.
    fetchCat();
  }, []);


  return (
    <div>
      {/* CatCard */}
      <div >
        <h1 className="text-4xl">{cat.name}</h1>
        <div>
          <img src={cat.image_link} alt={cat.name} />
        </div>
      </div>
      {/* Cat Description */}
      <div>
        {`The ${cat.name} is ${cat.length} and comes from ${cat.origin}`}
      </div>
    </div>
  );
}