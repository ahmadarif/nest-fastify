import * as dotenv from 'dotenv';
dotenv.config();

export class Env {
  static get(key: string): string {
    return process.env[key];
  }

  static getMultiLine(key: string): string {
    return process.env[key].replace(/\\n/g, '\n');
  }

  static getNumber(key: string): number {
    return parseInt(process.env[key], 10);
  }

  static getBoolean(key: string): boolean {
    return process.env[key] === 'true';
  }

  static getObject<T>(key: string): T {
    return JSON.parse(process.env[key]) as T;
  }
}
