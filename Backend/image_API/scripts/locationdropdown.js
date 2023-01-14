const apiUrl = 'http://localhost:3500';
function onLoad() {
    console.log('on load');

    fetch(apiUrl + '/zomato_locations')
        .then((response) => response.json()) // cannot avoid, always required
        .then((locationData) => {
            console.log(locationData);
            let select = document.getElementsByName('locations')[0];

            if (select) {
                locationData.data.forEach(function(d) {
                    let option = document.createElement('option');
                    option.setAttribute('value', d.location_id);
                    option.innerHTML = d.location_name;
                    select.appendChild(option);
                });
            
            }
        });
}