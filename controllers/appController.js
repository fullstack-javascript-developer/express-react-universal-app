




exports.dashboard = (req,res) =>
    {
        console.log('show me how it work');
        console.log("**Express Version: ", require('express/package').version);
        
        //const wes ={name: 'wes', age:100 , cool:true }
        //res.send('Hey! It works!');
        //res.json(wes);
        //res.send(req.query);
        //res.json(req.query);
        res.render('index',{
          title:'bizbiz app'
        }); 
    };
