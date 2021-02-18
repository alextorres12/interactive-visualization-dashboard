const json = "../data/samples.json"

// Button handler
function optionChanged(subjectID) {

    console.log("new subject selected ", subjectID);
    
}

function init() {
    // Get dropdown menu item
    var dropdownMenu = d3.select("#selDataset");

    // Get list of Subject IDs from JSON file and add to dropdown menu
    d3.json(json).then(function(data){
        var subjects = data.names;

        subjects.forEach(function(name){
            dropdownMenu.append("option").property("value", name).text(name)
        });

        // Build plot based on first option
        buildPlots(subjects[0]);
        
    }); 
}

function buildPlots(subjectID){
    // Get information from JSON file and use it to build the plots
    d3.json(json).then(function(data){

        // assign data to variables
        var samples = data["samples"].filter(sample => sample.id == subjectID);
        
        console.log(samples);

        var otuIDs = samples[0].otu_ids;
        var otuLabels = samples[0].otu_labels;
        var sampleValues = samples[0].sample_values;

        // Build Bar Chart
        // Get top 10 code from https://stackoverflow.com/questions/34883068/how-to-get-first-n-number-of-elements-from-an-array
        var top10IDs = otuIDs.slice(0,10).map(id => `OTU ${id}`);
        var top10Samples = sampleValues.slice(0,10);
        var top10Labels = otuLabels.slice(0,10);

        var trace1 = {
            y: top10IDs,
            x: top10Samples,
            text: top10Labels,
            type: "bar",
            orientation: "h"
        };
        
        var data1 = [trace1];

        var layout1 = {
            title: `Top 10 Bacteria Types: Subject ${subjectID}`
        };

        Plotly.newPlot("bar", data1, layout1)










    });
}

init();
