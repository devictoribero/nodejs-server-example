import express, { Request, Response } from "express";

const router = express.Router();

router.get("/reports", (req: Request, res: Response) => {
  // todo
  res.end();
});

router.get("/reports/download", (req: Request, res: Response) => {
  res.download(`public/download.txt`, (error) => {
    if (error) {
      res.status(404).end();
    }
  });
});

export const routerReports = router;
