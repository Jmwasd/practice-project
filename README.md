4/22 Today I Learn

오늘 학습 내용

nodejs vs spring boot
독서 - 소프트 스킬
프로그래머스 mysql-level 4 => 1문제
타입스크립트 - 함수
프레임 워크 vs 라이브 러리
내가 코드를 컨트롤 => 라이브러리 ex ) jQuery

누군가의 규칙을 따라 코딩 => 프레임 워크 ex) django , spring boot

프레임워크 또는 라이브러리라는 용어로 정의하기 애매한 것들도 존재한다. 예를들어 리액트같은 경우 라이브러리로 공식문서에 적혀있지만 컴포넌트별로 규칙이 존재하기 때문에 프레임 워크라러도 불릴 수 있다.

Node JS vs Spring boot
Node.js : 브라우저 외부에서 Javascipt 코드를 실행하는 데 사용되는 런타임 환경. 프레임 워크가 아니다.

Spring boot(프레임 워크) : 자바기반 런타임 환경

Node.js 와 Spring boot의 정확한 비교를 위해 express.js vs spring boot 또는 Koa vs Spring boot 등이 맞지만 범위를 넓혀 Node.js를 사용할 것.(express, koa는 node.js를 위한 프레임 워크)

회사별 사용 기술
Node.js => Medium / Netflix / Uber / LinkedIn …

Spring Boot => Google / Microsoft / Amazon ….

주요 특징
Node.js : event-driven, single-threaded, non-blocking I/O model
장점

자바스크립트 커뮤니티가 빠르게 성장중
가볍고 빠르다.
싱글 쓰레드 => 적은 메모리 공간을 차지
I / O 작업에 적합
Npm의 지속적인 성장
단점

Multi-threading을 지원하지 않는다 => 프로세스가 죽으면 대체할 프로세스가 없다.
정적 타입 체크의 부족 => 런타임환경에서 문제가 될 수 있다.
대용량 컴퓨팅 작업에 적합하지 않다 => 병목현상
Spring Boot : 프로덕션 등급의 독립적 애플리케이션을 빠르게 실행 가능 / 라이브러리 버젼 자동 관리 / multi-threaded
장점

자바의 커뮤티니는 이미 성장해있다.
정적 타입 언어(타입의 안전성)
멀티 쓰레드
쉽게 사용 가능한 수 많은 의존성
유지 보수성과 안정성이 뛰어남
단점

많은 메모리 공간을 차지
반복적으로 비슷한 형태를 띄는 코드(boilerplate code)는 디버깅을 어렵게할 수 있다.
사용되지 않는 종속성을 포함할 수 있다.
상황에 따른 선택
Node.js : I / O에 의존하는 애플리케이션(예약시스템, 미디어 앱)을 구축하는 경우 사용

Spring Boot : 엄청난 양의 컴퓨팅(빅 데이터, 전자 상거래 플랫폼)을 수행해야 할 때 사용

참고 자료
https://betterprogramming.pub/node-js-vs-spring-boot-which-should-you-choose-2366c2f76587

https://www.youtube.com/watch?v=5DxMUShYHW8&t

https://www.youtube.com/watch?v=t9ccIykXTCM&t

원본
https://velog.io/@aksdb9865
