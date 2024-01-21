import { useForm } from "react-hook-form";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    // Lógica para manejar el envío del formulario
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <form onSubmit={onSubmit} className="w-full max-w-sm bg-gray-800 p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-white">Crear cuenta</h2>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Nombre:</label>
          <input
            type="text"
            {...register("firstName", { 
              required: "Nombre inválido",
            })}
            className="w-full border border-gray-300 p-2 rounded bg-black text-white"
            placeholder="Tu nombre"
          />
          {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Apellido:</label>
          <input
            type="text"
            {...register("lastName", { 
              required: "Apellido inválido",
            })}
            className="w-full border border-gray-300 p-2 rounded bg-black text-white"
            placeholder="Tu apellido"
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Correo:</label>
          <input
            type="email"
            {...register("email", {
              required: 'Email requerido',
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            className="w-full border border-gray-300 p-2 rounded bg-black text-white"
            placeholder="conecta@correo.com"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Contraseña:</label>
          <input
            type="password"
            {...register("password", { 
              required: "Contraseña inválida",
            })}
            className="w-full border border-gray-300 p-2 rounded bg-black text-white"
            placeholder="*********"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-white hover:bg-gray-500 text-black font-bold py-2 px-4 rounded"
        >
          Crear cuenta
        </button>
        <div className="mt-4 text-center text-white">
          <span>¿Ya tienes una cuenta?</span>
          <a href="/login" className="text-blue-500 font-bold ml-1">
            Inicia sesión
          </a>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
