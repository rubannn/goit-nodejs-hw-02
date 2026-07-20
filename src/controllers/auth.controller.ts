import type { Request, Response } from "express";

export function register(_req: Request, res: Response) {
  res.status(501).json({ error: "Not implemented yet" });
}

export function login(_req: Request, res: Response) {
  res.status(501).json({ error: "Not implemented yet" });
}

export function refresh(_req: Request, res: Response) {
  res.status(501).json({ error: "Not implemented yet" });
}

export function logout(_req: Request, res: Response) {
  res.status(501).json({ error: "Not implemented yet" });
}

export function me(_req: Request, res: Response) {
  res.status(501).json({ error: "Not implemented yet" });
}
