import FruitHeader from "./FruitHeader";
import FruitCard from "./FruitCard";
import FruitDescription from "./FruitDescription";
import FRUIT from "../../data/fruit.json"

// const FRUIT = {
//   name: "Orange",
//   origin: "Florida",
//   smell: -9,
//   sweetness: 52,
//   cost: 4.99,
//   image_location: "/orange.jpg" 
// }

export default function Fruit(){
  console.log(FRUIT);
  return (
    <div>
      <FruitHeader />
      <FruitCard 
          name={FRUIT.name}
          imgSrc={FRUIT.image_location} />
      <FruitDescription 
        origin={FRUIT.origin}
        smelliness={FRUIT.smell}/>
    </div>
  );
}
