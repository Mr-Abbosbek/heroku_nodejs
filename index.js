const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 7777;
const appRouter = require("./router");

app.use(bodyParser.json());

const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Bosh sahifa");
});


// app.get('/api/product', (req, res)=>{
//   let {name = '', category = '', offset = 0, limit = 10} = req.query
//   console.log("BEFORE TRIM", name, category);
//   name = name.toLowerCase()
//   category = category.toLowerCase()
//   console.log("AFTER TRIM", name, category);
//   if(!limit) {
//       limit = 10
//   }

//   if(!name && !category) {
//       // res.json(products.products)
//       console.log("not given");
//       let found = products.products
//       let count = found.slice(offset, limit)
//       res.json({
//           products: count,
//           count: found.length

//       })

//   } else if( !name && category ) {
//       let found = products.products.filter(el=> el.category == category)
//       console.log('category given');
//       let count = found.slice(offset, limit)
//       res.json({
//           products: count,
//           count: found.length
//       })
//       return
//   } else if (name && !category) {
//       let found = products.products.filter(el=> el.title.toLowerCase().includes(name))
//       console.log('name given');
//       let count = found.slice(offset, limit)
//       res.json({
//           products: count,
//           count: found.length
//       })
//       return
//   } else {
//       let found = products.products.filter(el=> el.title.toLowerCase().includes(name) && el.category == category)
//       console.log('all given');
//       let count = found.slice(offset, limit)
//       res.json({
//           products: count,
//           count: found.length
//       })
//   }
// })

app.use("/api", appRouter);

app.listen(port, () =>
  console.log(`Database connected in http://localhost:${port}`)
);
