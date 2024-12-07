const express = require("express");
const {
  getAllWarehouseDetails,
  getWarehouseDetailById,
} = require("../services/warehouse-service");

const warehouseDetailRouter = express.Router();

warehouseDetailRouter.get("/warehouse-details", async (req, res) => {
  const { query } = req;
  await getAllWarehouseDetails(query)
    .then((warehouseDetails) => res.json(warehouseDetails))
    .catch((error) => res.status(400).send({ error }));
});

warehouseDetailRouter.get("/warehouse-details/:id", async (req, res) => {
  const id = req.params.id;
  await getWarehouseDetailById(id)
    .then((warehouseDetail) => res.json(warehouseDetail))
    .catch((error) => res.status(404).send({ error }));
});

module.exports = warehouseDetailRouter;