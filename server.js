
const fs = require('fs');

var routes = ['404.html','rent-receipt.html','fuel-bills.html','about.html','contact.html','cookie.html','privacy.html','services.html'];

// Copying the file to a the same name
routes.forEach((value,i,arr) =>{
    fs.copyFile("index.html", value, (err) => {
        if (err) {
            console.log("Error Found:", err);
        }
        else {
            console.log(value + "File created!")
        }
    });
});

