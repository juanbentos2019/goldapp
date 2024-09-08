function log(message) {
    console.log(`[DEBUG] ${message}`);
}

const itemSelect = document.getElementById('item');
const spotInput = document.getElementById('spot');
const porcentajeInput = document.getElementById('porcentaje');
const valorCompraElement = document.getElementById('valor_compra');
const valorVentaElement = document.getElementById('valor_venta');
const imagenItem = document.getElementById('imagen-item');
const imagenMoneda = document.getElementById('imagen-moneda');
const pesoOroElement = document.getElementById('peso-oro');
const pesoBrutoElement = document.getElementById('peso-bruto');
const pesoOnzasElement = document.getElementById('peso-onzas');
const diametroElement = document.getElementById('diametro');
const modal = document.getElementById('modal');
const modalImagen = document.getElementById('modal-imagen');
const cerrarModal = document.getElementsByClassName('cerrar')[0];

const API_URL = 'https://data-asg.goldprice.org/dbXRates/USD';

const itemsData = {
    alemania_10_marcos: {
        imagen: 'ruta/a/10marcos.png',
        pesoOro: '3.58 g',
        pesoBruto: '3.98 g',
        diametro: '19.5 mm'
    },
    alemania_20_marcos: {
        imagen: 'ruta/a/imagen_alemania_20_marcos.png',
        pesoOro: '7.16 g',
        pesoBruto: '7.96 g',
        diametro: '22.5 mm'
    },
    austria_1_ducado: {
        imagen: 'ruta/a/imagen_austria_1_ducado.png',
        pesoOro: '3.451 g',
        pesoBruto: '3.50 g',
        diametro: '20 mm'
    },
    austria_4_ducados_1612_1830: {
        imagen: 'ruta/a/imagen_austria_4_ducados_1612_1830.jpg',
        pesoOro: '13.804 g',
        pesoBruto: '14.00 g',
        diametro: '39.5 mm'
    },
    austria_4_ducados_1830: {
        imagen: 'ruta/a/imagen_austria_4_ducados_1830.png',
        pesoOro: '13.1824 g',
        pesoBruto: '13.3696 g',
        diametro: '39.5 mm'
    },
    austria_100_coronas: {
        imagen: 'ruta/a/imagen_austria_100_coronas.png',
        pesoOro: '30.4878 g',
        pesoBruto: '33.8753 g',
        diametro: '37 mm'
    },
    austria_20_coronas: {
        imagen: 'ruta/a/imagen_austria_20_coronas.jpg',
        pesoOro: '6.102 g',
        pesoBruto: '6.78 g',
        diametro: '21 mm'
    },
    austria_100_chelines: {
        imagen: 'ruta/a/imagen_austria_100_chelines.jpg',
        pesoOro: '12.15 g',
        pesoBruto: '13.5 g',
        diametro: '33 mm'
    },
    belgica_20_francos: {
        imagen: 'ruta/a/imagen_belgica_20_francos.jpg',
        pesoOro: '5.80 g',
        pesoBruto: '6.45 g',
        diametro: '21 mm'
    },
    canada_maple_leaf_1_10_oz: {
        imagen: 'ruta/a/imagen_canada_maple_leaf_1_10_oz.jpg',
        pesoOro: '3.11 g',
        pesoBruto: '3.12 g',
        diametro: '16 mm'
    },
    canada_maple_leaf_1_4_oz: {
        imagen: 'ruta/a/imagen_canada_maple_leaf_1_4_oz.jpg',
        pesoOro: '7.78 g',
        pesoBruto: '7.785 g',
        diametro: '20 mm'
    },
    canada_maple_leaf_1_2_oz: {
        imagen: 'ruta/a/imagen_canada_maple_leaf_1_2_oz.jpg',
        pesoOro: '15.55 g',
        pesoBruto: '15.5515 g',
        diametro: '25 mm'
    },
    canada_maple_leaf_1_oz: {
        imagen: 'ruta/a/imagen_canada_maple_leaf_1_oz.jpg',
        pesoOro: '31.10 g',
        pesoBruto: '31.1030 g',
        diametro: '30 mm'
    },
    chile_50_pesos: {
        imagen: 'ruta/a/imagen_chile_50_pesos.jpg',
        pesoOro: '9,15282 g',
        pesoBruto: '10,1698 g',
        diametro: '24.5 mm'
    },
    chile_100_pesos: {
        imagen: 'ruta/a/imagen_chile_100_pesos.jpg',
        pesoOro: '18,30573 g',
        pesoBruto: '20,3400 g',
        diametro: '30.5 mm'
    },
    china_panda_1_oz_pre_2016: {
        imagen: 'ruta/a/imagen_china_panda_1_oz_pre_2016.jpg',
        pesoOro: '31.10 g',
        pesoBruto: '31.1036 g',
        diametro: '32.05 mm'
    },
    china_panda_1_oz_desde_2016: {
        imagen: 'ruta/a/imagen_china_panda_1_oz_desde_2016.jpg',
        pesoOro: '30.00 g',
        pesoBruto: '30.00 g',
        diametro: '32 mm'
    },
    eeuu_5_usd: {
        imagen: 'ruta/a/imagen_eeuu_5_usd.jpg',
        pesoOro: '7.52328 g',
        pesoBruto: '8.36 g',
        diametro: '21.6 mm'
    },
    eeuu_10_usd: {
        imagen: 'ruta/a/imagen_eeuu_10_usd.jpg',
        pesoOro: '15.04665 g',
        pesoBruto: '16.7180 g',
        diametro: '27 mm'
    },
    eeuu_20_usd: {
        imagen: 'ruta/a/imagen_eeuu_20_usd.jpg',
        pesoOro: '30.0933 g',
        pesoBruto: '33.436 g',
        diametro: '34 mm'
    },
    eeuu_aguila_1_10_oz: {
        imagen: 'ruta/a/imagen_eeuu_aguila_1_10_oz.jpg',
        pesoOro: '3.11035 g',
        pesoBruto: '3.93 g',
        diametro: '16.5 mm'
    },
    eeuu_aguila_1_4_oz: {
        imagen: 'ruta/a/imagen_eeuu_aguila_1_4_oz.jpg',
        pesoOro: '7.77587 g',
        pesoBruto: '8.483 g',
        diametro: '22 mm'
    },
    eeuu_aguila_1_2_oz: {
        imagen: 'ruta/a/imagen_eeuu_aguila_1_2_oz.jpg',
        pesoOro: '15.55174 g',
        pesoBruto: '16.966 g',
        diametro: '27 mm'
    },
    eeuu_aguila_1_oz: {
        imagen: 'ruta/a/imagen_eeuu_aguila_1_oz.jpg',
        pesoOro: '31.10 g',
        pesoBruto: '33.93 g',
        diametro: '32.7 mm'
    },
    francia_10_francos: {
        imagen: 'ruta/a/imagen_francia_10_francos.jpg',
        pesoOro: '2.90 g',
        pesoBruto: '3.22 g',
        diametro: '19 mm'
    },
    francia_20_francos: {
        imagen: 'ruta/a/imagen_francia_20_francos.jpg',
        pesoOro: '5.80 g',
        pesoBruto: '6.45 g',
        diametro: '21 mm'
    },
    inglaterra_1_2_libra: {
        imagen: 'ruta/a/imagen_inglaterra_1_2_libra.jpg',
        pesoOro: '3.66 g',
        pesoBruto: '3.99 g',
        diametro: '19.3 mm'
    },
    krugerrand: {
        imagen: 'ruta/a/imagen_krugerrand_oro.jpeg',
        pesoOro: '31.10 g',
        pesoBruto: '33.93 g',
        diametro: '32.77 mm'
    },
    libra_oro: {
        imagen: 'ruta/a/imagen_libra_oro.png',
        pesoOro: '7.32 g',
        pesoBruto: '7.98 g',
        diametro: '22.05 mm'
    },
    mejico_2_pesos: {
        imagen: 'ruta/a/imagen_mejico_2_pesos.jpg',
        pesoOro: '1.50 g',
        pesoBruto: '1.67 g',
        diametro: '13 mm'
    },
    mejico_2_50_pesos: {
        imagen: 'ruta/a/imagen_mejico_2_50_pesos.jpg',
        pesoOro: '1.87 g',
        pesoBruto: '2.08 g',
        diametro: '14 mm'
    },
    mejico_5_pesos: {
        imagen: 'ruta/a/imagen_mejico_5_pesos.jpg',
        pesoOro: '3.75 g',
        pesoBruto: '4.17 g',
        diametro: '18 mm'
    },
    mejico_10_pesos: {
        imagen: 'ruta/a/imagen_mejico_10_pesos.jpg',
        pesoOro: '7.50 g',
        pesoBruto: '8.33 g',
        diametro: '22 mm'
    },
    mejico_20_pesos: {
        imagen: 'ruta/a/imagen_mejico_20_pesos.jpg',
        pesoOro: '15.00 g',
        pesoBruto: '16.67 g',
        diametro: '27 mm'
    },
    mejico_1_oz: {
        imagen: 'ruta/a/imagen_mejico_1_oz.jpg',
        pesoOro: '31.10 g',
        pesoBruto: '31.10 g',
        diametro: '32.7 mm'
    },
    mexicana_50: {
        imagen: 'ruta/a/imagen_mexicana50_oro.jpg',
        pesoOro: '37.5 g',
        pesoBruto: '41.67 g',
        diametro: '37 mm'
    },
    peru_5_soles: {
        imagen: 'ruta/a/imagen_peru_5_soles.jpg',
        pesoOro: '7.37 g',
        pesoBruto: '8.19 g',
        diametro: '21 mm'
    },
    peru_10_soles: {
        imagen: 'ruta/a/imagen_peru_10_soles.jpg',
        pesoOro: '14.74 g',
        pesoBruto: '16.38 g',
        diametro: '27 mm'
    },
    peru_20_soles: {
        imagen: 'ruta/a/imagen_peru_20_soles.jpg',
        pesoOro: '29.48 g',
        pesoBruto: '32.76 g',
        diametro: '34 mm'
    },
    peru_50_soles: {
        imagen: 'ruta/a/imagen_peru_50_soles.jpg',
        pesoOro: '36.85 g',
        pesoBruto: '40.94 g',
        diametro: '36 mm'
    },
    peru_100_soles: {
        imagen: 'ruta/a/imagen_peru_100_soles.jpg',
        pesoOro: '47.00 g',
        pesoBruto: '52.22 g',
        diametro: '37 mm'
    },
    sudafrica_kruger_1_10_oz: {
        imagen: 'ruta/a/imagen_sudafrica_kruger_1_10_oz.jpg',
        pesoOro: '3.11 g',
        pesoBruto: '3.39 g',
        diametro: '16.5 mm'
    },
    sudafrica_kruger_1_4_oz: {
        imagen: 'ruta/a/imagen_sudafrica_kruger_1_4_oz.jpg',
        pesoOro: '7.78 g',
        pesoBruto: '8.48 g',
        diametro: '22 mm'
    },
    sudafrica_kruger_1_2_oz: {
        imagen: 'ruta/a/imagen_sudafrica_kruger_1_2_oz.jpg',
        pesoOro: '15.55 g',
        pesoBruto: '16.97 g',
        diametro: '27 mm'
    },
    suiza_10_francos: {
        imagen: 'ruta/a/imagen_suiza_10_francos.jpg',
        pesoOro: '2.90 g',
        pesoBruto: '3.22 g',
        diametro: '19 mm'
    },
    suiza_20_francos: {
        imagen: 'ruta/a/imagen_suiza_20_francos.jpg',
        pesoOro: '5.80 g',
        pesoBruto: '6.45 g',
        diametro: '21 mm'
    }
};

