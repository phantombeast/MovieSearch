const express=require('express')

const app=express();

const request=require('request')

const path=require('path');

app.use('/', express.static(path.join(__dirname, 'public')));


app.get('/', (req,res)=>{

    res.render('search1.ejs')
})

app.get('/results',(req,res)=>{

    var search=req.query.text;

    var api='http://www.omdbapi.com/?s=' + search+'&apikey=thewdb ' ;

    request(api,(error, response,body)=>{
        var data=JSON.parse(body);


            //res.send(search['Search'][0]);

        res.render('result.ejs',{data:data})

    })

});

app.listen(3202,()=>{

    console.log('Server started on http://localhost:3202');

})