const { pool } = require("../db");
const express = require('express')

  //======================DELETE A blog===================================
const deleteBlog = async (req, res) => {
    
    const {
      body: {id},
    } = req;
    try {
      const { rows } = 
      await pool.query(
        "DELETE FROM blogs WHERE id=$1 RETURNING *,"
        [
          id
        ]
      );
      res.json(rows);
    } catch (err) {
      res.status(404).send("something  went wrong");
    }
  };
  //===========================================================================
module.exports = {
  
  deleteBlog,
};
