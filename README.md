# URL Shortener

입력된 긴 URL을 짧은 URL로 바꿔주는 웹 사이트입니다.
<br></br>

## 기능
1. 웹 페이지 입력폼에 URL 입력 시 단축된 결과 출력 (결과값은 주소를 제외하고 8글자 이내, 같은 URL 입력 시 동일한 결과값 도출)
2. 브라우저 주소창에 단축된 URL 입력 시 기존 URL로 리다이렉트
3. +) 입력된 URL이 올바른 형식인지 검증
4. +) 단축된 결과 출력 시 단축 요청 횟수, 단축 URL 사용 횟수, 최초 생성 시간 정보도 함께 출력

## URL 단축 방식
기존 방식: 
- 8글자의 고유한 랜덤 스트링으로 변환된 short URL을 DB에 저장
- short URL의 경로로 접근하는 요청이 있으면 DB의 모든 데이터의 short URL을 조회 후 일치하는 것이 있으면 original URL로 리다이렉트

업데이트 방식: 
- 기존 방식은 short URL 경로로 접근하려면 DB를 전부 조회해야하므로 비효율적
- 각 데이터마다 자동 증가하는 고유 숫자 id를 부여하여 base62 알고리즘으로 id를 인코딩하여 short URL 생성
- short URL 경로로 접근하면 short URL을 디코딩하여서 id 값을 찾아내고, 이 id 값으로 DB를 조회하여 original URL을 빠르게 찾아냄 

## 데모 사이트
[www.yourshorturl.tk](http://www.yourshorturl.tk "site link") 
<img width="1200" alt="Screen Shot 2021-11-05 at 4 00 00 AM" src="https://user-images.githubusercontent.com/47516074/140403197-4fcd3b1c-916f-449e-b3af-797efebede48.png">

## 운영 환경
<pre>
- Node.js      v14.17.6
- Express      v4.16.4
- MongoDB      v4.1.3
- Mongoose     v6.0.12
- Pug          v3.0.2
</pre>

## 프로젝트 디렉토리 구조 :open_file_folder:
    backend
    ├── public             # 정적 파일 (css)
    ├── src                
      ├── api              # 라우터, 컨트롤러, 서비스
        ├── original       # ★ 기존 URL 리다이렉트 기능 관련 파일
        └── short          # ★ 단축된 URL 생성 기능 관련 파일 
      ├── models           # DB Model 정의
      └── utils
    ├── views              # pug 템플릿 파일
    ├── app.js             # express 객체 생성, 미들웨어 관리
    └── db.js              # MongoBD 연결

## 작동 스크린샷

<img width="800" alt="Screen Shot 2021-11-05 at 4 05 20 AM" src="https://user-images.githubusercontent.com/47516074/140404313-4e060ef8-7366-4565-aa77-46a904bef54a.png">
1. 긴 URL 입력 화면 <br></br> 
<img width="800" alt="Screen Shot 2021-11-05 at 4 05 39 AM" src="https://user-images.githubusercontent.com/47516074/140404330-e5fb1a20-c4f7-4fd4-a31e-a464d1897a95.png">
2. 줄여진 URL 결과 화면 <br></br> 
<img width="800" alt="Screen Shot 2021-11-05 at 4 06 45 AM" src="https://user-images.githubusercontent.com/47516074/140404349-0d1c44ed-4a48-4c46-ba69-c0e89d393a05.png">
3. 줄여진 URL로 접속 시 기존 URL로 리다이렉트 <br></br> 
<img width="800" alt="Screen Shot 2021-11-05 at 4 07 04 AM" src="https://user-images.githubusercontent.com/47516074/140404333-5c098f5f-76b6-4b45-ba36-538ddc34d143.png">
4. 같은 긴 URL을 입력했을 때 동일한 줄여진 URL이 결과로 나옴 <br></br> 
<img width="800" alt="Screen Shot 2021-11-05 at 4 08 00 AM" src="https://user-images.githubusercontent.com/47516074/140404324-8cd3f728-a0a0-439d-9897-ebd6eab5783f.png">
5. 잘못된 URL 형식이 입력될 경우 <br></br> 
<img width="800" alt="Screen Shot 2021-11-05 at 4 08 17 AM" src="https://user-images.githubusercontent.com/47516074/140404301-11c673ce-1004-4853-bfba-d8a3faf1d736.png">
alert가 뜨고 OK를 누르면 다시 처음 화면으로 <br></br> 

