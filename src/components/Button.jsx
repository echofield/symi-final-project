export function Button({ children, variant = 'primary', style = {}, ...props }) {
  const styles = {
    primary: {
      backgroundColor: '#1B4332',
      color: '#ffffff',
      border: 'none',
    },
    secondary: {
      backgroundColor: '#ffffff',
      color: '#000000',
      border: '1px solid #000000',
    },
  };

  return (
    <button
      style={{
        ...styles[variant],
        padding: '16px 32px',
        fontSize: '16px',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'opacity 0.2s',
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}


