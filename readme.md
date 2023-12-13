## Node.js server for PhoneBook

### Routs:

#### auth-routs

- post `/register` register user
- post `/login` login user
- get `/verify/:verificationToken` Email verification
- post`/verify` resend email for verification
- get `/current` current user
- post `/logout` logout user
- patch `/` update field Subscription
- patch `/avatars` update users avater

#### contacts-routs

- get `/` get all contacts
- get `/:id` get contact by id
- post `/` add new contact
- delete `/:id` delete contact by id
- put `/:id` update contact by id
- patch `/:id/favorite` update contact's field favoeite by id

### Comands:

- `npm start` &mdash; server start in mode production
- `npm run start:dev` &mdash; server start in mode development
