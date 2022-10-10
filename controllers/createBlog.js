const { pool } = require("../db");
const express = require('express')

//======================CREATE A blog===================================
const createBlog = async (req, res) => {
  const {
    body: { title, body, author, image },
  } = req;
  try {
    const { rows } = 
    await pool.query(
      "INSERT INTO blogs (title, body, author, image) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        title, body, author, image
      ]
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(500).send("something  went wrong");
  }
};

  //===========================================================================
module.exports = {

  createBlog,
  
};
