import express from "express";

import authController from "../../controllers/auth-controllers.js";
import { authenticate, isEmptyBody } from "../../middleware/index.js";
import { validateBody } from "../../decorators/index.js";
import {
  userSignupSchema,
  userSigninSchema,
  updateUserSubscriptionSchema,
} from "../../schemas/users-schemas.js";

const authRouter = express.Router();

authRouter.post("/register", isEmptyBody, validateBody(userSignupSchema), authController.signup);

authRouter.post("/login", isEmptyBody, validateBody(userSigninSchema), authController.signin);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.signout);

authRouter.patch(
  "/",
  authenticate,
  validateBody(updateUserSubscriptionSchema),
  authController.updateSubscription
);

export default authRouter;
