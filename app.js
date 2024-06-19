const Reader = require( './Reader')
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require("./HtmlParser")
const Writer = require("./Writer")
const PDFWriter = require("./PDFWriter")

let reader = new Reader()
let write = new Writer()


async function main(){
    let data = await reader.Read('./users.csv')
    let processData = Processor.Process(data)
    let users = new Table(processData)
    let html = await HtmlParser.Parse(users)
    write.Write( Date.now() + ".html", html)
    PDFWriter.WritePDF( Date.now() +".PDF",html)
}



main()