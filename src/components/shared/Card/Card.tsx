type CardProps = {
    classNames?: string;
    children?: JSX.Element[] | JSX.Element;
    name?: string;
  };
  
  const Card = ({
    children,
    classNames,
  }: CardProps) => {
  
  
    return (
      <div className={`shadow-lg rounded-lg bg-white ${classNames && classNames}`}>
        {children}
      </div>
    );
  };
  
  export default Card;
  