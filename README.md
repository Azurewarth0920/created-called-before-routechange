# created-called-before-routechange (For bug reporting)

## Setup
```
yarn install
yarn serve
```

## Reproduction
1. Access to `/a`
2. Click the link to access `/b`
3. Console will print out
```
// first time access to /a
layout a
page a

// accessing to /b
layout b
page a
page b
```
↑ The created hook in page a is wrongly called when layout changes from `layout a` to `layout b`
