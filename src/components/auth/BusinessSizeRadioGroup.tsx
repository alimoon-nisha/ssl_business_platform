const options = ["Just you", "2 - 9", "10 - 99", "100 - 299", "300+"];

export function BusinessSizeRadioGroup({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-5 text-base text-text-primary">
        Number of employees, including you
      </legend>
      <div className="space-y-5">
        {options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-center gap-6 text-lg text-text-primary"
          >
            <input
              type="radio"
              name="business-size"
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="size-6 accent-primary"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
