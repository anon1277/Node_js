const fs = require('fs');



// const input = process.argv;
// if (input[2] == 'add') {
//     fs.writeFileSync(input[3], input[4])
// }
// else if (input[2] == 'delete') {
//     fs.unlinkSync(input[3]);
// }
// else {

//     console.log('invalid input');
// }

const path = require('path');

const DirPath = path.join(__dirname ,'files');
//create multiple file

// for(i=0; i<5; i++)
// {
//         fs.writeFileSync(DirPath+"/data_" +i+ ".txt" , "File content");
 
// }

// read files
fs.readdir(DirPath,(err , files)=>{
    files.forEach((item)=>{
        console.log("file name is " , item)
    })
})