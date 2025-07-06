import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
}) => {
  const baseStyle = 'px-4 py-2 rounded-md font-medium transition-colors duration-200';
  const variantStyle =
    variant === 'secondary'
      ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      : 'bg-blue-600 text-white hover:bg-blue-700';

  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variantStyle}`}>
      {label}
    </button>
  );
};

export default Button;
