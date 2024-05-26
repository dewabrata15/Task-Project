const express = require('express')
const { Chart, User } = require('../models/index')


class ChartsController {
    static async chartList(req, res, next) {
        try {
            const data = await Chart.findAll({
                include: {
                    model: User,
                    attributes: {
                        exclude: ['password']
                    }
                },
            })
            res.status(200).json({ message: `Successfully get the data`, data })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

}

module.exports = ChartsController