var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    //    Your username
    user: "root",

    //    Your password
    password: "",
    database: "bamazonDB"
});
connection.connect(function (err) {
    if (err) throw err;
});
connection.query("SELECT * FROM products", function (err, res) {
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
    }
    console.log("-----------------------------------");
});

var askUser = function () {
    inquirer.prompt({
        name: "user",
        type: "list",
        message: "Please enter the product number.",
        choices: ["1", "2", "3", "4", "5", "6", "7"]
    }).then(function (answer) {

    });
};
askUser();