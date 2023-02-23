import { PulseLoader } from "react-spinners";

const Loader = ({ loading }) => {
  return (
    <div className="loader-container">
      <PulseLoader
        loading={loading}
        color={"RGB(181, 196, 158)"}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;