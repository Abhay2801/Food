/*var cacheName = 'blog-img-1.jpg';
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(
  fetch(e.request)
  .then(res => {
  // The response is a stream and in order the browser
  // to consume the response and in the same time the
  // cache consuming the response it needs to be
  // cloned in order to have two streams.
  const resClone = res.clone();
  // Open cache
  caches.open(cacheName)
  .then(cache => {
  // Add response to cache
  cache.put(e.request, resClone);
  });
  return res;
  }).catch(
  err => caches.match(e.request)
  .then(res => res)
  )
  );
  });*/

var document = document.querySelector(".btn");
document.addEventListener("click", async() => {
    var swRegistration = await navigator.serviceWorker.register("sw.js");
    swRegistration.sync.register("helloSync").then(function() {
        console.log('Sync Success');
    });
})

/*function displayNotification() {
if (Notification.permission == 'granted') {
navigator.serviceWorker.getRegistration().then(function(reg) {
reg.showNotification('Hello world!');
});
}
}*/


/*const document = document.querySelector(".btn");
document.addEventListener('click', () => {
console.log("Ask for permission");
Notification.requestPermission().then((result) => {
if (result === 'granted') {
Notification.requestPermission(function(status) {
console.log('Notification permission status:', status);
navigator.serviceWorker.getRegistration().then(function(reg) {
reg.showNotification('Hello world!');
});
});
}
});
})*/


self.addEventListener('install', (event) => {
    console.log("sw is installed")
    event.waitUntil(
        caches.open("static")
        .then((Cache) => {
            Cache.addAll([
                'https://Abhay2801.github.io/foodwebsite/',
                'https://Abhay2801.github.io/foodwebsite/js/script.js',
                'https://Abhay2801.github.io/foodwebsite/css/style.css',
                'https://Abhay2801.github.io/foodwebsite/images/about-icon-1.png',
                'https://Abhay2801.github.io/foodwebsite/images/about-icon-2.png',
                'https://Abhay2801.github.io/foodwebsite/images/about-icon-3.png',
                'https://Abhay2801.github.io/foodwebsite/images/about-icon-4.png',
                'https://Abhay2801.github.io/foodwebsite/images/about-img-1.png',
                'https://Abhay2801.github.io/foodwebsite/images/about-img.png',
                'https://Abhay2801.github.io/foodwebsite/images/blog-img-1.jpg',
                'https://Abhay2801.github.io/foodwebsite/images/blog-img-2.jpg',
                'https://Abhay2801.github.io/foodwebsite/images/blog-img-3.jpg',
                'https://Abhay2801.github.io/foodwebsite/images/blog-img-4.jpg',
                'https://Abhay2801.github.io/foodwebsite/images/blog-img-5.jpg',
                'https://Abhay2801.github.io/foodwebsite/images/blog-img-6.jpg',
                'https://Abhay2801.github.io/foodwebsite/images/food-galler-img-1.jpg',
                'https://Abhay2801.github.io/foodwebsite/images/food-galler-img-2.jpg',
                'https://Abhay2801.github.io/foodwebsite/images/food-galler-img-3.jpg',
                'https://Abhay2801.github.io/foodwebsite/images/food-galler-img-4.jpg',
                'https://Abhay2801.github.io/foodwebsite/images/food-galler-img-5.jpg',
                'https://Abhay2801.github.io/foodwebsite/images/food-galler-img-6.jpg',
                'https://Abhay2801.github.io/foodwebsite/images/food-img-1.png',
                'https://Abhay2801.github.io/foodwebsite/images/food-img-2.png',
                'https://Abhay2801.github.io/foodwebsite/images/food-img-3.png',
                'https://Abhay2801.github.io/foodwebsite/images/food-img-4.png',
                'https://Abhay2801.github.io/foodwebsite/images/food-img-5.png',
                'https://Abhay2801.github.io/foodwebsite/images/home-slide-1.jpg',
                'https://Abhay2801.github.io/foodwebsite/images/home-slide-2.jpg',
                'https://Abhay2801.github.io/foodwebsite/images/home-slide-3.jpg'
            ]).catch((error) => {
                console.log(error)
            })
        })
    );
})

self.addEventListener('activate', () => {
    console.log("sw is Activated")
})



var cacheName = 'blog-img-1.jpg';
self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching');
    e.respondWith(
        fetch(e.request)
        .then(res => {
            // The response is a stream and in order the browser
            // to consume the response and in the same time the
            // cache consuming the response it needs to be
            // cloned in order to have two streams.
            const resClone = res.clone();
            // Open cache
            caches.open(cacheName)
                .then(cache => {
                    // Add response to cache
                    cache.put(e.request, resClone);
                });
            return res;
        }).catch(
            err => caches.match(e.request)
            .then(res => res)
        )
    );
});
