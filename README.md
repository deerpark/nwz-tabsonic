# Tabsonic for HTML5 prototype
PIXI.js를 기반으로 자동화빌드 도구(Grunt)가 사용되었습니다.<br>
bower.json 및 package.json 참고 하시면 종속성이 있는 플러그인들이 사용 되었음을 알 수 있습니다.

## Setting environment
- [Git](https://git-scm.com/) 버전관리 시스템
- [Node.js](https://nodejs.org/ko/) 패키지 관리 도구
	- Node.js는 필수 설치가 되어있어야 합니다.
- [bower](https://bower.io/) 웹 패키지 관리 도구 (install 참고)
- [grunt](http://gruntjs.com/) 빌드 자동화 도구 (install 참고)

## Install
Node.js / GIT 설치 후 GIT bash(터미널)에서 작업 폴더로 이동 후 아래 명령어 실행

    $ mk dir workFolderName && cd workFolderName
    $ npm init
	$ git init
    $ git clone git@github.com:deerpark/nwz-tabsonic.git
    $ npm install //package.json 종속성이 있는 플러그인 설치
    $ bower install //bower.json 종속성이 있는 플러그인 설치

## Serve / Build
작업 폴더에서 아래 명령어로 빌드 또는 로컬서버 로 테스트

	$ grunt serve //로컬 서버 실행 및 테스트
    $ grunt build //최종 빌드(빌드가 되었을 경우 $ git tag로 버전 명시)

## PIXI.js
http://www.pixijs.com/<br>
무료 게임엔진 프레임워크로써 게임 API를 지원합니다.<br>
- [공식 API](http://pixijs.download/release/docs/index.html)
- [예제](http://www.pixijs.com/gallery)

## Agile software development
2주 간격으로 스프린트 목표를 설정 후 진행하고 리뷰합니다.
상세한 개발방법이 적용되진 않았으나 현재까진 2주 스프린트로 진행 되었습니다.

## Version
버전의 규칙은 떠로 정해지진 않았지만<br>
v(주 빌드).(커밋).(핫픽스) 형식으로<br>
현재 v1.0.7 을 유지하고 있습니다.

## File architecture
- **app/** (실질적 작업 폴더)
 	- **images/**
 	 	- **game/**
 	- **scripts/**
 	 	- **controller/** (컨트롤에 관련된 js 모듈 집합 폴더)
 	 	 	- *game-loop-controller.js* (animation loop 관련 모듈)
 	 	 	- *scene-controller.js* (Scene 이동관련 모듈)
 	 	- **scene/**
 	 	 	- *game-scene.js* (메인 Scene)
 	 	 	- *main-menu-scene.js* (메인 메뉴)
 	 	- *intro.js* (로딩 및 초기화 모듈)
 	 	- *outro.js* (게임 종료 관련)
 	- **styles/**
 	 	- *main.css*
- *index.html* (자동으로 빌드 되는 index.html)
- **bower-components/** (bower 패키지 폴더)
- **dist/** (빌드 최종 폴더)
- **node-modules/** (npm 패키지 폴더)
- *bower.json* (bower 설정 및 패키지 리스트)
- *Gruntfile.js* (grunt 빌드 관련 설정)
- *package.json* (npm 패키지 설정 및 리스트)
- *README.md* (현재 보고있는 문서 md파일)
- *template.index.html* (wiredep을 활용해 index.html을 자동으로 생성해주기 위한 템플릿)