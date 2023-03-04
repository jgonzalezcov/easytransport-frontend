const express = require('express');
const router = express.Router();

/**
 * @description Iniciar sesión
 * @swagger
 * user/login:
 *   post:
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: ejemplo@mail.com
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: 123
 *     responses:
 *       200:
 *         description: A new easy transport token.
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: token
 */

/**
 * @description Registrar usuario en la plataforma
 * @swagger
 * user/singin:
 *   post:
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              email:
 *                type: string
 *                description: The user's email.
 *                example: ejemplo@mail.com
 *              password:
 *                type: string
 *                description: The user's password.
 *                example: 12345
 *              id:
 *                type: number
 *                description: El id del usuario
 *                example: 1
 *              name:
 *                type: string
 *                description: Nombre del usuario
 *                example: Camila Perez
 *              last_name:
 *                type: string
 *                description:  Apellido del usuario
 *                example: Perez
 *              phone:
 *                type: numbrer
 *                description: Numero del usuario
 *                example: 9999999
 *              address:
 *                type: string
 *                description: Clave del usuario
 *                example: kdskdsnsd
 *              img:
 *                type: string
 *                description: Ruta de la imagen
 *                example: sssss
 *              condition:
 *                type: booleano
 *                description: true, false
 *                example: true
 *              total_starts:
 *                type: number
 *                description: Starts
 *                example: 100
 *              num_qualification:
 *                type: number
 *                description: califications
 *                example: 10
 *              role:
 *               type: string
 *               description: Rol del usuario
 *               example: client
 *     responses:
 *       200:
 *         description: A new easy transport token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *
 */

/**
 * @swagger
 * /user:
 *   get:
 *     description: Returns users
 *     tags:
 *      - Users
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: users
 */

/**
 * @swagger
 * /user/${id}:
 *   get:
 *     description: Returns users
 *     tags:
 *      - Users
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
 *         description: users
 */

/**
 * @swagger
 * /user/${id}:
 *   put:
 *     description: Returns users
 *     tags:
 *      - Users
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
 *         description: users
 */

/**
 * @swagger
 * /user/${id}:
 *   delete:
 *     description: Returns users
 *     tags:
 *      - Users
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
 *         description: users
 */
module.exports = router;
