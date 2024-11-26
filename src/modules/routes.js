import { express } from "express";
import * as fruitRoutes from "./fruit/fruit.routes.js";
import * as carRoutes from "./car/car.routes.js";

const router = express();

router.use("/fruits", fruitRoutes.router);
router.use("/cars", carRoutes.router);

export { router };
