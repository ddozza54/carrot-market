<br/>

# 🐻 또 뭐해 DDOING 

> 또 DDO + 뭐해 ING 를 합친 또잉이란 이름의 SNS 입니다.

> 사실은 또자가 만든 SNS라 DDOING 입니다.
간단한 글을 POST 하고, 좋아요 버튼을 누를 수 있습니다. 

<br/>

## 🌻 실행 방법

```js
npm install
pscale connect carrot-market
npm run dev
```

<br/>

## ✨ 업데이트 내역

* 0.0.1
    * 캐럿마켓 챌린지 최소 졸업 요건에 맞춘 기능 구현
    * 배포된 페이지에서 기능이 정상작동하지 않습니다. 

<br/>

<br/>

## 🐸 기능 소개

### 1. 로그인 여부에 따른 환영 페이지
<img src="https://github.com/ddozza54/carrot-market/assets/100435210/6051b732-3e39-4d9c-84cf-137373ce7db0" width="340"/>

- session 에 로그인 세션이 없을 시, before-login 페이지로 이동합니다.
- 로그인 혹은 회원가입 페이지로 이동이 가능합니다.

<img src="https://github.com/ddozza54/carrot-market/assets/100435210/0e61273d-eb9a-4ed7-abc4-d0651a1ae2bf" width="300"/>

- 앱 다운로드를 클릭 시 알람이 뜹니다.

  
<br/>

### 2. 회원가입 페이지


<img src="https://github.com/ddozza54/carrot-market/assets/100435210/ec8786bf-04a7-4146-9f1b-35e364ca4860" width="340"/>

- 이름, 이메일, 핸드폰번호, 비밀번호로 가입이 가능합니다.

<img src="https://github.com/ddozza54/carrot-market/assets/100435210/e286e5c6-3568-4d05-aee5-63c571b53256" width="340"/>

- 핸드폰 번호가 11자 미만일 경우 오류 메세지가 뜹니다.

<img src="https://github.com/ddozza54/carrot-market/assets/100435210/4313fb6e-c486-4f87-bcfa-927a03677523" width="340"/>

- Create Account 를 클릭 시, 한번 더 회원가입 여부를 확인합니다.

<br/>

### 3. 로그인 페이지

<img src="https://github.com/ddozza54/carrot-market/assets/100435210/259f4de1-ed29-4cb8-9a1c-8b0842327f28" width="340"/>

- 이메일, 전화번호 둘 중에 선택하여 로그인을 할 수 있습니다.

- 아이디가 없는 경우 다음과 같은 알람이 나옵니다.
  
<img src="https://github.com/ddozza54/carrot-market/assets/100435210/6ffe00af-e41a-4819-8679-bde5a80b06f2" width="340"/>

- 아이디는 존재하지만, 비밀번호가 일치하지 않으면 다음과 같은 알람이 나옵니다.
  
<img src="https://github.com/ddozza54/carrot-market/assets/100435210/b6408605-8266-4939-ad0a-1ed6e74f3c65" width="340"/>

<br/>

### 4. Home page 

- 존재하는 모든 tweet 이 보여집니다. 

- 유저, title, 트윗 내용을 확인할 수 있습니다. 

- 트윗 내용을 클릭 시 트윗 상세 페이지(/tweet/id)로 이동합니다. 

<img src="https://github.com/ddozza54/carrot-market/assets/100435210/0914dc51-4394-49fe-9199-800fe733480e" width="340"/>


- +버튼 클릭 시 트윗을 작성할 수 있습니다.

<img src="https://github.com/ddozza54/carrot-market/assets/100435210/5cc26e88-cec5-49ec-a7ac-06e0377f3bbf" width="120"/>


<br/>

### 5. 트윗 작성 Page

<img src="https://github.com/ddozza54/carrot-market/assets/100435210/f70efef6-069b-4813-b82e-3ae3475ab941" width="340"/>

- 트윗을 작성할 수 있는 페이지 입니다.

- 현재 로그인한 user 에 대한 정보를 알 수 있습니다.

- title 과 내용을 입력 후 posting 버튼을 누르면 트윗이 등록됩니다.

<br/>

### 6. 트위터 디테일 페이지

<img src="https://github.com/ddozza54/carrot-market/assets/100435210/afc38369-671c-463c-914d-fc0d37a9f19a" width="340"/>

- 트윗의 디테일을 볼 수 있는 페이지 입니다.
- 좋아요 버튼을 누를 수 있고, 실시간으로 UI 가 변경됩니다.
- 댓글은 mock data 입니다.

<br/>

### 7. Header

- 클릭 시 '/' home 으로 이동합니다.
- hover 시 3D 또자의 머리가 돌아갑니다
<img src="https://github.com/ddozza54/carrot-market/assets/100435210/b7fec738-69cd-4d40-9deb-c6be7ce608b6"/>

  

