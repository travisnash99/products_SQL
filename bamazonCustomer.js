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
    console.log("connected as id " + connection.threadId);
});
connection.query("SELECT * FROM products", function (err, res) {
    for (var i = 0; i < res.length; i++) {
        console.log(
            "\nProduct ID " + res[i].item_id + " | ",
            "\nProduct Name " + res[i].product_name + " | ",
            "\nDepartment Name " + res[i].department_name + " | ",
            "\nPrice " + res[i].price + " | ",
            "\nQuantity " + res[i].stock_quantity);
    }
    console.log("-----------------------------------");
});
var askUser = function () {
    inquirer.prompt({
        name: "item_id",
        type: "rawlist",
        message: "Please enter the product ID",
        choices: ["1", "2", "3", "4", "5", "6", "7"]
    }).then(function (answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.item_id() === answer.choices) {
            
        }
        else {
            console.log("Please enter a valid ID")
        }
    });
};
var quantity = function () {
    // prompt for info about the item being put up for auction
    inquirer.prompt([{
        name: "stock_quantity",
        type: "input",
        message: "How many would you like?",
        validate: function (value) {
            if (isNaN(value) === false) {
                return true;
                console.log("Your order is placed")
            }
            return false;
            console.log("We don't have enough")
        },
    }])
};
askUser();