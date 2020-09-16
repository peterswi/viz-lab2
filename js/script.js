
 let attractions;
 let topFive;
 fetch('attractions.json')
     .then(response => response.json())
     .then(data => {
         attractions=data;
         attractions.sort((a,b)=> b.Visitors-a.Visitors);
         console.log('sorted',attractions)
         topFive=attractions.slice(0,5);
         console.log('Top five by visitors:',topFive);
         renderBarChart(topFive);
     }
 )   
 

function filterData(category) {
    let attractions;
    let topFive;
    fetch('attractions.json')
        .then(response => response.json())
        .then(data => {
            console.log(category)
            attractions=data;
            if(category!='all'){
                // want to filter out other options if we arent in the 'all' category
                console.log('not all')
                attractions=attractions.filter(attraction=>attraction.Category==category)
            }
            
            attractions.sort((a,b)=> b.Visitors-a.Visitors);
            console.log('sorted',attractions)
            topFive=attractions.slice(0,5);
            console.log('Top five by visitors:',topFive);
            renderBarChart(topFive);
        }
    )    
}

function onchange(e) {
    filterData(e.target.value)
}
document.querySelector('#attraction-category').addEventListener('change',onchange)