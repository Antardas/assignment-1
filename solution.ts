type ValueType = number | string | boolean
const formatValue = (val: ValueType) => {

    if (typeof val === "number") {
        return val * 10
    } else if (typeof val === 'string') {
        return val.toUpperCase()
    } else if (typeof val === 'boolean') {
        return !val
    }
}

const getLength = (val: string | Array<any>): number => {
    if (Array.isArray(val)) {
        return val.length
    } else {
        return val.length
    }
}

class Person {
    private name: string
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

type BookRating = {
    title: string
    rating: number
}

const filterByRating = (books: BookRating[]): BookRating[] => {
    return books.filter((book: BookRating) => book.rating >= 4)
}

type User = {
    id: number, name: string, email: string, isActive: boolean
}

const filterActiveUsers = (users: User[]): User[] => {
    return users.filter((user: User) => user.isActive)
}

interface Book {
    title: string
    author: string
    publishedYear: number
    isAvailable: boolean
}

const printBookDetails = (book: Book) => {
    const { title, author, isAvailable, publishedYear } = book;
    return `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable ? "Yes" : "No"}`
}

type ArrType = Array<number | string>
const getUniqueValues = (arr1: ArrType, arr2: ArrType): ArrType => {
    const unique: ArrType = [];

    for (let i = 0; i < arr1.length; i++) {
        let found = false
        for (let j = 0; j < unique.length; j++) {
            if (arr1[i] === unique[j]) {
                found = true
                break;
            }
        }

        if (!found) {
            unique[unique.length] = arr1[i]
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let found = false
        for (let j = 0; j < unique.length; j++) {
            if (arr2[i] === unique[j]) {
                found = true
                break
            }
        }

        if (!found) {
            unique[unique.length] = arr2[i]
        }
    }

    return unique
}

type Product = {
    name: string, price: number, quantity: number, discount?: number
}
const calculateTotalPrice = (products: Product[]): number => {
    return products.reduce<number>((acc, cur) => {
        const price = cur.price * cur.quantity;
        const discount = cur.discount ? price * (cur.discount / 100) : 0
        return acc + (price - discount)
    }, 0)
}