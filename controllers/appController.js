




exports.dashboard = (req,res) =>
    {
        console.log('show me how it work');
        console.log("**Express Version: ", require('express/package').version);
        console.log(req.name);
        const wes ={name: 'wes', age:100 , cool:true }
        //res.send('Hey! It works!');
        //res.json(wes);
        //res.send(req.query);
        //res.json(req.query);
        res.render('index',{
          name:req.query.name,
          title:'bizbiz app'
        }); 
    };