log('itemsData cargado correctamente');

function ocultarImagenYDatos() {
    imagenItem.classList.remove('visible');
    pesoOroElement.textContent = '';
    pesoBrutoElement.textContent = '';
    pesoOnzasElement.textContent = '';
    diametroElement.textContent = '';
}

function actualizarImagen() {
    const item = itemSelect.value;
    if (item === "") {
        ocultarImagenYDatos();
        return;
    }

    const itemData = itemsData[item];

    imagenItem.classList.add('visible');
    imagenMoneda.src = itemData.imagen;
    pesoOroElement.textContent = itemData.pesoOro;
    pesoBrutoElement.textContent = itemData.pesoBruto;
    diametroElement.textContent = itemData.diametro;
    
    const pesoOroGramos = parseFloat(itemData.pesoOro.split(' ')[0]);
    const pesoOroOnzas = (pesoOroGramos / 31.1035).toFixed(4);
    pesoOnzasElement.textContent = `${pesoOroOnzas} oz`;
}

function calcular() {
    const item = itemSelect.value;
    const spot = parseFloat(spotInput.value);
    const porcentaje = parseFloat(porcentajeInput.value) / 100;

    if (item === "" || isNaN(spot) || isNaN(porcentaje)) {
        valorCompraElement.textContent = "0.00";
        valorVentaElement.textContent = "0.00";
        return;
    }

    const itemData = itemsData[item];
    const pesoOro = parseFloat(itemData.pesoOro.split(' ')[0]);
    const factor = pesoOro / 31.10357;
    const resultado = factor * spot;
    const valorCompra = resultado - (porcentaje * resultado);
    const valorVenta = resultado + (porcentaje * resultado);

    valorCompraElement.textContent = valorCompra.toFixed(2);
    valorVentaElement.textContent = valorVenta.toFixed(2);
}

