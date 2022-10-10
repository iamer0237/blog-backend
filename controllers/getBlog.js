const { pool } = require("../db");
const express = require('express')

//==============================GET ONE blog======================= 

const getBlog = async (req, res) => {

    const {
      params: { id },
    } = req;
      try {
    const { rows } = await pool.query("SELECT * FROM blogs WHERE id=$1;", [id]);
    res.json(rows[0]);
    const post = rows.find((p) => {
    return p.id == id;
    
  });

    console.log(row)
  } catch (error) {
    res.status(500).send("something went wrong");
  }
};
//===========================================================00
module.exports = {

  getBlog,

};
