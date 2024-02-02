'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"formulaireQuestions/.git/COMMIT_EDITMSG": "7f87adb08b09fe5a44b68671b5cd9712",
"formulaireQuestions/.git/config": "ae6aa16118b535af48d6921fd76d6728",
"formulaireQuestions/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"formulaireQuestions/.git/FETCH_HEAD": "69800d08b76ee12f9c2cb837d058d8d0",
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
"formulaireQuestions/.git/index": "91a4607525b97f4e2b5c3015c9729577",
"formulaireQuestions/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"formulaireQuestions/.git/logs/HEAD": "e568a34e3cac2536126db01fb40d0834",
"formulaireQuestions/.git/logs/refs/heads/main": "e568a34e3cac2536126db01fb40d0834",
"formulaireQuestions/.git/logs/refs/remotes/origin/HEAD": "6ae1a15eeb04217c15a00a69a24c287c",
"formulaireQuestions/.git/logs/refs/remotes/origin/main": "c3fab21e0e630cb7156f74703e3c8f46",
"formulaireQuestions/.git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
"formulaireQuestions/.git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
"formulaireQuestions/.git/objects/03/a734e65c20ff1d3e4c62ae07507a63362a40ee": "3779a3dc7a9ad4e0a88a493bd879790a",
"formulaireQuestions/.git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
"formulaireQuestions/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"formulaireQuestions/.git/objects/06/84ffc358409525253ac1c92677d9a4eaf001d8": "0941c4fb0e9af6060a1aa381f41d6a42",
"formulaireQuestions/.git/objects/0b/55e9b6803652940048709e4fda52b0ee83a4b4": "1d11cceeca1fabf4dd8f5caedced5461",
"formulaireQuestions/.git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
"formulaireQuestions/.git/objects/15/e552f60561480ad8f6d596700e8ffc3e0e8217": "bc694400dd5a3bcbfe8f11cbeebe4bef",
"formulaireQuestions/.git/objects/16/39e9173a1df594f08ee0dd6d289f48d80d3a1e": "269c691bea5bdae64e672559342fee85",
"formulaireQuestions/.git/objects/19/422d38c01b9921a94eb74f85ad7945a9684b3b": "8afdd9178456561ee56cd2ca09aabe70",
"formulaireQuestions/.git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
"formulaireQuestions/.git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
"formulaireQuestions/.git/objects/1f/2c4f37b97951a56d2322fd13efdb74ddb30a74": "a7aea3f67609dd55aeb4bf5c92ec0b53",
"formulaireQuestions/.git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
"formulaireQuestions/.git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
"formulaireQuestions/.git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
"formulaireQuestions/.git/objects/24/1d3d7b775226c4c06a88a052deeab88619c780": "ec0e9d250795258345d41e5e7937c55d",
"formulaireQuestions/.git/objects/24/f61a8639dd586e5153fca5a728f3374a179117": "5489f2a337d9f1ddebfc9c1e91979d0e",
"formulaireQuestions/.git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
"formulaireQuestions/.git/objects/2a/75d16115876469bba057ca4e22897e47db51ed": "22437f1a0aaaba2e0760f48497a8dfa4",
"formulaireQuestions/.git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
"formulaireQuestions/.git/objects/31/8f6b350816d25f83c712d41f29b05645e6e662": "15600d332117d832e4fe05136abae53a",
"formulaireQuestions/.git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
"formulaireQuestions/.git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
"formulaireQuestions/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"formulaireQuestions/.git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
"formulaireQuestions/.git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
"formulaireQuestions/.git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
"formulaireQuestions/.git/objects/58/8be75fafb2f8bacb461961fd34c20ad29d04f6": "bfe8048807f16393fab2890bde2c8d9b",
"formulaireQuestions/.git/objects/58/f74b6160645818c03bd16f573236a4188fc9de": "b266c314125f91236a201a5ba4ed2519",
"formulaireQuestions/.git/objects/59/9ea2bf78f61d835e32548b55635603ba80f166": "3fa760f1f31e17b230650be2e2275c9c",
"formulaireQuestions/.git/objects/5a/7725d723f0429448a59ada28db251ecd305524": "43226b7a8982cfdd536c0be92cfe1672",
"formulaireQuestions/.git/objects/5c/152d3224203173f8fd6a22e800d1ca8df205c0": "dd5f442850090fd24fb8bae2abb64e83",
"formulaireQuestions/.git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
"formulaireQuestions/.git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
"formulaireQuestions/.git/objects/74/4c6d0a9efcc9aad7892f9dacbc5c625b2bb555": "8c9f3951acc1489b66464913f7774078",
"formulaireQuestions/.git/objects/76/c7ef11170777135df5ef078c5d03ce2c47984e": "300dec1cde12dccf7d79131ec40f68fa",
"formulaireQuestions/.git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
"formulaireQuestions/.git/objects/84/b132a3215dacbabb1fc6211855a19d27defa12": "928a2bc445b426e1ca89b883d60b3d01",
"formulaireQuestions/.git/objects/87/2f7d07463d09c40d278c5da61dc0252f9c14f0": "6978ab0e903f71504892e098e849e38b",
"formulaireQuestions/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"formulaireQuestions/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"formulaireQuestions/.git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
"formulaireQuestions/.git/objects/8d/f54b22a74b75c2518c32c8bff21ba4f2608405": "919942c99d7179d4ab0214a460c591e9",
"formulaireQuestions/.git/objects/8e/155896ea0401fcf1258c76579ff9414313ebe5": "d633b9530d776da19164eaf34cddbac7",
"formulaireQuestions/.git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
"formulaireQuestions/.git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
"formulaireQuestions/.git/objects/95/b74e581781ee531c5f3fc1d57d03f34d37c821": "16c5597520112c1cc640186e8c2ad72a",
"formulaireQuestions/.git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
"formulaireQuestions/.git/objects/97/355a1d24a6ad692b9f963252058bd5b5c2d862": "25bfbf4d03001270bfe5ed53cd1e71ae",
"formulaireQuestions/.git/objects/9a/e26d4abea020235470910e5281cf742028e48b": "549c06fb8387c520607540450d98d11a",
"formulaireQuestions/.git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
"formulaireQuestions/.git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
"formulaireQuestions/.git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
"formulaireQuestions/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"formulaireQuestions/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"formulaireQuestions/.git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
"formulaireQuestions/.git/objects/cb/c2a28f76214cf04ad2e8049941927b7e93b5c1": "833534c3fec583be620a20018bd5049c",
"formulaireQuestions/.git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
"formulaireQuestions/.git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
"formulaireQuestions/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"formulaireQuestions/.git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
"formulaireQuestions/.git/objects/de/286ffead0d63c622d3af7044385956ef9640eb": "2729fcc8b77b47e7fca4c9803ae476ce",
"formulaireQuestions/.git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
"formulaireQuestions/.git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
"formulaireQuestions/.git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
"formulaireQuestions/.git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
"formulaireQuestions/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"formulaireQuestions/.git/objects/ed/a7a35640cecbd83ac8f6345090a561f9d37841": "643597f1108f7b2847fad0ea4fda6bd6",
"formulaireQuestions/.git/objects/ef/f8e6bcf9f04c6d978c6a40c8429c7e16713414": "217dcd68364873ff383edc8c7b38ca2b",
"formulaireQuestions/.git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
"formulaireQuestions/.git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
"formulaireQuestions/.git/ORIG_HEAD": "42dba6cbd04782256b0d1e3b3ae34797",
"formulaireQuestions/.git/refs/heads/main": "a354e2aa9f58528f3527482760541bea",
"formulaireQuestions/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"formulaireQuestions/.git/refs/remotes/origin/main": "a354e2aa9f58528f3527482760541bea",
"formulaireQuestions/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"formulaireQuestions/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"formulaireQuestions/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"formulaireQuestions/assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"formulaireQuestions/assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"formulaireQuestions/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"formulaireQuestions/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"formulaireQuestions/canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"formulaireQuestions/canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"formulaireQuestions/canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"formulaireQuestions/canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"formulaireQuestions/canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"formulaireQuestions/canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"formulaireQuestions/canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"formulaireQuestions/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"formulaireQuestions/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"formulaireQuestions/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"formulaireQuestions/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"formulaireQuestions/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"formulaireQuestions/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"formulaireQuestions/index.html": "626bdba74969c0252f88836d1be301d9",
"/": "eee5759fb4357f7480a24fcfdf9771cb",
"formulaireQuestions/main.dart.js": "8c9ba34cdce1d1ce47104325c5a1ff18",
"formulaireQuestions/manifest.json": "ebe332d3327088e90d8da23210c1d827",
"formulaireQuestions/README.md": "acf50da57e101e85797b6321bef9a68d",
"formulaireQuestions/version.json": "f988db8bbfb65ba76013554dba21676b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eee5759fb4357f7480a24fcfdf9771cb",
"main.dart.js": "9889fdf63b5dd7ee09ad8ee4c5c883e1",
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
