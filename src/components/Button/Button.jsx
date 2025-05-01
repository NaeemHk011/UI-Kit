import { ArrowPathIcon } from '@heroicons/react/24/outline';





const Button = ({ variant = 'primary', size = 'medium', disabled = false, loading = false, className = '', color, type = 'button', children, ...props }) => {
  const variantStyles = {
    primary: `text-white ${color ? `bg-[${color}] hover:bg-[${color}]` : 'bg-[#536BB8] hover:bg-[#6A80C4]'} transition-all duration-200`,
    secondary: `bg-white border-2 ${color ? `border-[${color}] text-[${color}] hover:bg-[${color}] hover:text-white` : 'border-[#536BB8] text-[#536BB8] hover:bg-[#536BB8] hover:text-white'} transition-all duration-200`,
    outline: `bg-transparent border-2 ${color ? `border-[${color}] text-[${color}] hover:bg-[${color}] hover:text-white` : 'border-[#536BB8] text-[#536BB8] hover:bg-[#536BB8] hover:text-white'} transition-all duration-200`,
    danger: `text-white ${color ? `bg-[${color}] hover:bg-[${color}]` : 'bg-[#EF4444] hover:bg-[#DC2626]'} transition-all duration-200`,
  };
  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };
  const baseStyles = 'rounded-md font-semibold focus:ring-2 focus:ring-[#536BB8] focus:ring-opacity-50 flex items-center justify-center';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const loadingStyles = loading ? 'cursor-wait' : '';
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${loadingStyles} ${className} transform hover:scale-105 active:scale-95`;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={classes}
      {...props}
    >
      {loading && <ArrowPathIcon className="w-5 h-5 mr-2 animate-spin" />}
      {children}
    </button>
  );
};

export default Button;







