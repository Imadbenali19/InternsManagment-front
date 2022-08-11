const refreshTokenUrl = (refreshToken: string) => {
  const redirectUrl = `http://127.0.0.1:4200/authorized&grant_type=refresh_token&refresh_token=${refreshToken}`;
  return `http://localhost:9000/oauth2/token?client_id=client&redirect_uri=${redirectUrl}`;
};

export default refreshTokenUrl;
