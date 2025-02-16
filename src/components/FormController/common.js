import get from "lodash/get";
import map from "lodash/map";

export const makeDropdownOptions = (data, path, loading) => {
  const dataArray = !loading && get(data, path, []);
  const dropdown_options = map(dataArray, ({ id, name }) => {
    return {
      value: id,
      label: name,
    };
  });
  return dropdown_options;
};
