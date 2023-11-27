var map = L.map('map').setView([33.591726688337175, 130.41090864458906], 15);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// Open Street Map hot
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
  options: {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });

  L.marker([33.58992, 130.420461], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！');
L.marker([33.596104, 130.40956], { icon: pinkIcon }).addTo(map).bindPopup('こんにちは！');
L.marker([33.593638, 130.405827], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！');
L.marker([33.594782, 130.414324], { icon: pinkIcon }).addTo(map).bindPopup('こんにちは！');

// L.marker([33.591726688337175, 130.41090864458906], { icon: whiteIcon }).addTo(map)
// .bindPopup('こんにちは<br><img src="images/DSC07184のコピー.JPG" alt="img">');

//アイコン
// const whiteIcon = L.icon({
//   iconUrl: 'images/ico.png',
//   shadowUrl: 'images/ico_shadow.png',

// iconSize:     [40, 40], // size of the icon
// shadowSize:   [40, 40], // size of the shadow
// iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
// shadowAnchor: [20, 40],  // the same for the shadow
// popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
// });
const circle = L.circle([33.58992, 130.420461], {
  color: '#999', //円の輪郭線の色
  fillColor: '#999', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 200 //半径、メートルで指定
}).addTo(map);

circle.bindPopup("半径1kmの範囲");

const circl = L.circle([35.681122, 139.76775], {
  color: '#999', //円の輪郭線の色
  fillColor: '#999', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 200 //半径、メートルで指定
}).addTo(map);

circle.bindPopup("半径1kmの範囲");

const circ = L.circle([35.658504, 139.701859], {
  color: '#999', //円の輪郭線の色
  fillColor: '#999', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 140 //半径、メートルで指定
}).addTo(map);

circle.bindPopup("半径1kmの範囲");

const cir = L.circle([33.372461, 129.951514], {
  color: '#999', //円の輪郭線の色
  fillColor: '#999', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 200 //半径、メートルで指定
}).addTo(map);

circle.bindPopup("半径1kmの範囲");









// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);

