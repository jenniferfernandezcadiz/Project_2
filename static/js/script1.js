var pieData = {
    datasets: [{
        data: [
            25,
            10,
            30,
            35
        ],
        backgroundColor: [
            "#811BD6",
            "#9CBABA",
            "#D18177",
            "#6AE128"
        ],
        label: 'My Skills' // for legend
    }],
    labels: [
        "Java",
        "Scala",
        "PHP",
        "HTML"
    ]
};


var context = document.getElementById('skills');
var myPieChart = new Chart(context,{
    type: 'pie',
    data: pieData
});