export const isLogin = () => {
  if (document.cookie == "username=sp") return true;
  return false;
};
