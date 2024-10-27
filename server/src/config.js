import mongoose from "mongoose";
const colors = {
  resetColor: "\x1b[0",
  fgRed: "\x1b[31m",
  fgGreen: "\x1b[32m",
  fgYellow: "\x1b[33m",
};
const statusTask = ["pending", "completed", "in-progress"];

const seedDataTasks = [
  {
    title: "Crear un CRM",
    description: "Crear un CRM para la empresa con ReactJS",
    date: new Date(),
    status: "pending",
    img: null,

  },
  {
    title: "Crear un ERP",
    description: "Crear un ERP para la empresa con ReactJS",
    date: new Date(),
    status: "pending",
    img: null,
  },
  {
    title: "Crear un CMS",
    description: "Crear un CMS para la empresa con ReactJS",
    date: new Date(),
    status: "pending",
    img: null,
  },
  {
    title: "Crear un PWA",
    description: "Crear un PWA para la empresa con ReactJS",
    date: new Date(),
    status: "pending",
    img: null,
  },
  {
    title: "Crear un MPA",
    description: "Crear un MPA para la empresa con ReactJS",
    date: new Date(),
    status: "completed",
    img: null,
  },
  {
    title: "Crear un SPA",
    description: "Crear un SPA para la empresa con ReactJS",
    date: new Date(),
    status: "in-progress",
    img: null,
  },
  {
    title: "Crear un SSR",
    description: "Crear un SSR para la empresa con ReactJS",
    date: new Date(),
    status: "completed",
    img: null,
  },
  {
    title: "Crear un SSG",
    description: "Crear un SSG para la empresa con ReactJS",
    date: new Date(),
    status: "pending",
    img: null,
  },
  {
    title: "Crear un JAMStack",
    description: "Crear un JAMStack para la empresa con ReactJS",
    date: new Date(),
    status: "pending",
    img: null,
  },
  {
    title: "Crear un MERN",
    description: "Crear un MERN para la empresa con ReactJS",
    date: new Date(),
    status: "pending",
    img: null,
  },
  {
    title: "Crear un MEAN",
    description: "Crear un MEAN para la empresa con ReactJS",
    date: new Date(),
    status: "pending",
    img: null,
  },
  {
    title: "Crear un MEVN",
    description: "Crear un MEVN para la empresa con ReactJS",
    date: new Date(),
    status: "pending",
    img: null,
  },
  {
    title: "Crear un MERNG",
    description: "Crear un MERNG para la empresa con ReactJS",
    date: new Date(),
    status: "completed",
    img: null,
  },
];

const seedDataUsers = [
  { 
    _id: new mongoose.Types.ObjectId(),
    username: "sparky",
    email: "sparky@gmail.com",
    password: "12345678",
    role: "admin",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    username: "reina",
    email: "reina@gmail.com",
    password: "12345678",
    role: "user",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    username: "dado",
    email: "dado@gmail.com",
    password: "12345678",
    role: "user",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    username: "lola",
    email: "lola@gmail.com",
    password: "12345678",
    role: "user",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    username: "Samurai",
    email: "samurai@gmail.com",
    password: "12345678",
    role: "user",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    username: "Ninja",
    email: "ninja@gmail.com",
    password: "12345678",
    role: "user",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    username: "Hacker",
    email: "hacker@gmail.com",
    password: "12345678",
    role: "user",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    username: "Programmer",
    email: "programmer@gmail.com",
    password: "12345678",
    role: "admin",
  }
  
];
export { colors, statusTask, seedDataTasks, seedDataUsers };
