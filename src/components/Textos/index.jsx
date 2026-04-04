export const Texto = ({
  children,
  type = "",
  color = "black",
  className = "",
}) => {
  const colors = {
    black: "text-title",
    roxo: "text-brand-purple",
    white: "text-white",
  };
  if (type === "h1") {
    return (
      <h1
        className={`font-graphik-bold text-[28px] leading-8 ${colors[color]} ${className}`}
      >
        {children}
      </h1>
    );
  }

  if (type === "h1-menor") {
    return (
      <h1
        className={`font-graphik font-medium text-[25px] leading-8 ${colors[color]} ${className}`}
      >
        {children}
      </h1>
    );
  }

  if (type === "h3") {
    return (
      <h3
        className={`font-graphik font-graphik-bold text-[25px] text-center leading-[30px] ${colors[color]} ${className}`}
      >{children}</h3>
    );
  }
  

  if (type === "termo") {
    return (
      <p
        className={`font-graphik leading-[22px] ${colors["roxo"]} ${className}`}
      >
        {children}
      </p>
    );
  }

  if (type === "desc") {
    return (
      <p
        className={`font-graphik leading-[22px] ${colors["white"]} ${className}`}
      >
        {children}
      </p>
    );
  }

  if (type === "desc-card") {
    return <p className={`font-graphik text-lg ${className}`}>{children}</p>;
  }
};
