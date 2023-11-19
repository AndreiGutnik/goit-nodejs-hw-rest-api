import express from "express";

import contactsController from "../../controllers/contacts-controllers.js";
import { isEmptyBody, isValidId } from "../../middleware/index.js";
import { validateBody } from "../../decorators/index.js";
import {
  contactAddSchema,
  contactUpdateSchema,
  contactFavoriteSchema,
} from "../../schemas/contacts-schemas.js";

const router = express.Router();

router.get("/", contactsController.getAllContacts);

router.get("/:id", isValidId, contactsController.getContactById);

router.post("/", isEmptyBody, validateBody(contactAddSchema), contactsController.addContact);

router.delete("/:id", isValidId, contactsController.deleteContactById);

router.put(
  "/:id",
  isValidId,
  isEmptyBody,
  validateBody(contactUpdateSchema),
  contactsController.updateContactById
);

router.patch(
  "/:id/favorite",
  isValidId,
  isEmptyBody,
  validateBody(contactFavoriteSchema),
  contactsController.updateContactById
);

export default router;
