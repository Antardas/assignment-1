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