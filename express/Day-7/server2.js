const express=require("express");
const app=express();
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: 'Unauthorized' });
    } else {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
app.get('/debug', (req, res) => {
    console.log('Debugging information:', req.query);
    // More debug statements
    res.send('Debugging information logged.');
});

// Example debugging with breakpoints
// app.get('/debugger', (req, res) => {
//     debugger;
//     const message = 'Debugging session';
//     res.send(message);
// });
app.use((err, req, res, next) => {
    console.error('Error caught:', err);
    next(err);
});
app.get('/inspect', (req, res) => {
    let details=[
        {
            name:"Ajay",age:22
        },
        {
            name:"Varun",age:12
        },
        {
            name:"Siva",age:42
        },
    ]
    let j=details.filter((e)=>{
        if(e.name===req.query.name || e.age.toString()===req.query.age){
            return e;
        }
    })  
    if(j.length>0){
        res.send(j)
    }
    else{
        res.send(details)
    }
});
app.get('/inspect/:id', (req, res) => {
    res.send(req.params.id);
});

app.listen(9000)