// get a random technology-related photo from Unsplash API
fetch('https://picsum.photos/1920/1080') // for some reason the source.unsplash.com is down, so I'm using picsum.photos instead
    .then(response => {
        const imageUrl = response.url;
        const img = new Image();
        img.srcset = `${imageUrl} 1920w, ${imageUrl} 1280w, ${imageUrl} 640w`;
        img.sizes = '(max-width: 600px) 640px, (max-width: 900px) 1280px, 1920px';
        img.src = imageUrl;
        img.onload = () => {
            const cache = caches.open('matuto-cache');
            cache.then(c => c.put(imageUrl, new Response(img)));
            document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundAttachment = 'fixed';
        };
    })
    .catch(error => console.error(error));
// gas tracker eth
fetch('https://api.blocknative.com/gasprices/blockprices')
    .then(response => response.json())
    .then(data => {
        const gasPrices = data.blockPrices[0];
        const ethBasePrice = gasPrices.baseFeePerGas.toFixed(2);
        const ethPriorityFee = gasPrices.estimatedPrices[1].maxPriorityFeePerGas.toFixed(2);
        const ethMaxFee = gasPrices.estimatedPrices[1].maxFeePerGas.toFixed();
        document.getElementById('ethBaseFee').innerHTML = ethBasePrice;
        document.getElementById('ethPriorityFee').innerHTML = ethPriorityFee;
        document.getElementById('ethMaxFee').innerHTML = ethMaxFee;
    })
    .catch(error => console.error(error));
// gas tracker matic
fetch('https://api.blocknative.com/gasprices/blockprices?chainid=137')
    .then(response => response.json())
    .then(data => {
        const gasPrices = data.blockPrices[0];
        const maticBasePrice = gasPrices.baseFeePerGas.toFixed(2);
        const maticPriorityFee = gasPrices.estimatedPrices[1].maxPriorityFeePerGas.toFixed(2);
        const maticMaxFee = gasPrices.estimatedPrices[1].maxFeePerGas.toFixed();
        document.getElementById('maticBaseFee').innerHTML = maticBasePrice;
        document.getElementById('maticPriorityFee').innerHTML = maticPriorityFee;
        document.getElementById('maticMaxFee').innerHTML = maticMaxFee;
    })
    .catch(error => console.error(error));