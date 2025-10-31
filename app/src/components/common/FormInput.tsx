import type { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  maxLengthText?: string;
  className?: string;
}

export default function FormInput({
  id,
  label,
  maxLengthText,
  className,
  ...inputProps
}: FormInputProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <label htmlFor={id} className="text-xs font-medium text-neutral-600">
          {label}
        </label>
        {maxLengthText && (
          <span className="text-right text-neutral-600 text-xs font-medium">{maxLengthText}</span>
        )}
      </div>

      <input
        id={id}
        {...inputProps}
        className={twMerge(
          'w-full h-12 p-4 bg-gray-200 rounded-md placeholder-neutral-500',
          className,
        )}
      />
    </div>
  );
}
