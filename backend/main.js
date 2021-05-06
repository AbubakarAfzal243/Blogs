var app = require('express')
var application = app()

application.get('/', (req, res)=>{
    res.send('hello World')
});

application.listen(1100);