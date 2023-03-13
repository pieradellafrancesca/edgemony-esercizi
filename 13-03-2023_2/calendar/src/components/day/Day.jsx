import "./index.css";

const Day = ({ content, activeDay, setActiveDay }) => {
  const onHandleClick = () => {
    setActiveDay(content);
  };
  return (
    <div
      className={`Day ${content === activeDay && "active"}`}
      onClick={onHandleClick}
    >
      {content}
    </div>
  );
};

export default Day;
