# Codewars Kata

> [Codewars](https://codewars.com) is an educational community for computer programming. On the platform, software developers train on programming challenges known as kata.
> These discrete programming exercises train a range of skills in a variety of programming languages, and are completed within an online integrated development environment.


This repo is a collection of my solutions to Codewars challenges (kata). Every solution is written in JavaScript. Every day, I write and push one solution at the very least.

---

The methods available to accomplish each solution vary from kata to kata, as not every kata is written to use the most up-to-date [NodeJS](https://nodejs.dev/) run-time. 
For example, many kata leverage NodeJS version 14.0.0. If I wanted to solve such a kata using `String.protoytype.replaceAll()`, I could not because the method wasn't made available in NodeJS until version 15.0.0. 

The next logical step would be to just use `String.prototype.replace()` and pass in a regex pattern using the global (`g`) flag as an argument.

However, as of now, not a single solution of mine makes use of regex, even for kata that call for regex to be used. 
This is intentional, as it creates opportunities that require using methods I do not regularly use or have never used, 
thus offering a chance to deepen my understanding of these methods and explore new ways in which they can be used.

---

By no means do I profess my answers to these problems to be the most performant, most creative, or the best in any shape or form. 
As such, I am eager to hear criticisms, improvements, or answer any questions regarding my solutions.
