const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /trip:
 *   get:
 *     description: Returns Trips
 *     tags:
 *      - Trips
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Trips
 */

/**
 * @swagger
 * /trip/${id}:
 *   get:
 *     description: Returns Trips
 *     tags:
 *      - Trips
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
 *         description: Trips
 */

/**
 * @swagger
 * /trip/${id}:
 *   put:
 *     description: Returns Trips
 *     tags:
 *      - Trips
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
 *         description: Trips
 */

/**
 * @swagger
 * /trip/${id}:
 *   delete:
 *     description: Returns Trips
 *     tags:
 *      - Trips
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
 *         description: Trips
 */

module.exports = router;
