'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"2.png": "b7a324c8e23f57b959e6002a3e9e1d78",
"assets/AssetManifest.bin": "04e76284ac6cc69573a99787ef25ccc7",
"assets/AssetManifest.bin.json": "b7550352a788613dc822b11a5671be27",
"assets/AssetManifest.json": "ad846cf8e4e2a095123a3a9d9d687234",
"assets/assets/images/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/images/app.png": "57e188da24d47b532639d9cf311fd405",
"assets/assets/images/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/images/coding.png": "af1b456dad3dd6f43f14994963b57316",
"assets/assets/images/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/images/fb.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/github.png": "b37b05a713d8eebcbb475119e587859b",
"assets/assets/images/hanif.jpeg": "da1c89b1790e914ae3362a5cde9f34cc",
"assets/assets/images/hanif.png": "7c83f4a69823283b0e00e49df3c69624",
"assets/assets/images/hanif1.jpg": "f0655ec573b3f015b381aeda01adc10d",
"assets/assets/images/hanif2.jpg": "ef2eeca2fd5b333b05b244b6f4cbd0bd",
"assets/assets/images/hanif3.jpg": "155cb42ccb0c1f78cb4168153e1e35f0",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/inst.png": "0b6b3c8d2c74fc2e0be8f5d940ec1e14",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/linkedin.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/assets/images/pro1.png": "a618dc4969d82a6d2ece39a7ee5d11f1",
"assets/assets/images/pro2.png": "c25801745513b563c939c527a2d2d46f",
"assets/assets/images/sabbir1.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/sabbir2.png": "7619738473552ea6a3f769063cd1eb48",
"assets/assets/images/sabbir3.png": "8281b12727cf661ca72115a48b502d69",
"assets/assets/images/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/images/so.png": "8bee5b615068f7360cedfb14404d54ef",
"assets/assets/images/twit.png": "3f2b027c50dd30dd9abeeaeb1b68b1c3",
"assets/assets/images/web.png": "91cd4109ced32d1c4ae5dcd0560707b8",
"assets/assets/images/work.png": "700b5a4271958f70f7d5c6cb220aa8cf",
"assets/assets/images/work1.png": "21adc62f666dc705821f8494c436b7b0",
"assets/assets/images/work2.png": "ad2671ad4eecf5a5f25f1a681bc1ed8f",
"assets/assets/images/youtube.png": "ec1efab49c24be248d8ee984df407508",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ac86ba16c85c8f46e9e80199724734be",
"assets/NOTICES": "10e22da9c214f85388fbf74f63307555",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "46ffcc63e942138db59a02ddcbbf1dd9",
"icons/android-icon-144x144.png": "f9668c16183add0fafebff978225a7a5",
"icons/android-icon-192x192.png": "c25740334adeacf881592728651f4cd3",
"icons/android-icon-36x36.png": "2efc031b51c554f17e6f1502d08f16ae",
"icons/android-icon-48x48.png": "5e44f34f64c20cb788f1968570299744",
"icons/android-icon-72x72.png": "27566c0eab42e27c1e1e72ee79109830",
"icons/android-icon-96x96.png": "0bb3fe804dbfb0bc62a1b292ef0ccf7f",
"icons/apple-icon-114x114.png": "acdeede716aaaec5cc1210a1e8c50708",
"icons/apple-icon-120x120.png": "8a4e24deb33c9e2784443d11a683f85c",
"icons/apple-icon-144x144.png": "f9668c16183add0fafebff978225a7a5",
"icons/apple-icon-152x152.png": "5a7b2551c891dcba88ab37369e7ae256",
"icons/apple-icon-180x180.png": "f04c4f0c9e5bfa0028286be384e210d0",
"icons/apple-icon-57x57.png": "7f0bbde7fe1394e799da5912690220f8",
"icons/apple-icon-60x60.png": "62f624462812a74723f31c086e3dc0cc",
"icons/apple-icon-72x72.png": "27566c0eab42e27c1e1e72ee79109830",
"icons/apple-icon-76x76.png": "fc02dbb95ef922ec7ccf747eeebc82ec",
"icons/apple-icon-precomposed.png": "06f1fbd658308f36c5851d49b199243b",
"icons/apple-icon.png": "06f1fbd658308f36c5851d49b199243b",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "bb9e9530a9135c5f9d4d52daa3056657",
"icons/favicon-32x32.png": "e0d3517631e6ea524fe3ca1f23e48374",
"icons/favicon-96x96.png": "0bb3fe804dbfb0bc62a1b292ef0ccf7f",
"icons/favicon.ico": "c25740334adeacf881592728651f4cd3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/ms-icon-144x144.png": "f9668c16183add0fafebff978225a7a5",
"icons/ms-icon-150x150.png": "1d4634d260748cdb039569cd2d6c8a59",
"icons/ms-icon-310x310.png": "030079d7edec7db1169472891d06a478",
"icons/ms-icon-70x70.png": "6a333304788c96a0eea2848543af79e8",
"index.html": "1ef283e5c04359f720589e4aececd3ad",
"/": "1ef283e5c04359f720589e4aececd3ad",
"logo.png": "c25740334adeacf881592728651f4cd3",
"main.dart.js": "dd5c6e1ebdca60eae5ea59602dbcb5c2",
"manifest.json": "64ff48b6358e1e793e88c5e4dcaf26db",
"version.json": "7ef1f9f404e9866be1887ce0b2fedcba"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
