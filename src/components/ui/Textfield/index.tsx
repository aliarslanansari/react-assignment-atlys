import EyeIcon from "@/assets/svg-components/EyeIcon";
import { cx } from "class-variance-authority";
import { useId, useState } from "react";

interface TextfieldProps {
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string;
  rightLabel?: string | JSX.Element;
  rightLabelClassName?: string | JSX.Element;
  required?: boolean;
  name?: string | undefined;
  error?: string;
}

const Textfield = ({
  label,
  placeholder,
  className,
  labelClassName,
  inputClassName,
  rightLabelClassName,
  onChange,
  value,
  rightLabel,
  type,
  required,
  name,
  error,
}: TextfieldProps) => {
  const id = useId();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={cx("flex flex-col", className)}>
      {(rightLabel || label) && (
        <div className="flex items-end justify-between">
          {label && (
            <label
              htmlFor={id}
              className={cx(
                "mb-2.5 text-sm font-medium leading-none text-white-200",
                labelClassName,
              )}
            >
              {label}
            </label>
          )}
          {rightLabel && (
            <div
              className={cx(
                "mb-2.5 text-xs font-medium leading-none text-white-200",
                rightLabelClassName,
              )}
            >
              {rightLabel}
            </div>
          )}
        </div>
      )}
      <div className="relative w-full">
        <input
          type={type === "password" && isPasswordVisible ? "text" : type}
          id={id}
          name={name}
          required={required}
          onChange={onChange}
          value={value}
          className={cx(
            "w-full rounded-md border-2 bg-transparent p-3 outline-none placeholder:text-base placeholder:font-normal placeholder:text-white-150",
            inputClassName,
            {
              "border-white-250 focus:border-white-150": !error,
              "border-red-400": error,
            },
          )}
          placeholder={placeholder}
          aria-label={placeholder}
        />
        {type === "password" && (
          <button
            type="button"
            className="group absolute right-2.5 top-1/2 -translate-y-1/2 transform outline-none"
            onClick={togglePasswordVisibility}
          >
            <EyeIcon className="group-focus:stroke-white-200" />
          </button>
        )}
      </div>
      <p className="mt-1 text-xs text-red-400">{error}</p>
    </div>
  );
};

export default Textfield;
