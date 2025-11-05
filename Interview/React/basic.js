what is react?
react is a javascript library for building user interfaces. it allows developers to create reusable ui components and manage the state of their applications efficiently. react uses a virtual dom to optimize rendering performance and provides a declarative approach to building uis, making it easier to reason about and maintain code. it is widely used for developing single-page applications and mobile apps.

you can create a single page application(SPA) which improve user experince(baar baar refresh nhi krna padta)
you can create reusable components
react has broader community support
build mobile app using react native
react is fast as it uses virtual dom

Virtual DOM =>
    when react renders this component, it will go through the process of diffling.(checking for changes) 
and reconcilation(updating DOM). 

package.json :-
| Section                           | Purpose                 |
| --------------------------------- | ----------------------- |
| `name`, `version`, `description`  | Project Identity        |
| `main`, `type`                    | Code Entry Info         |
| `scripts`                         | Custom Commands         |
| `dependencies`, `devDependencies` | Required Libraries      |
| `keywords`, `author`, `license`   | Metadata for publishing |
| `repository`, `bugs`, `homepage`  | Project Links           |

dependencies(Ye section me wo libraries listed hoti hain jo runtime par project ke liye zaruri hoti hain.) and devdependencies(➡️ Matlab:
Jab tum apna code likh rahe ho, test kar rahe ho, ya build bana rahe ho — tab ye libraries kaam karti hain.
Lekin jab app deploy ho jata hai (live server par), tab inki zarurat nahi hoti. jaise nodemon, jest etc.) are listed here.
eslint – syntax errors aur code style check karta hai
prettier – code formatting ke liye
4. 🏗️ Build Tools / Bundlers
👉 Ye source code ko optimize karke deployable version banate hain.
Example:
webpack, vite, babel


vite.config.js
📁 vite.config.js kya hota hai?
Ye ek configuration file hoti hai jisme hum batate hain:
project ka setup kaise chalega,
plugins kaunse lagenge,
environment variables kaise use honge,
aur build ke rules kya honge.
It’s like a “settings file” for Vite projects.

package-lock.json ek automatically generated file hai jab tum npm install chalate ho.

Ye file exact version, dependency tree, aur source (kahan se install hua) record karti hai
— taaki har developer ke system me same versions install ho.


Har npm package ka version 3 parts me likha hota hai:
MAJOR.MINOR.PATCH(18.0.2)
⚙️ Symbols (^, ~, etc.) — ye kya karte hain?

Ye “version range” define karte hain — matlab npm ko batate hain ki kaunse versions tak update karna safe hai.
🔹 1️⃣ Caret (^)
"react": "^18.2.0"


👉 Matlab:

Minimum version: 18.2.0

Allow update until next MAJOR version (but not beyond)
🔹 1️⃣ Caret (^)
✅ Allowed: 18.2.1,18.3.0,18.9.5
❌ Not allowed: 19.0.0 (new major version)

🔹 2️⃣ Tilde (~)
"react": "~18.2.0"
👉 Matlab:
Allow only PATCH updates
✅ Allowed: 18.2.1,18.2.2
❌ Not allowed: 18.3.0,19.0.0
📘 In simple words:
“Minor version fix raho, sirf patch updates lo.”