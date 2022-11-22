import { DataSource } from "typeorm";

require("dotenv").config();

export const dataSource = new DataSource({
  type: "mysql",
  host: process.env.DATASOURCE_HOST,
  port: Number(process.env.DATASOURCE_PORT),
  username: process.env.DATASOURCE_USERNAME,
  password: process.env.DATASOURCE_PASSWORD,
  database: process.env.DATASOURCE_DATABASE,
  entities: ["src/entity/*.js"],
  synchronize: true,
  logging: true,
});

dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err: Error) => {
    console.error("Error during Data Source initialization", err);
  });
