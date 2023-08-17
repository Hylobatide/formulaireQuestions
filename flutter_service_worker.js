'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "bdd87585deefb6e04728f796091ef299",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"formulaireQuestions/.git/COMMIT_EDITMSG": "e7967483a3a0d3aee194afeecaf0fc0e",
"formulaireQuestions/.git/config": "ae6aa16118b535af48d6921fd76d6728",
"formulaireQuestions/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"formulaireQuestions/.git/FETCH_HEAD": "d93a8c68e8a0da3def1b136e7ab0535e",
"formulaireQuestions/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"formulaireQuestions/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"formulaireQuestions/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"formulaireQuestions/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"formulaireQuestions/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"formulaireQuestions/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"formulaireQuestions/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"formulaireQuestions/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"formulaireQuestions/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"formulaireQuestions/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"formulaireQuestions/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"formulaireQuestions/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"formulaireQuestions/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"formulaireQuestions/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"formulaireQuestions/.git/index": "e9177c460a5cacf883e1d6b2e9e1a7ff",
"formulaireQuestions/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"formulaireQuestions/.git/logs/HEAD": "a5dd49070db49d8633c0b9be87ce22b3",
"formulaireQuestions/.git/logs/refs/heads/main": "a5dd49070db49d8633c0b9be87ce22b3",
"formulaireQuestions/.git/logs/refs/remotes/origin/HEAD": "dce9ef735620f922b57f4e78b3b182e6",
"formulaireQuestions/.git/logs/refs/remotes/origin/main": "c653df7bff2227f589e109ada39c72b5",
"formulaireQuestions/.git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
"formulaireQuestions/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"formulaireQuestions/.git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
"formulaireQuestions/.git/objects/15/e552f60561480ad8f6d596700e8ffc3e0e8217": "bc694400dd5a3bcbfe8f11cbeebe4bef",
"formulaireQuestions/.git/objects/16/39e9173a1df594f08ee0dd6d289f48d80d3a1e": "269c691bea5bdae64e672559342fee85",
"formulaireQuestions/.git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
"formulaireQuestions/.git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
"formulaireQuestions/.git/objects/1f/2c4f37b97951a56d2322fd13efdb74ddb30a74": "a7aea3f67609dd55aeb4bf5c92ec0b53",
"formulaireQuestions/.git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
"formulaireQuestions/.git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
"formulaireQuestions/.git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
"formulaireQuestions/.git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
"formulaireQuestions/.git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
"formulaireQuestions/.git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
"formulaireQuestions/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"formulaireQuestions/.git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
"formulaireQuestions/.git/objects/58/8be75fafb2f8bacb461961fd34c20ad29d04f6": "bfe8048807f16393fab2890bde2c8d9b",
"formulaireQuestions/.git/objects/5c/152d3224203173f8fd6a22e800d1ca8df205c0": "dd5f442850090fd24fb8bae2abb64e83",
"formulaireQuestions/.git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
"formulaireQuestions/.git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
"formulaireQuestions/.git/objects/84/b132a3215dacbabb1fc6211855a19d27defa12": "928a2bc445b426e1ca89b883d60b3d01",
"formulaireQuestions/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"formulaireQuestions/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"formulaireQuestions/.git/objects/8e/155896ea0401fcf1258c76579ff9414313ebe5": "d633b9530d776da19164eaf34cddbac7",
"formulaireQuestions/.git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
"formulaireQuestions/.git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
"formulaireQuestions/.git/objects/9a/e26d4abea020235470910e5281cf742028e48b": "549c06fb8387c520607540450d98d11a",
"formulaireQuestions/.git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
"formulaireQuestions/.git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
"formulaireQuestions/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"formulaireQuestions/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"formulaireQuestions/.git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
"formulaireQuestions/.git/objects/cb/c2a28f76214cf04ad2e8049941927b7e93b5c1": "833534c3fec583be620a20018bd5049c",
"formulaireQuestions/.git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
"formulaireQuestions/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"formulaireQuestions/.git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
"formulaireQuestions/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"formulaireQuestions/.git/refs/heads/main": "b311e9154477b643ace94aa2dd62a6c2",
"formulaireQuestions/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"formulaireQuestions/.git/refs/remotes/origin/main": "b311e9154477b643ace94aa2dd62a6c2",
"formulaireQuestions/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"formulaireQuestions/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"formulaireQuestions/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"formulaireQuestions/assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"formulaireQuestions/assets/NOTICES": "bdd87585deefb6e04728f796091ef299",
"formulaireQuestions/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"formulaireQuestions/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"formulaireQuestions/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"formulaireQuestions/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"formulaireQuestions/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"formulaireQuestions/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"formulaireQuestions/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"formulaireQuestions/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"formulaireQuestions/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"formulaireQuestions/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"formulaireQuestions/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"formulaireQuestions/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"formulaireQuestions/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"formulaireQuestions/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"formulaireQuestions/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"formulaireQuestions/index.html": "cb8fe47e683bee2630ecf9e947d5845f",
"/": "1cd06614a137000b3caf9430058c94c7",
"formulaireQuestions/main.dart.js": "1abf27dfa6305300a045ec0390f15c4a",
"formulaireQuestions/manifest.json": "ebe332d3327088e90d8da23210c1d827",
"formulaireQuestions/version.json": "f988db8bbfb65ba76013554dba21676b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1cd06614a137000b3caf9430058c94c7",
"main.dart.js": "357373c30802a80b351cbf82cd0d26df",
"manifest.json": "ebe332d3327088e90d8da23210c1d827",
"version.json": "f988db8bbfb65ba76013554dba21676b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
