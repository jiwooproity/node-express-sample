import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json([{ id: 1, title: "Avengers" }]);
});

export default router;
