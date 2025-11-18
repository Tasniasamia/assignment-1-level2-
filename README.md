# What are some differences between interfaces and types in TypeScript?

Interface এবং Type – দুটোকে আমরা অনেক সময় একই মনে করি, কিন্তু আসলে একই না
অনেকেই মনে করেন TypeScript এর interface এবং type একি জিনিস। কিন্তু প্রকৃতপক্ষে এদের মধ্যে বেশ কিছু পার্থক্য রয়েছে।

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


# What is the use of the keyof keyword in TypeScript? Provide an example

keyof হলো TypeScript-এর সবচেয়ে শক্তিশালী এবং গুরুত্বপূর্ণ ফিচারের একটি। এটি বিভিন্নভাবে ব্যবহার করা যায় এবং মূলত compile time-এ কাজ করে। অর্থাৎ, কোড run হওয়ার আগেই TypeScript তোমার টাইপগুলোকে পরীক্ষা করে ভুল ধরিয়ে দেয়।
উদাহরণ:
type User = { name: string; age: number };
type UserInfo = keyof User;
এখানে UserInfo → "name" | "age" return করবে।

keyof ব্যবহারের সবচেয়ে বড় সুবিধা হলো—
একই টাইপ বার বার declare করা লাগে না। interface বা type বারবার লিখে memory খরচ করার দরকার পড়ে না। এক জায়গায় টাইপ লিখে keyof দিয়ে সহজে keys বের করা যায়।
কেন enum-এর বদলে অনেক Senior Developer type + keyof ব্যবহার করেন?
TypeScript-এ enum এখনও পুরোপুরি stable নয় এবং কিছু জায়গায় এর আচরণ অদ্ভুত হতে পারে। এজন্য Senior Developer-রা আধুনিক ও নিরাপদ পদ্ধতি হিসেবে সাধারণত as const + typeof + keyof ব্যবহার করেন।
উদাহরণ:
const userRoles = {
    Admin: 'ADMIN',
    Editor: 'Editor',
    User: 'User'
} as const;

এখন as const ব্যবহারের ফলে userRoles immutable হয়ে যায় এবং এর প্রতিটি মান literal type হিসেবে আচরণ করে, অর্থাৎ:
ADMIN
Editor
User
exact literal হিসেবে থাকবে।
এভাবে টাইপ বের করা যায়:
(typeof userRoles)[keyof typeof userRoles]
এটি মূলত ADMIN | Editor | User টাইপকে নির্দেশ করে।
উদাহরণ:
var getPermission = function (
  role: (typeof userRoles)[keyof typeof userRoles]
) {
  return role === userRoles.Admin
    ? true
    : role === userRoles.User
    ? true
    : false;
};

