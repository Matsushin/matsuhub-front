import initializeBasicAuth from 'nextjs-basic-auth';
const users = [
  {
    user: process.env.NEXT_PUBLIC_USER,
    password: process.env.NEXT_PUBLIC_PASS
  }
];

export default initializeBasicAuth({
  users: users
});