async function obtenerPrecioOro() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.items || !data.items[0] || !data.items[0].xauPrice) {
            throw new Error('Formato de datos inesperado');
        }
        return data.items[0].xauPrice.toFixed(2);
    } catch (error) {
        console.error('Error al obtener el precio del oro:', error);
        return null;
    }
}

async function actualizarPlaceholderSpot() {
    const precioOro = await obtenerPrecioOro();
    if (precioOro !== null) {
        spotInput.placeholder = `Valor del spot a confirmar (${precioOro})`;
    } else {
        spotInput.placeholder = 'Valor del spot a confirmar';
    }
}

function mostrarModal() {
    modal.style.display = "block";
    modalImagen.src = imagenMoneda.src;
}

function cerrarModalFunc() {
    modal.style.display = "none";
}

function inicializarEventListeners() {
    itemSelect.addEventListener('change', () => {
        actualizarImagen();
        calcular();
    });

    spotInput.addEventListener('input', calcular);
    porcentajeInput.addEventListener('input', calcular);
    
    imagenMoneda.addEventListener('click', mostrarModal);
    cerrarModal.addEventListener('click', cerrarModalFunc);
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            cerrarModalFunc();
        }
    });
    log('Event listeners inicializados');
}

function formatearNombreMoneda(key) {
    // Reemplazamos los guiones bajos por espacios
    let nombre = key.replace(/_/g, ' ');
    
    // Casos especiales
    nombre = nombre
        .replace(/(\d+) (\d+)/, '$1/$2')  // Reemplaza "10 20" por "10/20"
        .replace(/(\d+) (\d+) oz/, '$1/$2 oz')  // Maneja casos como "1 10 oz"
        .replace(/(\d+) (\d+) pesos/, '$1/$2 pesos')  // Maneja casos como "2 50 pesos"
        .replace(/(\d+) (\d+) soles/, '$1/$2 soles');  // Maneja casos como "5 10 soles"

    return nombre;
}

