const json = "../data/samples.json"

d3.json(json).then(function(data){
    console.log(data);
});