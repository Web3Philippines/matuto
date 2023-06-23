// Get a random technology-related photo from Unsplash API
fetch('https://source.unsplash.com/1920x1080/?web3,defi,decentralization,smart-contracts')
    .then(response => {
        // Compress the image using sharp library
        const imageUrl = response.url;
        const img = new Image();
        img.srcset = `${imageUrl} 1920w, ${imageUrl} 1280w, ${imageUrl} 640w`;
        img.sizes = '(max-width: 600px) 640px, (max-width: 900px) 1280px, 1920px';
        img.src = imageUrl;
        img.onload = () => {
            const cache = caches.open('matuto-cache');
            cache.then(c => c.put(imageUrl, new Response(img)));
            // Set the background image of the body element and make it 50% dark
            document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`;
            // make the background image fit to the screen without stretching it
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundAttachment = 'fixed';
        };
    })
    .catch(error => console.error(error));
// gas tracker
fetch('https://api.gasprice.io/v1/estimates?countervalue=usd')
    .then(response => response.json())
    .then(data => {
        const gasPrices = data.result;
        document.getElementById('base-fee').innerHTML = gasPrices.baseFee.toFixed();
        document.getElementById('price').innerHTML = gasPrices.ethPrice.toFixed();
    })
    .catch(error => console.error(error));
