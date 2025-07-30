'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4dd95e907cd40ffa83b4d18b2aa653a8",
".git/config": "c50416f6d3b8583f0dfdc8cfddef29c8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ab70d5c4476e7bb005f49f4219c5c87b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "02024a4e2b25c1101e00c34d5eccb891",
".git/logs/refs/heads/main": "af3a06db541ec9a4a8c8584a3e3d533e",
".git/logs/refs/remotes/origin/main": "506853adfe76482d6eea2c61fcc0dbb3",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/e021ab64d5f9a1310e0f73f7646ba7895f3d63": "b37bd75664bc58a148f58ee7dab2b303",
".git/objects/07/25c05eb3a1adb8c2933b5cc45e8e111e15722f": "b001348c49103f64db140cf705006226",
".git/objects/17/d6f9b2807b871265cb9513fb632f990e560880": "51a7b8c7541b17ce0e44f6a870e97b85",
".git/objects/1c/76b26063fa73787f4d756277762da8d3fc95c3": "4e160f9e2eacf910194c8792f7981b78",
".git/objects/20/33437b89b539526131cfec9fc5072c53d12863": "a4e93d77de51eb0fc8e91f0111ef830d",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/9ec9da7d225e95005196378ac1da8428100153": "ab1bd2127089c7f19014d15ea15fc715",
".git/objects/4c/e8f7014a60eec29c51cf505a7fcfc82bfa0b2f": "7a8a04d232f09e6df5bce37bdaa91b6e",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/54/2da5cf55151abcfba52b61ee001f1529e7cd29": "a80f3732fbd9edfc3d00ff65bfad013a",
".git/objects/55/a8690f8ad48cd7c696bf2ba647735cbada74e8": "e9a47317b88de35cb91ebadef9f10ceb",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/e6ce2a925e6f00f93dcfb9da0aea67b8cc83ff": "cbd61502490d2cefb78e8cd4085a3aa6",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/67a75afb503e9d9383058786ecb3ff472b93a3": "db2b70ce67e917df0ac84e7094083802",
".git/objects/61/0491ce951b69a365b68329486badac31757c2a": "3275bc4c3a330a42e7698978e76989bd",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/68/3c1374e1f4b3ddf51b8c5eac956416c3915b94": "9777b1e52b2597a71142ea2d2d14e8b7",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/21161a98aab52e53b95bb812178c6681225cbc": "b6bf500aaa5693ece0055c2b13de30b6",
".git/objects/6c/bfe53d376465d5e1cfe4b5bea51beaf4678e2c": "40a006c6347d13252f64d0eb0f1089aa",
".git/objects/71/60d5897743a52cd4c30e64f5b75540cda4b6b9": "6334c51cbb4b13e9f8b9e95c8e53b77e",
".git/objects/7b/efd0c116090a802f7102d4ec6ed261d9168b7b": "ba9b77b1651cbd144eb82d48e34f8174",
".git/objects/80/5c8ddf7f2a87a84d70d0946d61e153c89e65f9": "3f27072460114d83e525f7ec8dffd8cb",
".git/objects/82/31f1bb6a3025e333ad05d71067a46502f5ac40": "2d99ca8acbadf6c1ec72c8053d9f0113",
".git/objects/86/4e4de4213a8ba4248ec920627d539acacfe8f9": "0fe69fc6607b4d2e353c1814c3012231",
".git/objects/88/7a8d3a3fb9835ab45e876e28209e3e6eb9903d": "ebc20a57f0df34e4bb2d04760f0bf3d4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/1e01097827d934c3391d8c82d4b52197cba4ab": "4691f178e9077a8e169b2ebf851cbc18",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/99/bc2a9fb5cad0143207bbf5ac54016d3de89c9c": "c79ec5ed1f792d6524cbcccbf827eacc",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/c4b1ddf0116785e63f8dd8774f9f728e3547b1": "8d54c396e5f9539dcccab27785983229",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/0e57af23be353d4096cd17b6d0e7e26bdea3c3": "b39dd8658f3cb2ce08282797cced9b33",
".git/objects/b5/5dda4335f5361564487ac9d48167030b2b74e7": "33c8da475e2b1b32eb9336b7a07d0e5e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/b34cc71568dca6a5ace34d908723baef987f3e": "f41dc6a1d2a0d900f3018b4cf677e35d",
".git/objects/c4/825db434586eee46254431fe29b5a82ae6f04b": "465dd9a161633f0ab4d1a619f12a2479",
".git/objects/c4/e89ca7ecd6ea2b2b922b6d911d7b0d6221fbd7": "084bd64fb844ffed49bee62c8680b99b",
".git/objects/cc/adc5b07a3f1b745d5a109f2e2e7ecdd0e48cbc": "2d38e43f23172fefd6eb3dfc5766ee0b",
".git/objects/cc/db0f25cf3c39cce3fb25431236fd6a6e4f220a": "ff465230cafe3701ea44b6ae672e425c",
".git/objects/d2/d15054ecfebe013adc9a62d0c0cac7b54e01c4": "15ed0003edcead8939d5f525fd6bd96b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/beee91adbb524648fab21c56b51025a19039cc": "ab6fd0c18eed27cb988baa1aa03664c5",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e7/00d5aa1041749accea6ada44bd8315aff06791": "6aade7bc772c80d0fd9ed3d8438b0caa",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/09138e31cf3cc352bd15e67936759727570104": "e70624b2d09a6e66e155aa98c338bd29",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/4b99dfabc2d9ae74642e02b3eb6686bf32f828": "f9cabcd4cb68f8919cc9a04c720dfc7e",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/e24eb1babddf49c42d8730f778aba2206bcfa8": "e90b0ec6e7857d2acaeb228d175e6a84",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/3929b1fdaf7a6e5d760b5bb47037bdc734bfdb": "8ad30cf06149758cb311e3de6609ba61",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/aa3eb3f4af1cd95f73f1ad97ed60b2eff59511": "ba3bfe252fa338c0efbd9c8f254fdf88",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/main": "fcca2ad5f922c9096e867ea38c052213",
".git/refs/remotes/origin/main": "fcca2ad5f922c9096e867ea38c052213",
"assets/AssetManifest.bin": "eba29eb70c186e8c3d6fecf1fa53ba24",
"assets/AssetManifest.bin.json": "ed28eb2c279cde4d30d70c0413190ff5",
"assets/AssetManifest.json": "e3c808d6762701183a7f282420eb6843",
"assets/assets/fonts/NotoSansKR-VF.ttf": "89185390f356838a324a440b3b7119a8",
"assets/assets/logos/hanbit_logo.ai": "5062982f465cbc1fcff0ffc66557c1b1",
"assets/assets/logos/hanbit_logo.png": "eaf0271e36c3c9fba549f71cdc5ed303",
"assets/assets/logos/hanbit_logo.svg": "a0d9b6a0519a8306fbe77e78f4905d6b",
"assets/FontManifest.json": "65b698c48f8fe6ed7f4e159d34d3522a",
"assets/fonts/MaterialIcons-Regular.otf": "cc9af647dbf98471ae678c8f9dab7a48",
"assets/NOTICES": "6c1feaf9cdb65501d77ffc684f703174",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"CNAME": "ba7455c60a0d7607beb251f2c2305ac6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "6543b532f969b7e063743806251fa0d0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9d041f73119c56495c27a6d761430d0f",
"/": "9d041f73119c56495c27a6d761430d0f",
"main.dart.js": "4b6fe97ae01b54649b8471b37e6a621e",
"manifest.json": "9ae27fabb2cd58edcc2b7433d1121876",
"version.json": "a0ab8a166b72e4fd0c51f862fc08efee"};
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
