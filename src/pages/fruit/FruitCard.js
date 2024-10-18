
export default function FruitCard(props) {
  return (
    <div className="text-center">
    <h3 className="text-4xl">{ props.name }</h3>
    <div className="p-4 flex items-center justify-center" >
      <div className="w-2/3 p-3">
        <img alt={ props.name } src={ props.imgSrc }/>
      </div>
    </div>
  </div>
  );
}