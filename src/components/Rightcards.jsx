import { IoMdArrowForward } from "react-icons/io";
const Rightcards = () => {
  return (
    <div className="right_content">
      <div className="card-box">
        <div className="card">
          <img
            src="https://imgs.search.brave.com/znD2oBCKeP-vq8Bogbe70Yq9ualjKxWSw-kjlP6r9o0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9zaWxob3VldHRl/LW9mLXlvdW5nLWJs/b25kZS13aXRoLXNo/b3J0LWhhaXItb24t/b3JhbmdlLWJhY2tn/cm91bmQtZnJlZS1p/bWFnZS5qcGVnP2g9/ODAwJnF1YWxpdHk9/ODA"
            alt=""
          />
          <h1 className="count">1</h1>
          <div className="bottom_content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
              repellendus iusto perferendis, quia vitae harum.
            </p>
            <div className="buttons">
              <span>Satisfied</span>
              <button>
                <IoMdArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightcards;
