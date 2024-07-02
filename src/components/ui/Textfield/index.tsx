import { cx } from "class-variance-authority";
import { useId } from "react";

interface TextfieldProps {
  label: string;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string;
  rightLabel?: string | JSX.Element;
}

const Textfield = ({
  label,
  placeholder,
  className,
  labelClassName,
  inputClassName,
  onChange,
  value,
  rightLabel,
}: TextfieldProps) => {
  const id = useId();

  return (
    <div className={cx("flex flex-col", className)}>
      <div className="flex items-end justify-between">
        <label
          htmlFor={id}
          className={cx("mb-2.5 text-sm font-medium leading-none text-white-200", labelClassName)}
        >
          {label}
        </label>
        {rightLabel && (
          <div className="mb-2.5 text-xs font-medium leading-none text-white-200">{rightLabel}</div>
        )}
      </div>
      <input
        id={id}
        name={id}
        onChange={onChange}
        value={value}
        className={cx(
          "rounded-md border-2 border-white-250 bg-transparent p-3 placeholder:text-base placeholder:font-normal placeholder:text-white-150",
          inputClassName,
        )}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Textfield;
