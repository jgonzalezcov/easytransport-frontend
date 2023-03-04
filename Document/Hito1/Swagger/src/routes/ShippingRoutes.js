const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /shipping:
 *   get:
 *     description: Returns Shippings
 *     tags:
 *      - Shippings
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Shippings
 */

/**
 * @swagger
 * /shipping/${id}:
 *   get:
 *     description: Returns Shippings
 *     tags:
 *      - Shippings
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
 *         description: Shippings
 */

/**
 * @swagger
 * /shipping/${id}:
 *   put:
 *     description: Returns Shippings
 *     tags:
 *      - Shippings
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
 *         description: Shippings
 */

/**
 * @swagger
 * /shipping/${id}:
 *   delete:
 *     description: Returns Shippings
 *     tags:
 *      - Shippings
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
 *         description: Shippings
 */

module.exports = router;
