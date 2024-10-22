const login = require("./login");
const gender = require("./gender");
const age_between = require("./age_between");
const username_email = require("./username_email");
const username_email_fetch_method = require("./username_email_fetch_method");
const signup = require("./signup");
const { ageBetweenSchema, loginSchema, signUpSchema } = require("./schema");




const router_index = (fastify, opts, done) => {


  fastify.post("/gender", gender);

  fastify.post("/age_between", { schema: ageBetweenSchema }, age_between);

  fastify.post("/username_email", username_email);

  fastify.post("/username_email_fetch_method", username_email_fetch_method);

  fastify.post("/login", { schema: loginSchema }, login);
  fastify.post("/signup", { schema: signUpSchema }, signup);


  fastify.get("/sample", (req, res) => {
    res.send(200, "sample");
  });

  done();
};

module.exports = router_index;
