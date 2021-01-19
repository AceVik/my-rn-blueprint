export interface Session {
  uid: number;
  username: string;
  api_token: string;
  roles: string[];
  api_token_expires: number; // UNIX TS
}