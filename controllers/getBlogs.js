const { pool } = require("../db");
const express = require('express')
//==============================GET ALL blogs======================== 
const getBlogss = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM blogs");
    res.json(rows);
    console.log(rows)
  } catch (err) {
    res.status(500).send("something  went wrong");
  }
};

  //===========================================================================
module.exports = {
  getBlogs,

};
