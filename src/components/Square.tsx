interface SquarePropsType {
  value: string;
  handleClick?: () => void;
}

const Square: React.FC<SquarePropsType> = ({ value, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      style={{
        height: "150px",
        width: "150px",
        border: "1px solid blue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {value}
    </div>
  );
};

export default Square;
