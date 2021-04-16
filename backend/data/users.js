import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Herve",
    email: "hervnzig1@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Lauric",
    email: "lauric@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
