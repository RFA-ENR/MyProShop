import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Yilang BB",
    email: "yibb@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Rafa BB",
    email: "rabb@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
