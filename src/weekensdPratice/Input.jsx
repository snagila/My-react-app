const Input = ({ type, id, placeholder }) => {
  // this button way is better way of passing props
  // const {type,id,placeholder}=props
  // logic
  return (
    <>
      {/* components are reusuable */}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="form-control mb-2"
      />
    </>
  );
};

export default Input;
