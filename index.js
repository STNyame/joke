const express = require('express')
const app = express()
const port = process.env.PORT || 3000


    const page =
    `
    <html>
        <title>Sentwali</title>
        <body>
            <h1>Why do comedians love !false?</h1>
            <p>It's funny because it's true.</p>
        </body>
    </html>
    `



app.get('/', (req,res)=> {
    res.send(page)
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})