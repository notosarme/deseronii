const FormField = ({ id, label, type, register, required }) => {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        {...register(id, { required })}
      />
    </div>
  );
};

export default FormField;
