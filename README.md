# YouTube 클론 코딩 프로젝트

https://user-images.githubusercontent.com/87454393/236725988-2f58eb82-3f0f-4d0c-8a07-01651eda0f18.mp4

## 배포 링크

https://guileless-narwhal-97a3d6.netlify.app/

## 프로젝트 설명

- 유튜브 클론코딩 프로젝트 입니다. 유튜브 메인화면, 상세화면, 검색에 대한 클론을 진행하였습니다.
- 제작기간: 2023.4.27 ~ 2023.5.7

## 폴더구조

```
src
└ components
  ├ Header.jsx
  ├ RelatedItem.jsx
  ├ RelatedList.jsx
  ├ SearchVideoList.jsx
  ├ VideoItem.jsx
  └ VideoList.jsx
└ pages
  ├ Home.jsx
  ├ Detail.jsx
  └ Search.jsx
└ services
  └ fetcher.js
└ utils
  ├ scrollToTop.js
  └ timeAgo.js
```

## 기술 스택

- React.js + JavaScript
- 사용 라이브러리: `React Query`, `React Router DOM v.6`, `React Hook Form`, `React Helmet`

## 구현사항

- [x] 인기동영상 상위 25개 리스트 받아서 메인화면에 출력
- [x] 목록의 영상 클릭 시 상세화면 이동하기
- [x] 상세화면에서 영상, 영상 메타정보, 관련동영상 보여주기
- [x] 검색 - 키워드에 해당하는 동영상들 보여주기

## 회고

https://hheeseung.notion.site/2-YouTube-Clone-4a3f08a77b044c05b9b2e7f0636ff030
