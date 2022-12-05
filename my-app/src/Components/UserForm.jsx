import React from "react";
import { useForm } from "react-hook-form";
const PaintUseForm = (props) => {
  const {
    register, formState: { errors }, handleSubmit, setValue} = useForm({
    defaultValues: props.currentUser,
  });
  setValue("name", props.currentUser.name);
  setValue("userName", props.currentUser.userName);
  
  const onSubmit = (data, e) => {
    props.msg === 'Editar' ?    
    props.updateUser(props.currentUser.id, data) 
    :
    props.addUsers(data)
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="Form-group">
        <h2 className="text-align-center">{props.msg} usuario</h2>
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          className="form-control"
          {...register("name", { required: true })}
        />
        <div>
          {errors.name && errors.name.type === "required" && (<span>Campo requerido</span>)}
        </div>
      </div>
      <div className="Form-group">
        <label htmlFor="">Nombre de usuario</label>
        <input
          type="text"
          className="form-control mb-2"
          {...register("userName", { required: true })}
        />
        <div >
          {errors.userName && errors.userName.type === "required" && (<span>Campo requerido</span>)}
        </div>
      </div >
      <button className="btn btn-primary mb-2">{props.msg}</button>
    </form>
  );
};

export default PaintUseForm;
