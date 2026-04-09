import { IoMdArrowForward } from "react-icons/io";

const Cards = (props) => {
  console.log(props.tag);
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h1 className="count">{props.id}</h1>
      <div className="bottom_content">
        <p>{props.intro}</p>
        <div className="buttons">
          <span>{props.tag}</span>
          <button>
            <IoMdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
