export interface Client {
  ID: number;
  contactNum: number;
  name: string;
  avatar: string;
  organization: string;
  assignedUser: string;
  isActive: boolean;
  creationDate: Date;
}
