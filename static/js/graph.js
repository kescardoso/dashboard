queue()
    .defer(d3.csv, "data/salaraies.csv")
    .await(makeGraphs);
    
function makeGraphs(error, slaryData) {
    
}

    