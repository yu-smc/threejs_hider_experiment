// シーンの作成
const scene = new THREE.Scene();

// カメラの作成
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 5;
// カメラを更新
camera.lookAt(new THREE.Vector3(0, 0, 0));

// レンダラーの作成
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("canvas").appendChild(renderer.domElement);

const skyTexture = new THREE.TextureLoader().load("./bkg.jpg");
const skyMaterial = new THREE.MeshBasicMaterial({
  map: skyTexture,
  side: THREE.BackSide,
  transparent: true,
});
const skyGeometry = new THREE.SphereGeometry(100, 32, 32);
const sky = new THREE.Mesh(skyGeometry, skyMaterial);
// NOTE: 編集画面の一部で -1 を使っているので一律で -2 にする
sky.renderOrder = -2;
scene.add(sky);

// ジオメトリの作成
const geometry = new THREE.BoxGeometry(1, 1, 1);

// マテリアルの作成
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// メッシュの作成
const cube = new THREE.Mesh(geometry, material);

// シーンへの追加
scene.add(cube);

// ジオメトリの作成
const hiderGeometry = new THREE.BoxGeometry(1, 1, 1);

// マテリアルの作成
const hiderMaterial = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  colorWrite: false,
});

// メッシュの作成
const hiderMesh = new THREE.Mesh(hiderGeometry, hiderMaterial);
hiderMesh.renderOrder = -1;

hiderMesh.position.x = -0.2;
hiderMesh.position.y = -0.2;
hiderMesh.position.z = 1;

// シーンへの追加
scene.add(hiderMesh);

// アニメーションループの設定
function animate() {
  requestAnimationFrame(animate);
  // レンダリング
  renderer.render(scene, camera);
}

// アニメーションの開始
animate();
