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
        var subjects = data.map(subject => subject["metadata"].id);

        console.log(subjects);

        
        
    })
}

init();
