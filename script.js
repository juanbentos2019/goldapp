const itemSelect = document.getElementById('item');
const spotInput = document.getElementById('spot');
const porcentajeInput = document.getElementById('porcentaje');
const calcularButton = document.getElementById('calcular');
const valorCompraElement = document.getElementById('valor_compra');
const valorVentaElement = document.getElementById('valor_venta');
const imagenItem = document.getElementById('imagen-item');
const imagenMonedaActual = document.getElementById('imagen-moneda-actual');
const imagenMonedaNueva = document.getElementById('imagen-moneda-nueva');
const pesoOroElement = document.getElementById('peso-oro');
const pesoBrutoElement = document.getElementById('peso-bruto');
const pesoOnzasElement = document.getElementById('peso-onzas');

const itemsData = {
    alemania_10_marcos: {
        imagen: 'ruta/a/10marcos.png',
        pesoOro: '3.58 g',
        pesoBruto: '3.98 g'
    },
    alemania_20_marcos: {
        imagen: 'ruta/a/imagen_alemania_20_marcos.png',
        pesoOro: '7.16 g',
        pesoBruto: '7.96 g'
    },
    austria_1_ducado: {
        imagen: 'ruta/a/imagen_austria_1_ducado.png',
        pesoOro: '3.451 g',
        pesoBruto: '3.50 g'
    },
    austria_4_ducados_1612_1830: {
        imagen: 'ruta/a/imagen_austria_4_ducados_1612_1830.jpg',
        pesoOro: '13.804 g',
        pesoBruto: '14.00 g'
    },
    austria_4_ducados_1830: {
        imagen: 'ruta/a/imagen_austria_4_ducados_1830.png',
        pesoOro: '13.1824 g',
        pesoBruto: '13.3696 g'
    },
    austria_100_coronas: {
        imagen: 'ruta/a/imagen_austria_100_coronas.png',
        pesoOro: '30.4878 g',
        pesoBruto: '33.8753 g'
    },
    austria_20_coronas: {
        imagen: 'ruta/a/imagen_austria_20_coronas.jpg',
        pesoOro: '6.102 g',
        pesoBruto: '6.78 g'
    },
    austria_100_chelines: {
        imagen: 'ruta/a/imagen_austria_100_chelines.jpg',
        pesoOro: '12.15 g',
        pesoBruto: '13.5 g'/*?*/ 
    },
    belgica_20_francos: {
        imagen: 'ruta/a/imagen_belgica_20_francos.jpg',
        pesoOro: '5.80 g',
        pesoBruto: '6.45 g'
    },
    canada_maple_leaf_1_10_oz: {
        imagen: 'ruta/a/imagen_canada_maple_leaf_1_10_oz.jpg',
        pesoOro: '3.11 g',
        pesoBruto: '3.12 g'
    },
    canada_maple_leaf_1_4_oz: {
        imagen: 'ruta/a/imagen_canada_maple_leaf_1_4_oz.jpg',
        pesoOro: '7.78 g',
        pesoBruto: '7.785 g'
    },
    canada_maple_leaf_1_2_oz: {
        imagen: 'ruta/a/imagen_canada_maple_leaf_1_2_oz.jpg',
        pesoOro: '15.55 g',
        pesoBruto: '15.5515 g'
    },
    canada_maple_leaf_1_oz: {
        imagen: 'ruta/a/imagen_canada_maple_leaf_1_oz.jpg',
        pesoOro: '31.10 g',
        pesoBruto: '31.1030 g'
    },
    chile_50_pesos: {
        imagen: 'ruta/a/imagen_chile_50_pesos.jpg',
        pesoOro: '9,15282 g',
        pesoBruto: '10,1698 g'
    },
    chile_100_pesos: {
        imagen: 'ruta/a/imagen_chile_100_pesos.jpg',
        pesoOro: '18,30573 g',
        pesoBruto: '20,3400 g'
    },
    china_panda_1_oz_pre_2016: {
        imagen: 'ruta/a/imagen_china_panda_1_oz_pre_2016.jpg',
        pesoOro: '31.10 g',
        pesoBruto: '31.1036 g'
    },
    china_panda_1_oz_desde_2016: {
        imagen: 'ruta/a/imagen_china_panda_1_oz_desde_2016.jpg',
        pesoOro: '30.00 g',
        pesoBruto: '30.00 g'
    },
    eeuu_5_usd: {
        imagen: 'ruta/a/imagen_eeuu_5_usd.jpg',
        pesoOro: '7.52328 g',
        pesoBruto: '8.36 g'
    },
    eeuu_10_usd: {
        imagen: 'ruta/a/imagen_eeuu_10_usd.jpg',
        pesoOro: '15.04665 g',
        pesoBruto: '16.7180 g'
    },
    eeuu_20_usd: {
        imagen: 'ruta/a/imagen_eeuu_20_usd.jpg',
        pesoOro: '30.0933 g',
        pesoBruto: '33.436 g'
    },
    eeuu_aguila_1_10_oz: {
        imagen: 'ruta/a/imagen_eeuu_aguila_1_10_oz.jpg',
        pesoOro: '3.11035 g',
        pesoBruto: '3.93 g'
    },
    eeuu_aguila_1_4_oz: {
        imagen: 'ruta/a/imagen_eeuu_aguila_1_4_oz.jpg',
        pesoOro: '7.77587 g',
        pesoBruto: '8.483 g'
    },
    eeuu_aguila_1_2_oz: {
        imagen: 'ruta/a/imagen_eeuu_aguila_1_2_oz.jpg',
        pesoOro: '15.55174 g',
        pesoBruto: '16.966 g'
    },
    eeuu_aguila_1_oz: {
        imagen: 'ruta/a/imagen_eeuu_aguila_1_oz.jpg',
        pesoOro: '31.10 g',
        pesoBruto: '33.93 g'
    },
    francia_10_francos: {
        imagen: 'ruta/a/imagen_francia_10_francos.jpg',
        pesoOro: '2.90 g',
        pesoBruto: '3.22 g'
    },
    francia_20_francos: {
        imagen: 'ruta/a/imagen_francia_20_francos.jpg',
        pesoOro: '5.80 g',
        pesoBruto: '6.45 g'
    },
    inglaterra_1_2_libra: {
        imagen: 'ruta/a/imagen_inglaterra_1_2_libra.jpg',
        pesoOro: '3.66 g',
        pesoBruto: '3.99 g'
    },
    krugerrand: {
        imagen: 'ruta/a/imagen_krugerrand_oro.jpeg',
        pesoOro: '31.10 g',
        pesoBruto: '33.93 g'
    },
    libra_oro: {
        imagen: 'ruta/a/imagen_libra_oro.png',
        pesoOro: '7.32 g',
        pesoBruto: '7.98 g'
    },
    mejico_2_pesos: {
        imagen: 'ruta/a/imagen_mejico_2_pesos.jpg',
        pesoOro: '1.50 g',
        pesoBruto: '1.67 g'
    },
    mejico_2_50_pesos: {
        imagen: 'ruta/a/imagen_mejico_2_50_pesos.jpg',
        pesoOro: '1.87 g',
        pesoBruto: '2.08 g'
    },
    mejico_5_pesos: {
        imagen: 'ruta/a/imagen_mejico_5_pesos.jpg',
        pesoOro: '3.75 g',
        pesoBruto: '4.17 g'
    },
    mejico_10_pesos: {
        imagen: 'ruta/a/imagen_mejico_10_pesos.jpg',
        pesoOro: '7.50 g',
        pesoBruto: '8.33 g'
    },
    mejico_20_pesos: {
        imagen: 'ruta/a/imagen_mejico_20_pesos.jpg',
        pesoOro: '15.00 g',
        pesoBruto: '16.67 g'
    },
    mejico_1_oz: {
        imagen: 'ruta/a/imagen_mejico_1_oz.jpg',
        pesoOro: '31.10 g',
        pesoBruto: '31.10 g'
    },
    mexicana_50: {
        imagen: 'ruta/a/imagen_mexicana50_oro.jpg',
        pesoOro: '37.5 g',
        pesoBruto: '41.67 g'
    },
    peru_5_soles: {
        imagen: 'ruta/a/imagen_peru_5_soles.jpg',
        pesoOro: '7.37 g',
        pesoBruto: '8.19 g'
    },
    peru_10_soles: {
        imagen: 'ruta/a/imagen_peru_10_soles.jpg',
        pesoOro: '14.74 g',
        pesoBruto: '16.38 g'
    },
    peru_20_soles: {
        imagen: 'ruta/a/imagen_peru_20_soles.jpg',
        pesoOro: '29.48 g',
        pesoBruto: '32.76 g'
    },
    peru_50_soles: {
        imagen: 'ruta/a/imagen_peru_50_soles.jpg',
        pesoOro: '36.85 g',
        pesoBruto: '40.94 g'
    },
    peru_100_soles: {
        imagen: 'ruta/a/imagen_peru_100_soles.jpg',
        pesoOro: '47.00 g',
        pesoBruto: '52.22 g'
    },
    sudafrica_kruger_1_10_oz: {
        imagen: 'ruta/a/imagen_sudafrica_kruger_1_10_oz.jpg',
        pesoOro: '3.11 g',
        pesoBruto: '3.39 g'
    },
    sudafrica_kruger_1_4_oz: {
        imagen: 'ruta/a/imagen_sudafrica_kruger_1_4_oz.jpg',
        pesoOro: '7.78 g',
        pesoBruto: '8.48 g'
    },
    sudafrica_kruger_1_2_oz: {
        imagen: 'ruta/a/imagen_sudafrica_kruger_1_2_oz.jpg',
        pesoOro: '15.55 g',
        pesoBruto: '16.97 g'
    },
    suiza_10_francos: {
        imagen: 'ruta/a/imagen_suiza_10_francos.jpg',
        pesoOro: '2.90 g',
        pesoBruto: '3.22 g'
    },
    suiza_20_francos: {
        imagen: 'ruta/a/imagen_suiza_20_francos.jpg',
        pesoOro: '5.80 g',
        pesoBruto: '6.45 g'
    }
};

