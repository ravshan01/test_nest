export default interface IUser {
  id: number;
  login: string;
  password: string;
  name: string;
  country: string;
  created_at: Date;
  deleted_at: Date;
}
