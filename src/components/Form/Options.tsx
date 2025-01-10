import { FC, Fragment } from "react";

interface OptionsProps {
  options?: Array<MultiLevelDropdown>;
}

const Options: FC<OptionsProps> = ({ options }) => {
  if (!options) return null;

  return (
    <>
      {options.map(({ id, name, children }) => (
        <Fragment key={id}>
          <option value={id}>{name}</option>
          <Options options={children} />
        </Fragment>
      ))}
    </>
  );
};

export default Options;
