
## Introducing New Schema

```prisma
  id             String @id @default(auto()) @map("_id") @db.ObjectId
  Room_name      String
  members_needed Int
  thumbnail      String
  location       String
  mode           String
  createdBy      String
```

- After creating run the following command
```shell

npx prisma generate
```

To run Prisma Studio

```shell
npx prisma studio
```