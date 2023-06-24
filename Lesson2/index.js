const fs = require('fs');

fs.existsSync('demo2.txt');
(result) => {
    if(result){
        console.log("found");
    }
    else{
        console.log("not found");
    }
}

