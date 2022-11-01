export const Button: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, href, className, ...rest }) => {
  return (
    <a
      href={href}
      className={`flex justify-between items-center font-bold px-3 py-3.5 rounded-md bg-indigo-800 hover:bg-indigo-900 transition-colors text-white gap-2 ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </a>
  );
};
