const express = require('express');
const router = express.Router();

const {
  getAllExpenses,
  createNewBuy,
  changeBuyInfo,
  deleteBuy
} = require('../controllers/task.controller');

router.get('/allExpenses', getAllExpenses);
router.post('/createBuy', createNewBuy);
router.patch('/editBuy', changeBuyInfo);
router.delete('/deleteBuy', deleteBuy);

module.exports = router;