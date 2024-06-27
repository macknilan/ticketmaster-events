// COMPONENT FOR SIGN UP FORM

import { useForm } from "@tanstack/react-form";

const SignUpForm = () => {
  // FORM HOOK
  const form = useForm({
    defaultValues: {
      name: "",
      age: "",
      address: "",
      zipcode: "",
      phone: "",
    },
    onSubmit: ({ value }) => {
      // TODO: HACER ALGO CON LOS DATOS
      console.log(value);
    },
  });

  const handleClearClick = () => {
    form.reset();
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <form.Field
                  name="name"
                  validators={{
                    onChangeAsyncDebounceMs: 500,
                    onSubmitAsync: ({ value }) => {
                      if (value.length < 6) {
                        return "Name must be at least 6 characters long";
                      }
                    },
                  }}
                  children={(field) => (
                    <div>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="name"
                        name={field.name}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="John Doe"
                        required=""
                        type="text"
                        value={field.state.value}
                      />
                      {field.state.meta.errors ? (
                        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                          {field.state.meta.errors}
                        </p>
                      ) : null}
                    </div>
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your age
                </label>
                <form.Field
                  name="age"
                  validators={{
                    onChangeAsyncDebounceMs: 500,
                    onSubmitAsync: ({ value }) => {
                      // VALIDATE IF THE VALUE IS BETWEEN 18 AND 90
                      if (
                        typeof value !== "number" ||
                        value < 18 ||
                        value > 90
                      ) {
                        return "Age must be a number between 18 and 90";
                      }
                    },
                  }}
                  children={(field) => (
                    <div>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="age"
                        name={field.age}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="18"
                        required=""
                        type="number"
                        value={field.state.value}
                      />
                      {field.state.meta.errors ? (
                        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                          {field.state.meta.errors}
                        </p>
                      ) : null}
                    </div>
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your address
                </label>
                <form.Field
                  name="address"
                  validators={{
                    onChangeAsyncDebounceMs: 500,
                    onSubmitAsync: ({ value }) => {
                      if (value.length < 10) {
                        return "The address must be at least 10 characters long";
                      }
                    },
                  }}
                  children={(field) => (
                    <div>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="address"
                        name={field.address}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Ave whatever 123"
                        required=""
                        type="text"
                        value={field.state.value}
                      />
                      {field.state.meta.errors ? (
                        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                          {field.state.meta.errors}
                        </p>
                      ) : null}
                    </div>
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="zipcode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your zip code
                </label>
                <form.Field
                  name="zipcode"
                  validators={{
                    onChangeAsyncDebounceMs: 500,
                    onSubmitAsync: ({ value }) => {
                      // VALIDATE IF THE VALUE IS A NUMBER
                      let parsedValue = parseInt(value);
                      if (
                        isNaN(parsedValue) ||
                        !Number.isInteger(parsedValue)
                      ) {
                        return "Zip code must be a number";
                      }
                      // CONVERT THE VALUE TO STRING AND CHECK IF THE LENGTH IS LESS THAN 2
                      if (value.toString().length < 6) {
                        return "Zip code must be at least 6 characters long";
                      }
                    },
                  }}
                  children={(field) => (
                    <div>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="zipcode"
                        name={field.zipcode}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="12345"
                        required=""
                        type="number"
                        value={field.state.value}
                      />
                      {field.state.meta.errors ? (
                        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                          {field.state.meta.errors}
                        </p>
                      ) : null}
                    </div>
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your phone number
                </label>
                <form.Field
                  name="phone"
                  validators={{
                    onChangeAsyncDebounceMs: 500,
                    onSubmitAsync: ({ value }) => {
                      if (value.length < 10) {
                        return "Phone must be at least 10 characters long";
                      }
                    },
                  }}
                  children={(field) => (
                    <div>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="phone"
                        name={field.phone}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="123456789"
                        required=""
                        type="text"
                        value={field.state.value}
                      />
                      {field.state.meta.errors ? (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                          {field.state.meta.errors}
                        </p>
                      ) : null}
                    </div>
                  )}
                />
              </div>

              <div className="container flex flex-col gap-4 mx-auto md:flex-row">
                <button
                  type="button"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={handleClearClick}
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
