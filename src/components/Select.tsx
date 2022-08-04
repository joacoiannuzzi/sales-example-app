const Select = (props: {
  name: string;
  value: string;
  onChange: (value: string) => void;
  items: string[];
}) => {
  return (
    <div className="flex gap-2">
      <label htmlFor={props.name} className="capitalize">
        {props.name}
      </label>
      <select
        name={props.name}
        id={props.name}
        className="capitalize"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      >
        {props.items.map((item) => (
          <option key={item} value={item} className="capitalize">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
