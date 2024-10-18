
export default function FruitDescription(props){
  return (
    <div>
    <p>
      Origin: {props.origin}
    </p>
    <p>
      Smelly: {props.smelliness > 100 ? "SMELLY! Beware!" : "nice"}
    </p>
    </div>
  );
}