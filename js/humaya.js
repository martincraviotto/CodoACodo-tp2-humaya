let from = 0;
let size = 20;

const options = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': 'e464681dfdmsh8b5f68fe34ea976p1ed3afjsn955ab40e87e3',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

const searchDessert = async (query) => {
    const url = `https://tasty.p.rapidapi.com/recipes/list?from=${from}&size=${size}&tags=under_30_minutes&q=${query}`;

    try {
        let carouselIndicators = '';
        let active = '';
        let carouselInner = '';
        
        const response = await fetch(url, options);        
        const result = await response.json();
        
        result.results.forEach((receta, index) => {
            (index === 0) ? active='active' : active='';
            carouselIndicators += ` <button type="button" data-bs-target="#carouselRecetasCaptions" data-bs-slide-to="${index}" class="${active}" aria-current="true" aria-label="Receta ${index+1}"></button> `;
            carouselInner +=`<div class="carousel-item ${active}">
                                <div class="d-flex flex-nowrap">
                                    <img src="${receta.thumbnail_url}" class="flex-grow-1 p-2 d-block img-normalizada" alt="Imagen de ${receta.name}">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5 class="text-white bg-dark">${receta.name}</h5>
                                        <p class="text-white bg-dark">${receta.description}</p>
                                    </div>
                                   
                                </div>
                            </div>`;            
        });
        console.log({carouselIndicators,carouselInner});
        document.getElementById('carouselIndicators').innerHTML= carouselIndicators;            
        document.getElementById('carouselInner').innerHTML= carouselInner;            

    } catch (error) {
        console.error(error);
    }
}

searchDessert('cookie%20sweet');