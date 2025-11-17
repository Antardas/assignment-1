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
    expertise: ''
}
type BookBorrower = Teacher | Student
```

এখানে BookBorrower হলো union type।

মানে তার এখন বই ধার নিতে অব্যশই Student অথবা Teacher হতে হবে।
