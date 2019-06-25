queue()
    .defer(d3.csv, "data/Salaraies.csv")
    .await(makeGraphs);
    
function makeGraphs(error, salaryData) {
    
}

    