function ocultarImagenYDatos() {
    imagenItem.style.display = 'none';
    pesoOroElement.textContent = '';
    pesoBrutoElement.textContent = '';
    pesoOnzasElement.textContent = '';
}

function actualizarImagen() {
    const item = itemSelect.value;
    if (item === "") {
        ocultarImagenYDatos();
        return;
    }

    const itemData = itemsData[item];

    imagenItem.style.display = 'flex';
    imagenMonedaNueva.src = itemData.imagen;
    pesoOroElement.textContent = itemData.pesoOro;
    pesoBrutoElement.textContent = itemData.pesoBruto;
    
    // Calculate and display weight in ounces
    const pesoOroGramos = parseFloat(itemData.pesoOro.split(' ')[0]);
    const pesoOroOnzas = (pesoOroGramos / 31.1035).toFixed(4);
    pesoOnzasElement.textContent = `${pesoOroOnzas} oz`;

    imagenItem.classList.add('cambio');

    setTimeout(() => {
        imagenMonedaActual.src = itemData.imagen;
        imagenItem.classList.remove('cambio');
    }, 0);
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

itemSelect.addEventListener('change', () => {
    actualizarImagen();
    calcular();
});

spotInput.addEventListener('input', calcular);
porcentajeInput.addEventListener('input', calcular);
calcularButton.addEventListener('click', calcular);

document.addEventListener('DOMContentLoaded', function() {
    // Llenar el select con las opciones
    const sortedItems = Object.keys(itemsData).sort((a, b) => 
        a.localeCompare(b, undefined, {sensitivity: 'base'})
    );
    
    sortedItems.forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        itemSelect.appendChild(option);
    });

    // Ocultar la imagen y datos al cargar la página
    ocultarImagenYDatos();
});