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



    });
}

init();
