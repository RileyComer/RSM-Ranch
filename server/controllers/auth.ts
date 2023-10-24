import { Request, Response, NextFunction } from 'express';

const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

async function getUserByUsername(username: string) {
    try {
        const user = await User.findOne({ username: username });
        if (!user) {
            throw new Error('Incorrect info');
        }
        return user;
    } catch (error) {
        throw new Error('Error fetching user: ' + error);
    }
}

async function comparePassword(inputPassword: string, hashedPassword: string) {
    try {
        return await bcrypt.compare(inputPassword, hashedPassword);
    } catch (error) {
        throw new Error('Password comparison failed');
    }
}

async function hashPassword(password: string) {
    try {
        console.log("Starting to hash");
        const salt = await bcrypt.genSalt(10);
        
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("hashed");

        return hashedPassword;
    } catch (error) {
        console.log("hash error");
        throw new Error('Password hashing failed');
    }
}

const JWT_SECRET = secretKey;

module.exports = {

    authenticateUser: async function (username: string, password: string) {
        try {
            const user = await getUserByUsername(username);
            const passwordMatch = await comparePassword(password, user.password);

            if (passwordMatch) {
                const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
                    expiresIn: '1h'
                });

                return { authenticated: true, user:{id:user.id, username:user.username}, token:token };
            } else {
                return { authenticated: false, message: 'Incorrect info' };
            }
        } catch (error: any) {
            return { authenticated: false, message: 'Error authenticating user' };
        }
    },
};