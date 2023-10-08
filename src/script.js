// get a random technology-related photo from Unsplash API
fetch('https://source.unsplash.com/1920x1080/?web3,defi,decentralization,smart-contracts')
    .then(response => {
        const imageUrl = response.url;
        const sanitizedImageUrl = DOMPurify.sanitize(imageUrl);
        const img = new Image();
        img.srcset = `${imageUrl} 1920w, ${imageUrl} 1280w, ${imageUrl} 640w`;
        img.sizes = '(max-width: 600px) 640px, (max-width: 900px) 1280px, 1920px';
        img.src = sanitizedImageUrl;
        img.onload = () => {
            const cache = caches.open('matuto-cache');
            cache.then(c => c.put(sanitizedImageUrl, new Response(img)));
            document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${sanitizedImageUrl})`;
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
        const pricesArray = [ethBasePrice, ethPriorityFee, ethMaxFee];
// select ethereum prices container
        const ethContainer = document.querySelector('#eth-tracker__container');
// select each paragraph except first child which is the title
        const ethParagraphs = ethContainer.querySelectorAll('p:not(:first-child)');
// loop through paragraphs and add span to each with appropriate prices based on the pricesArray values
        ethParagraphs.forEach((p, index) => {
            switch(index) {
                case 0: {
                    p.textContent = '⛽ Base: ' + pricesArray[index];
                    break;
                }
                case 1: {
                    p.textContent = '⚡ Priority: ' + pricesArray[index];
                    break;
                }
                case 2: {
                    p.textContent = '🔥 Max: ' + pricesArray[index];
                    break;
                }
                default: return;
            }
            
        })
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
        const pricesArray = [maticBasePrice, maticPriorityFee, maticMaxFee];
// select polygon prices container        
        const polyContainer = document.querySelector('#poly-tracker__container');
// select each paragraph except first child which is the title        
        const polyParagraphs = polyContainer.querySelectorAll('p:not(:first-child)');
// loop through paragraphs and add span to each with appropriate prices based on the pricesArray values        
        polyParagraphs.forEach((p, index) => {
            let span = document.createElement('span');
            span.textContent = pricesArray[index];
            p.appendChild(span);
        })
    })
    .catch(error => console.error(error));