d3.json('/csv/read').then(function(Final_2019_data) {
    console.log("Here is the CSV read API");
    console.log("-----------")
    console.log(Final_2019_data);
})


d3.json('/csv/read2').then(function(Final_2020_data) {
    console.log("Here is the CSV read API");
    console.log("-----------")
    console.log(Final_2020_data);
})