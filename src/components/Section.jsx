import Leftcontent from "./Leftcontent";
import RightContents from "./RightContents";

const Section = (props) => {
  return (
    <div className="section">
      <Leftcontent />
      <RightContents usersD={props.usersD} />
    </div>
  );
};

export default Section;
// {props.usersD.map(function (e, idx) {
//         return (
//           <Rightcards
//             key={idx}
//             id={idx + 1}
//             img={e.img}
//             tag={e.tag}
//             intro={e.intro}
//           />
//         );
//       })}
