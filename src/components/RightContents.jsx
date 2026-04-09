import Cards from "./Cards";
const RightContents = (props) => {
  return (
    <div className="right_content">
      {props.usersD.map(function (e, idx) {
        return (
          <Cards
            key={idx}
            id={idx + 1}
            img={e.img}
            tag={e.tag}
            intro={e.intro}
          />
        );
      })}
    </div>
  );
};

export default RightContents;
