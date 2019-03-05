/*
 * Filename: /Users/tonymedrano/Desktop/node-guru/printer.js
 * Path: /Users/tonymedrano/Desktop/node-guru
 * Created Date: Tuesday, January 15th 2019, 1:19:00 pm
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 Tony Medrano
 */


export class Printer {
    constructor(name) {
        this.name = name
    }
    static create(name) {
        return new Printer(name)
    }

    print(text, color) {
        console.log('')
        console.log(this._colors("\x1b[7m"), `🖨  ${this.name}: ${"〰️ ".repeat(10)} 😀`)
        console.log('')
        console.log(this._colors(color), `${text}!`)
        console.log('')
        console.log(this._colors("\x1b[7m"), `${"〰️ ".repeat(15)}`)
    }

    _colors(type) {
        let color
        switch (type) {
            case "success":
                color = "\x1b[32m"
                break
            case "info":
                color = "\x1b[36m"
                break
            case "error":
                color = "\x1b[35m"
                break
            case "warning":
                color = "\x1b[33m"
                break
            default:
                color = "\x1b[37m"
        }
        return color
    }

}