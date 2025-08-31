export const createUser = (request, reply) => {
  const { name, email, password } = request.body;

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
  };

  reply.status(201).send(newUser);
};
