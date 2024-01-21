import { useForm } from "react-hook-form";

function LoginForm() {
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
        <h2 className="text-2xl font-bold mb-4 text-white">Inicia sesion en conecta</h2>
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
          Iniciar sesion 
        </button>
        <div className="mt-4 text-center text-white">
          <span>¿Aun no tienes una cuenta?</span>
          <a href="/register" className="text-blue-500 font-bold ml-1">
            Registrate aqui
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
