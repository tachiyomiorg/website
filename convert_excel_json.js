const XLSX = require('xlsx')
const fs = require('fs')

// Takes an xlsx filepath and converts each sheet in the workbook to json files.
let runExport = (src) => {
    const workbook = XLSX.readFile(src)
    for (let i = 0; i < workbook.Workbook.Sheets.length; i++) {
        let ws = workbook.Sheets[workbook.SheetNames[i]]
        let jsonOutput = XLSX.utils.sheet_to_json(ws)
        const datadir = `${__dirname}/src/.vuepress/public/xlsx_data/`
        if (!fs.existsSync(datadir)) {
            fs.mkdir(datadir,(err)=>console.error(err))
        }
        fs.writeFile(`${datadir + workbook.SheetNames[i]}.json`, JSON.stringify(jsonOutput), (err) => {
            if (err) return console.error(err)

            console.log(`${workbook.SheetNames[i]} was saved!`)
        })
    }
}

// check for parameters
if (process.argv.length > 2) {
    process.argv.forEach((val, indx, arr) => {
        // take only the first argument specified
        if (indx === 2) runExport(val)
    })
} else {
    console.error("No files to convert. Please specify an xlsx file to convert.")
    return 1
}