function inicializarSelect() {
    log('Iniciando inicializarSelect');
    if (!itemSelect) {
        log('ERROR: itemSelect es null');
        return;
    }
    
    // Vaciar el select primero
    itemSelect.innerHTML = '<option value="">Seleccione la moneda</option>';
    log('Select vaciado y opción por defecto añadida');

    const sortedItems = Object.entries(itemsData).sort((a, b) => 
        a[0].localeCompare(b[0], undefined, {sensitivity: 'base'})
    );
    log(`Número de items ordenados: ${sortedItems.length}`);
    
    sortedItems.forEach(([key, value]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = formatearNombreMoneda(key);
        itemSelect.appendChild(option);
    });
    log('Opciones añadidas al select');
    log(`Número final de opciones en el select: ${itemSelect.options.length}`);
}

document.addEventListener('DOMContentLoaded', function() {
    log('DOMContentLoaded event fired');
    inicializarSelect();
    inicializarEventListeners();
    ocultarImagenYDatos();
    actualizarPlaceholderSpot().catch(error => {
        console.error('Error al actualizar el placeholder:', error);
    });
    log('Inicialización completa');
});

// Comprobación adicional
window.onload = function() {
    log('Window onload event fired');
    if (itemSelect.options.length <= 1) {
        log('ERROR: No se han cargado las opciones del select');
        console.error('Las opciones no se han cargado correctamente en el select');
    } else {
        log(`Número de opciones cargadas: ${itemSelect.options.length}`);
    }
};