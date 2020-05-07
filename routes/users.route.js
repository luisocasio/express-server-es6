import router from "express";

const route = router.Router();

route.get("/", (req, res) => {
  res.send("Welcome user!");
});

export default route;
