import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("<div>Root Page 입니다.</div>");
});

export default router;
