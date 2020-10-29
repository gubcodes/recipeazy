let router = require('express').Router();
const { Router } = require('express');
const { Module } = require('module');
let sequelize = require('../db');
let listModel = sequelize.import('../models/list');
//we may need more declarations up here, refer to logcontroller in workoutlog

/*
/list/create
/list/edit
/list/delete
/list/getall
*/

/***************************************
 * POST INGREDIENT
***************************************/
router.post('/create', function (req, res) {
    var listdata = listdata; //var is necessary (can't access before initialization?)
    let owner_id = req.user.id;
    let ingredient = req.body.listdata.ingredient;
    let food_id = req.body.listdata.food_id;
    let quantity = req.body.listdata.quantity; 
    let comment = req.body.listdata.comment;

    listModel
        .create({
            owner_id: owner_id,
            ingredient: ingredient,
            food_id: food_id,
            quantity: quantity,
            comment: comment
        })
        .then(
            function createSuccess(listdata) {
                res.json({
                    listdata: listdata
                });
            },
            function createError(err) {
                res.send(500, err.message);
                console.log('--POST INGREDIENT ERROR--')
            }
        );
});

/***************************************
 * GET ALL INGREDIENTS
***************************************/
router.get('/getall', function (req, res) {
    let owner_id = req.user.id;

    listModel
        .findAll({
            where: { owner_id: owner_id }
        })
        .then(
            function findAllSuccess(data) {
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
                console.log('--GET ALL INGREDIENTS ERROR--')
            }
        );
});

/***************************************
 * GET SINGLE INGREDIENT
***************************************/
router.get('/:id', function(req, res) {
    let data = req.params.id;
    let owner_id = req.user.id;

    listModel
        .findOne({
            where: { id: data, owner_id: owner_id }
        })
        .then(
            function findOneSuccess(data) {
                res.json(data);
            },
            function findOneError(err) {
                res.send(500, err.message);
                console.log('--GET SINGLE INGREDIENT ERROR--')
            }
        );
});

/***************************************
 * UPDATE SINGLE INGREDIENT
***************************************/
router.put('/:id', function(req, res) {
    var listdata = req.body.listdata;
    let data = req.params.id;
    let owner_id = req.user.id;
    let ingredient = req.body.listdata.ingredient;
    let food_id = req.body.listdata.food_id;
    let quantity = req.body.listdata.quantity; 
    let comment = req.body.listdata.comment;

    listModel
        .update({
            owner_id: owner_id,
            ingredient: ingredient,
            food_id: food_id,
            quantity: quantity,
            comment: comment
        },
        {where: {id: data}}
        ).then(
            function updateSuccess(updatedLog) {
                // console.log('ingredient updated')
                res.json({
                    listdata: listdata
                });
            },
            function updateError(err){
                res.send(500, err.message);
                console.log('--UPDATE SINGLE INGREDIENT ERROR--')
            }
        )
});

/***************************************
 * DELETE SINGLE INGREDIENT
***************************************/
router.delete('/:id', function(req, res) {
    let data = req.params.id;
    let owner_id = req.user.id;

    listModel
        .destroy({
            where: { id: data, owner_id: owner_id }
        })
        .then(
            function deleteIngredientSuccess(data){
                res.send('You deleted an ingredient');
            },
            function deleteIngredientError(err){
                res.send(500, err.message);
                console.log('--DELETE SINGLE INGREDIENT ERROR')
            }
        );
});

module.exports = router;