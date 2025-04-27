// Type
type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
};

const user: User = {
  firstName: "Ana",
  age: 29,
  email: "Carol@.com",
  orders: [{ productId: "iphone", price: 4000 }],
};

// Unions
type Author = {
  books: string[];
};

const author: Author & User = {
  age: 15,
  books: ["2", "5", "12"],
  email: "author@gmail.com",
  firstName: "Joseph",
  orders: [
    { productId: "book1", price: 25 },
    { productId: "book2", price: 60 },
  ],
  password: "123",
};

// Interfaces
interface UserInterface {
  readonly firstName: string;
  email: string;
}

const emailUser: UserInterface = {
  email: "Matheus@gmail.com",
  firstName: "Matheus",
};
