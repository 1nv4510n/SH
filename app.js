
//const express = require('express')
import express from 'express';
const { default: Database } = import ('./DatabaseService.js');
const app = express(),
    port = 3000

app.use(express.static('public'))

//Database

app.listen(3000, () => {
    console.log('server started on localhost: ', port)
})