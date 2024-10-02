 const asyncHanlder = require('express-async-handler')
 
 // This is to get goals for a user
 // Route = GET /api/goals
 // Access = private
 const getGoals =  asyncHanlder(async(req, res) => {
    res.status(200).json({message: 'Get goals'})
 })

 // This is to set goals for a user
 // Route = POST /api/goals
 // Access = private
 const setGoals =  asyncHanlder(async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set goal'})
 })

 // This is to update goal for a user
 // Route = PUT /api/goals/:id
 // Access = private
 const updateGoal =  asyncHanlder(async(req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
 })

 // This is to delete goal for a user
 // Route = DELETE /api/goals/:id
 // Access = private
 const deleteGoal =  asyncHanlder(async(req, res) => {  
    res.status(200).json({message: `Delete goal ${req.params.id}`})
 })
 
 module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
 }