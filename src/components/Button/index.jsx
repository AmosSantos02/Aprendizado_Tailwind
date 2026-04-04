export const Button = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "w-36 h-10",
    form: "bg-btn-dark w-[363px] lg:w-[450px]  h-10 rounded-none ",
    site: "bg-brand-purple w-[146px] h-10 rounded-[36px] text-lg font-graphik-bold",
    baixarAgora:
      "w-[363px] h-10 font-graphik-bol bg-linear-to-r from-brand-purple to-brand-pink ",
  };

  return (
    <button
      className={`flex justify-center items-center p-2.5 font-graphik text-white ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
