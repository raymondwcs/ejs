# Express/EJS Example
This program demonstrates the following Express/EJS features:
1. Default server routing.
2. Scripting (conditions and loops) in EJS templates

## Getting Started

### Default server routing
The server responds to the incoming requests according the pathanme in the following order:
1. `/read`
2. `/cafe`
3. `\*` 

The `\*` route **redirects** incoming requests having pathnames other than `/read` and `/cafe` to `/read`

### Scripting in EJS templates
1. Condition is used in `views/details.ejs`
2. Loops are used in `views/list.ejs

### Installing
```
npm install
```
### Running
```
npm start
```
### Testing
Goto http://localhost:8099
