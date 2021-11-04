# URL Shortener

입력된 긴 URL을 짧은 URL로 바꿔주는 웹 사이트입니다.
<br></br>

## 기능
1. 웹 페이지 입력폼에 URL 입력 시 단축된 결과 출력 (결과값은 주소를 제외하고 8글자 이내, 같은 URL 입력 시 동일한 결과값 도출)
2. 브라우저 주소창에 단축된 URL 입력 시 기존 URL로 리다이렉트
3. +) 입력된 URL이 올바른 형식인지 검증
4. +) 단축된 결과 출력 시 단축 요청 횟수, 단축 URL 사용 횟수, 최초 생성 시간 정보도 함께 출력

## 데모 사이트

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
