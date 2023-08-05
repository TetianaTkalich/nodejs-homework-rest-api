const express = require("express");

const ctrl = require("../../controllers/auth");

const { isValidUserId, authenticate, upload } = require("../../middlewares");

const router = express.Router();

router.post("/register", ctrl.register);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post("/verify", ctrl.resendVerifyEmail);

router.post("/login", ctrl.login);

router.post("/logout", authenticate, ctrl.logout);

router.get("/current", authenticate, ctrl.getCurrent);

router.patch(
  "/:id/subscription",
  authenticate,
  isValidUserId,
  ctrl.updateSubscriptionUser
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;