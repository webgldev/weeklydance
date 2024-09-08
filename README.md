How to start
- npm i
- pnpm dev

***

### 위클리댄스 설명

1. 캐릭터 만들어서 glb로 저장 (https://readyplayer.me/)
2. glb to fbx 로 변환 (https://products.aspose.app/3d/conversion/glb-to-fbx)
3. 믹사모에 fbx 임포트 (https://www.mixamo.com/#/?page=1&type=Motion%2CMotionPack) 애니메이션 추가해서 fbx 다운로드
4. pnmd 에서 r3f 코드 만들고 nextjs에 glb 임포트하고 타입 추가 (https://gltf.pmnd.rs/)
5. FBX 애니메이션의 트랙 이름을 GLB 모델의 본 이름으로 매칭 track.name.replace('fbx 트랙 이름', 'glb 본 이름')
6. 각 애니메이션에 name 을 할당해주고, 버튼 onClick에 애니메이션 이벤트 전달해주면 완성

- 구글 Pacifico 폰트 https://fonts.google.com/share?selection.family=Pacifico
- 타이틀에 text-shadow 네온효과 적용
`text-shadow: 0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgb(19 121 222 / 80%), 0 0 30px rgb(104 104 105 / 80%), 0 0 40px rgb(51 105 159 / 80%), 0 0 50px rgb(123 141 159 / 80%), 0 0 60px rgb(56 88 119 / 80%);`
- 전체 코드 : https://github.com/webgldev/weeklydance

