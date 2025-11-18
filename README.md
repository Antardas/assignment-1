### নিচে Union ও Intersection টাইপ এর একটি এক্সাম্পল দেওয়া হলো নিচে 

Union টাইপ ব্যবহার করা হয় যখন আমরা দুটি বা তার ওদিক ডাটা টাইপ এর কোনো একটি ডাটা টাইপকে স্যাটিসফাই করি.

যেমন ধরি একটা লাইব্রেরীর বই ধার নিতে একজন টিচার অথবা স্টুডেন্ট. এখন যদি আমরা Typescript এর ভাষায় লিখি 

```ts
type Student = {
    name: string
    group: string
}
type Teacher ={
    name: string
    expertise: string
}
type BookBorrower = Teacher | Student
```

এখানে BookBorrower হলো union type।

মানে তার এখন বই ধার নিতে অব্যশই Student অথবা Teacher হতে হবে।

#### Intersection
Intersection ব্যবহার করা হয় দুটো বা তার অধিক টাইপকে এক সাথে যুক্ত করা।  এটি করা হয় (&) এই চিহ্নটির মাধ্যমে

উদাহরণ হিসাবে ধরলে কোনো লাইব্রেরি এর বই ধার নিতে student এর অব্যশই id কার্ড থাকতে হবে।  
যদি আমরা এটি typescript এর কোডের ভাষায় লিখি

```ts
type Student = {
    name: string
    group: string
}

type Card =  {
    id: string
    validDate: string
}

type EligibleStudent= Student & Card;
```


### নিচে Enum ব্যবহার করে একটি এক্সাম্পল দেওয়া হলো 

Enum  হল একটি নির্দিষ্ট মানের সেটকে একটি নাম দিয়ে প্রকাশ করা।  এটি ব্যবহার করা হয় যখন কোনো একটা ভ্যারিয়েবল / key - value নির্দিষ্টি কিছু মান থাকে। যেমন আমরা একটা box ফ্যাক্টরি এর উদাহরণ দেখতে পারি।  ধরি একটা ফ্যাক্টরি শুধু Rectangle, Square Hexagon বক্স বানায় এবং নির্দির্ষ্ট কিছু ওজনের কাগজ দিয়ে 

```ts
enum BoxType {
    Hexagon = "hexagon",
    Square = "square",
    Rectangle = "rectangle"
}

enum PaperWeight {
    XL = 150,
    S = 65,
    M = 110
}

```

PaperWeight => এখানে আমরা numeric enum ব্যবহার করেছি। প্রতিটি কাগজের ওজন (gsm) সংখ্যার মাধ্যমে প্রকাশ করা হয়েছে।

BoxType => এখানে আমরা string enum ব্যবহার করেছি। প্রতিটি বক্সের টাইপেকে   একটি স্ট্রিং মান দিয়ে প্রকাশ করা হয়েছে।