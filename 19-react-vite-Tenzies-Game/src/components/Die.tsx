const Die: React.FC<any> = ({ die, toggleDie }) => {
  return (
    <div
      className={`${die.selected ? "selected-die" : "die"}`}
      onClick={() => {
        toggleDie();
      }}
    >
      <h1>{die.value}</h1>
    </div>
  );
};
export default Die;
