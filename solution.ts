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

type Book = {
    title: string
    rating: number
}

const filterByRating = (books: Book[]): Book[] => {
    return books.filter((book: Book) => book.rating >= 4)
}

type User = {
    id: number, name: string, email: string, isActive: boolean
}