import crypto from 'crypto';

export const jwtConstants = {
  secret: crypto.randomBytes(32).toString('base64'),
};
