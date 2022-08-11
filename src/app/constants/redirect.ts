const redirectUrl = () => {
  const redirectUri = 'http://127.0.0.1:4200/authorized';
  return `http://localhost:9000/oauth2/authorize?response_type=code&client_id=taco-admin-client&scope=openid&redirect_uri=${redirectUri}`;
};

export default redirectUrl;
