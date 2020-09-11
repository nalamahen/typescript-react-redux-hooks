export interface ICurrentUser {
  id?: string;
  createdAt?: ICreatedAt;
  displayName: string;
  email: string;
}

interface ICreatedAt {
  seconds: number;
  nanoseconds: number;
}

export interface ICollection {
  id: number;
  title: string;
  routeName: string;
  items: IItem;
}

export interface IItem {
  id?: number;
  name: string;
  imageUrl: string;
  price: number;
}
