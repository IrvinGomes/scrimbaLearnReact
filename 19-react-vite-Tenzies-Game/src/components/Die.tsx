const Die: React.FC<any> = ({ die, selectDie }) => {
  return (
    <div
      className={`${die.selected ? "selected-die" : "die"}`}
      onClick={() => {
        selectDie();
      }}
    >
      <h1>{die.value}</h1>
    </div>
  );
};
export default Die;
