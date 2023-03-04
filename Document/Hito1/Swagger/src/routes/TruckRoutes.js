const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /truck:
 *   get:
 *     description: Returns Truck
 *     tags:
 *      - Truck
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Truck
 */

/**
 * @swagger
 * /truck/${id}:
 *   get:
 *     description: Returns Truck
 *     tags:
 *      - Truck
 *     parameters:
 *      - name: id
 *        in: path
 *        description: User ID
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Truck
 */

/**
 * @swagger
 * /truck/${id}:
 *   put:
 *     description: Returns Truck
 *     tags:
 *      - Truck
 *     parameters:
 *      - name: id
 *        in: path
 *        description: User ID
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Truck
 */

/**
 * @swagger
 * /truck/${id}:
 *   delete:
 *     description: Returns Truck
 *     tags:
 *      - Truck
 *     parameters:
 *      - name: id
 *        in: path
 *        description: User ID
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Truck
 */

module.exports = router;
