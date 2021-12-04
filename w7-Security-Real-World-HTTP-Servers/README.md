# Lecture - Security and Real World HTTP Servers
[Lecture Slides](https://github.com/letsandeepio/LHL_flex_oct-18-21/blob/main/w7-Security-Real-World-HTTP-Servers/HTTP%20%26%20Real%20World%20Servers.pdf)

[Notes & Code](https://github.com/letsandeepio/LHL_flex_oct-18-21/tree/main/w7-Security-Real-World-HTTP-Servers)


👋🏻 Thanks for coming to the lecture. All topics covered are in the attached slides. 

Lecture Outline

Security issue #1 - Passwords save in plain text can be a huge security risk!
Solution: Hashing (for e.g. using BcryptJS)


Security issue #2 - Cookies save in plain text can be a huge security risk!
Solution: Encryption (for e.g. using cookie-session instead of cookie-parser)

Security issue #3 - Cookies can be stolen
Solution: https 

Man in the middle attack - how they work and how to avoid it.

We did quick overview of the following as well:

1. Restful API conventions
2. CRUD & REST conventions
3. Creating routes for our App (for our previous SpaceX repo)

We also discussed about the middlewares and how they work. 

Demo App

We coded together a SpaceX demo app which has dashboard to launch rockets 🚀

* We implemented login, logout functionality using cookie-parser and plain text passwords.
* We protected our `/dashboard` and `/launch` routes from the unauthorized users.
* We then switched from cookie-parser to cookie-session to encrypt our cookies.
* We also used bcryptjs to hash our passwords using salts.
*  [Bonus] As a stretch after the main lecture, we made our own middleware to protect our routes. 


Some useful resources:

1. https://www.npmjs.com/package/cookie-parser

2. https://www.npmjs.com/package/bcrypt

3. https://expressjs.com/en/guide/writing-middleware.html
