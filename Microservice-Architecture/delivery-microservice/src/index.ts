import {
    PORT,
    DATABASE_URL,
    JWT_SECRET,
    JWT_EXPIRES_IN_DAYS,
    ENVIRONMENT,
    REDIS_URL,
  } from './core/environment';
  
  export const start = async () => {
    if (!PORT) {
      throw new Error('Port must be defined');
    }
  
    if (!DATABASE_URL) {
      throw new Error('database url must be defined');
    }
  
    if (!JWT_SECRET) {
      throw new Error('jwt secret must be defined');
    }
  
    if (!JWT_EXPIRES_IN_DAYS) {
      throw new Error('jwt expires in days be defined');
    }
  
    if (!ENVIRONMENT) {
      throw new Error('environment must be defined');
    }
  
    if (!REDIS_URL) {
      throw new Error('mail redis url must be defined');
    }
  };
  