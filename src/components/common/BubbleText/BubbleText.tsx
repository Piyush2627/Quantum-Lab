import "./BubbleText.css";
interface BubbleTextProps {
  text: string;
}
function BubbleText({ text }: BubbleTextProps) {
  return (
    <div>
      {text.split("").map((ele, index) => {
        return (
          <span key={index} className="hoverText">
            {ele}
          </span>
        );
      })}
    </div>
  );
}

export default BubbleText;
