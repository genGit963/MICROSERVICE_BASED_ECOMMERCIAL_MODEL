import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";

const app = express();

app.use(cors());
app.use(express.json());

// proxy setting
app.use("/customer", proxy('http://localhost:4000'))
app.use("/shopping", proxy('http://localhost:4001'))
app.use("/", proxy('http://localhost:4002')) // products

app.listen(3999, () => console.log("3999: API proxy gateway Portal on...."));
