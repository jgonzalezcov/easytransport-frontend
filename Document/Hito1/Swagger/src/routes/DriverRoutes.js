const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /driver:
 *   get:
 *     description: Returns Drivers
 *     tags:
 *      - Drivers
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Drivers
 */

/**
 * @swagger
 * /driver/${id}:
 *   get:
 *     description: Returns Drivers
 *     tags:
 *      - Drivers
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
 *         description: Drivers
 */

/**
 * @swagger
 * /driver/${id}:
 *   put:
 *     description: Returns Drivers
 *     tags:
 *      - Drivers
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
 *         description: Drivers
 */

/**
 * @swagger
 * /driver/${id}:
 *   delete:
 *     description: Returns Drivers
 *     tags:
 *      - Drivers
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
 *         description: Drivers
 */

module.exports = router;
