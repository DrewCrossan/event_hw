document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript loaded');

    const handleNewItemFormSubmit = function (event) {
        // const countryListItem = createCountryListItem(event.target);
        // const countryList = document.querySelector('#country-list');
        // readingList.appendChild(countryListItem);

        event.preventDefault();

        console.log(event.target);

        const newListItem = document.createElement('li');

        const countryElement = document.createElement('h2');
        countryElement.textContent = event.target.country.value;
        newListItem.appendChild(countryElement);

        const capitalElement = document.createElement('h3');
        capitalElement.textContent = event.target.capital.value;
        newListItem.appendChild(capitalElement);

        const continentElement = document.createElement('h4');
        continentElement.textContent = event.target.continent.value;
        newListItem.appendChild(continentElement);

        const countryList = document.querySelector('#country-list');
        countryList.appendChild(newListItem)

        event.target.reset();
    }

    const newItemform = document.querySelector('#new-country-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);


    const handleDeleteAllClick = function (event) {
        const countryList = document.querySelector('#country-list');
        countryList.innerHTML = '';
    }
    
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})
