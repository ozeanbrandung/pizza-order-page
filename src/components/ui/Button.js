//npm install classnames
import classNames from 'classnames';

const Button = ({onClick, className, outline, children}) => {
  //<button className={`button ${css ? css : ''}`}>{children}</button>
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        //если в пропсы передано св-во outline - применить класс
        'button--outline': outline,
        //'button--add': add,
      })}>
      {children}
    </button>
  );
};

export default Button;
