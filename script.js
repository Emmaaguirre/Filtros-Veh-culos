let cars = [];

// Función para crear las cards de los vehículos
function createVehicleCards(filteredCars) {
    const vehicleCards = document.getElementById('vehicleCards');
    vehicleCards.innerHTML = ''; // Limpiar el contenedor

    filteredCars.forEach(car => {
        const card = `
            <div class="col">
                <div class="card h-100">
                    <img src="${car.image}" class="card-img-top" alt="${car.model}">
                    <div class="card-body">
                        <h5 class="card-title">${car.brand} ${car.model}</h5>
                    </div>
                </div>
            </div>
        `;
        vehicleCards.innerHTML += card;
    });
}

// Función para filtrar vehículos
function filterVehicles() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const filteredCars = cars.filter(car => {
        return car.model.toLowerCase().includes(searchQuery) || car.brand.toLowerCase().includes(searchQuery);
    });
    createVehicleCards(filteredCars);
}

// Cargar datos desde cars.json
fetch('cars.json')
    .then(response => response.json())
    .then(data => {
        cars = data;
        createVehicleCards(cars); // Crear las cards inicialmente
    })
    .catch(error => console.error('Error al cargar los datos:', error));

// Evento para la barra de búsqueda
document.getElementById('searchBar').addEventListener('input', filterVehicles);


// fetch(): Para cargar los datos del archivo cars.json.
// Almacenamiento: Los datos cargados se almacenan en la variable cars, que inicialmente es un array vacío.
// Error Handling: Se maneja un posible error en la carga del archivo cars.json con un .catch(),
//     para asegurarnos de que se muestre un mensaje de error en la consola si algo sale mal.
// Inicialización de las cards: Las cards se generan una vez que se cargan los datos correctamente desde cars.json.