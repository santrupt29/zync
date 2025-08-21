export const protectRoute = (req, res, next) => {
  if (!req.auth().isAuthenticated) {
    return res.status(401).json({ message: "Unauthorized - You must be logged in to access this route" });
  }
  next();
};