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
