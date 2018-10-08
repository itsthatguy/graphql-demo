# graphql-demo

```
npm install
node index.js
```

visit: http://localhost:4000/graphql

Use the following queries:

Order a hamburger with cheddar cheese, and no onions
```
{
  orderHamburger(cheese: "cheddar") {
    burger
    bun
    lettuce
    onions
    cheese
  }
}
```


Order a portobello burger without onions
```
{
  orderHamburger(type: "portobello") {
    burger
    bun
    cheese
  }
}
```
