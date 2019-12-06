
let data = {
    resource_id: '2de7b543-e13d-4e7e-b4c8-56071bc4d3c8',
    limit: 7
};

let legendClickHandler = function(e, legendItem) {};

$.ajax({
    url: 'https://data.gov.il/api/action/datastore_search',
    data: data,
    cache: true,
    dataType: 'json',
    jsonp: false,
    success: function(data) {
        let ctx = document.getElementById('Kineret_Canvas').getContext('2d');

        let chart = new Chart(ctx, {
            type: 'line',

            data: {
                labels: [data.result.records[0]['תאריך מדידה'].replace('T00:00:00',''), data.result.records[1]['תאריך מדידה'].replace('T00:00:00','')
                    , data.result.records[2]['תאריך מדידה'].replace('T00:00:00',''), data.result.records[3]['תאריך מדידה'].replace('T00:00:00','')
                    , data.result.records[4]['תאריך מדידה'].replace('T00:00:00',''), data.result.records[5]['תאריך מדידה'].replace('T00:00:00','')
                    , data.result.records[6]['תאריך מדידה'].replace('T00:00:00','')],
                datasets: [{
                    label: 'מפלס הכנרת במטרים',
                    //backgroundColor: 'rgb(255, 99, 132)',
                    //borderColor: 'rgb(255, 99, 132)',
                    data: [data.result.records[0]['מפלס הכנרת במטרים'], data.result.records[1]['מפלס הכנרת במטרים'],
                        data.result.records[2]['מפלס הכנרת במטרים'], data.result.records[3]['מפלס הכנרת במטרים'],
                        data.result.records[4]['מפלס הכנרת במטרים'], data.result.records[5]['מפלס הכנרת במטרים'],
                        data.result.records[6]['מפלס הכנרת במטרים']]
                }]
            },

            options: {
                legend: {
                    onClick: legendClickHandler
                }
            }
        });

        document.getElementById('difference').innerText = (data.result.records[0]['מפלס הכנרת במטרים'] - data.result.records[1]['מפלס הכנרת במטרים']) * 100;
    },
    error: function(data) {
        alert('Error getting data')
    }
});
