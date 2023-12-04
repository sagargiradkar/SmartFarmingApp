// routes/auth.js
const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

// signUp route handler with input validation
router.post(
    "/signup",
    [
        // Validate name, email, password, and role
        body("name").trim().isLength({ min: 1 }).withMessage("Name is required"),
        body("email").isEmail().withMessage("Invalid email").normalizeEmail(),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
        body("role").isIn(["Admin", "Student", "Visitor"]).withMessage("Invalid role"),
    ],
    async (req, res) => {
        // Input validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: errors.array(),
            });
        }

        try {
            // Get data
            const { name, email, password, role } = req.body;

            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    message: "User already exists",
                });
            }

            // Secure password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create entry for User
            await User.create({
                name,
                email,
                password: hashedPassword,
                role,
            });

            return res.status(201).json({
                success: true,
                message: "User created successfully",
                data: {},
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "User cannot be registered, please try again later",
                data: {},
            });
        }
    }
);

module.exports = router;
