export function Button({ children, variant = "primary", style, as = "button", ...props }) {
  const baseStyle = {
    padding: "16px 32px",
    fontSize: "16px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "opacity 0.2s",
    backgroundColor: "transparent",
    color: "var(--black)",
    border: "1px solid var(--black)",
  };

  const variants = {
    primary: {
      backgroundColor: "var(--forest-green)",
      color: "var(--white)",
      border: "1px solid var(--forest-green)",
    },
    secondary: {
      backgroundColor: "var(--white)",
      color: "var(--black)",
      border: "1px solid var(--black)",
    },
    ghost: {
      backgroundColor: "var(--white)",
      color: "var(--black)",
      border: "1px solid transparent",
    },
  };

  const Component = as;

  return (
    <Component
      style={{
        ...baseStyle,
        ...(variants[variant] || variants.primary),
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
