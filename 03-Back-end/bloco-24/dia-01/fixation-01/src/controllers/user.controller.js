const UserService = require('../services/user.service');

const error500Message = 'Algo deu errado';

const getAll = async (_req, res) => {
  try {
    const users = await UserService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (id) => {
  const user = await User.findByPk(id);

  return user;
};

const getByIdAndEmail = async (id, email) => {
  const user = await User.findOne({ where: { id, email } });

  return user;
};

const createUser = async (fullName, email) => {
  const newUser = await User.create({ fullName, email });

  return newUser;
};

const updateUser = async (id, fullName, email) => {
  const [updatedUser] = await User.update(
    { fullName, email },
    { where: { id } },
  );

  console.log(updatedUser); // confira o que é retornado quando o user com o id é ou não encontrado;  
  return updatedUser;
};

const deleteUser = async (id) => {
  const user = await User.destroy(
    { where: { id } },
  );

  console.log(user); // confira o que é retornado quando o user com o id é ou não encontrado;
  return user;
};

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
};