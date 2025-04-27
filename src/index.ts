// Tipos Básicos
let age: number = 29;
const fistName: string = "Matheus";
const isValid: boolean = true;
let idk: any = 5;

idk = "12";
idk = true;

const ids: number[] = [1, 2, 3, 4];
const booleans: boolean[] = [true, false, true, false];
const names: string[] = ["Ana", "Estevão"];

// Tupla
const person: [number, string] = [1, "Ana"];

// Lista de Tuplas
const people: [number, string][] = [
  [1, "Estevão"],
  [2, "Matheus"],
];

// Intersections
const productId: string | number | boolean = false;

//Enum
enum Direction {
  Up = 1,
  Down = 2,
}

const direction = Direction.Up;

// Type Assertions
const productName: any = "Boné";

let itemId1 = productName as string;
let itemId2 = <string>productName;
