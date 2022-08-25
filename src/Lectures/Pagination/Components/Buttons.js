import "./Buttons.scss";
import { useNavigate } from "react-router-dom";

export default function Buttons() {
  const navigate = useNavigate();

  function goOtherPage(idx) {
    navigate(`?limit=20&offset=${idx * 20}`);
  }

  return (
    <div className="pageBtn">
      <button onClick={() => goOtherPage(0)}>1</button>
      <button onClick={() => goOtherPage(1)}>2</button>
      <button onClick={() => goOtherPage(2)}>3</button>
      <button onClick={() => goOtherPage(3)}>4</button>
      <button onClick={() => goOtherPage(4)}>5</button>
    </div>
  );
}
