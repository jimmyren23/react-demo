
import '../App.css';

function Item( {companyName}) {
  return (
    <div className="item">
      <h2> Company Name: {companyName} </h2> 
    </div>
  );
}

export default Item;
