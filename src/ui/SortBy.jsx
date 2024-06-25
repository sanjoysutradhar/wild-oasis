import PropTypes from "prop-types";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";
function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      options={options}
      value={sortBy}
      onChange={handleChange}
      type={"white"}
    />
  );
}

SortBy.propTypes = {
  options: PropTypes.arrayOf({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
};

export default SortBy;
