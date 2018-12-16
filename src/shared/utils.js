const utils = {

    uuidv4: () => {
        let d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : ((r & 0x3) | 0x8)).toString(16);
        });
    },

    preloadVideo: path => {
        // Taken from http://dinbror.dk/blog/how-to-preload-entire-html5-video-before-play-solved/
        return new Promise(function (resolve, reject) {
            const videoRequest = new XMLHttpRequest();
            videoRequest.open('GET', path, true);
            videoRequest.responseType = 'blob';
            videoRequest.addEventListener('load', function () {
                if (videoRequest.status === 200) {
                    const URL = window.URL || window.webkitURL;
                    const blobURL = URL.createObjectURL(videoRequest.response);
                    resolve(blobURL);
                } else {
                    reject(videoRequest.status);
                }
            }, false);
            videoRequest.send();   
        });
    }

};

export default utils;