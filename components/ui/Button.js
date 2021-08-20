const Button = ({
  children,
  uppercase = false,
  px = 8,
  py = 4,
  bg,
  textSize,
  textColor = 'text-white',
  hoverBgEffect,
  hoverTextEffect,
  btnType,
  href,
}) => {
  const styles = {
    btn: `flex items-center justify-center px-${px} py-${py} font-bold ${
      uppercase ? 'uppercase' : ''
    } ${textSize && textSize} transition-all duration-300 ease-in-out ${
      bg && bg
    } ${hoverBgEffect && hoverBgEffect} hover:${
      hoverTextEffect ? 'text-main' : ''
    } ${textColor}`,
  };

  if (btnType === 'button') {
    return (
      <button type="button" className={`${styles.btn}`}>
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={`${styles.btn} cursor-pointer`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Button;
