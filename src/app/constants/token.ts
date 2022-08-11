const tokenUrl = (code: string) => {
  const redirectUrl = `http://127.0.0.1:4200/authorized&grant_type=authorization_code&code=${code}`;
  return `http://localhost:9000/oauth2/token?client_id=client&redirect_uri=${redirectUrl}`;
};

export default tokenUrl;
