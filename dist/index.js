"use strict";
// Tipos Básicos
let age = 29;
const fistName = "Matheus";
const isValid = true;
let idk = 5;
idk = "12";
idk = true;
const ids = [1, 2, 3, 4];
const booleans = [true, false, true, false];
const names = ["Ana", "Estevão"];
// Tupla
const person = [1, "Ana"];
// Lista de Tuplas
const people = [
    [1, "Estevão"],
    [2, "Matheus"],
];
// Intersections
const productId = false;
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
// Type Assertions
const productName = "Boné";
let itemId1 = productName;
let itemId2 = productName;
