/*
 * Filename: /Users/tonymedrano/Desktop/experimental-nodejs-es6-template/app.mjs
 * Path: /Users/tonymedrano/Desktop/experimental-nodejs-es6-template
 * Created Date: Thursday, January 24th 2019, 12:20:58 am
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 Tony Medrano
 */



import fetch from 'node-fetch'
import {
    Printer
} from "./printer"

const p = Printer.create('Arrays/Objects')
const url = 'https://jsonplaceholder.typicode.com/todos'

const loadItems = async (dir) => await fetch(dir, {
    method: 'get'
})

loadItems(url).then(response => response.json()).then((items) => {
    const list = []
    items.forEach(item => {
        if (!item.completed && item.id <= 100) {
            list.push(`--> id: ${item.id} - ${item.title}\n`)
        }
    });
    p.print(list.join(' '), 'warning')
}).catch((err) => {
    p.print(err, 'error')
})