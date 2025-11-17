# What are some differences between interfaces and types in TypeScript?

Interface এবং Type – দুটোকে আমরা অনেক সময় একই মনে করি, কিন্তু আসলে একই না
অনেকেই মনে করেন TypeScript এর interface এবং type একি জিনিস। কিন্তু প্রকৃতপক্ষে এদের মধ্যে বেশ কিছু পার্থক্য রয়েছে।
Interface
Interface সাধারণত object type বা data-এর structure তৈরি করার জন্য ব্যবহার করা হয়।
 এটি সাধারণত single type, array type, বা primitive type নির্ধারণ করার জন্য ব্যবহার হয় না।
 Interface আরেকটি interface-কে extend করতে পারে।
উদাহরণ:
interface Person {
  name: string;
  age: number;
}

interface Details extends Person {
  address: string;
}

Type
Type দিয়ে আমরা primitive, collection, সব ধরনের ডেটার structure তৈরি করতে পারি।
 Type প্রিমিটিভ এবং নন-প্রিমিটিভ – দু’ধরনের ডেটার সাথেই কাজ করে।
 এটির নির্দিষ্ট কোনো structure থাকে না, বিভিন্ন ধরনের shape তৈরি করা যায়।
 Type-ও interface-এর মতো extend করা যায়।
উদাহরণ:
type Name = string;
type Age = number;
type User = number[];

type ObjectType = {
  name: string;
  age: number;
};

const tupleData: [string, number] = ["Isha", 23];

Production-এ কোনটা বেশি ব্যবহৃত হয়?
প্রোডাকশনে সাধারণত interface বেশি ব্যবহৃত হয়, কারণ backend থেকে যে ডেটা আসে সেগুলো সাধারণত object আকারে থাকে। তাই object-এর structure define করতে interface বেশি সুবিধাজনক।
