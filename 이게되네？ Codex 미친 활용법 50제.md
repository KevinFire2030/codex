# 이게되네? Codex 미친 활용법 50제

회사 업무에서 Codex를 "코딩 도구"가 아니라 기획, 문서, 데이터, 자동화, 협업, 운영까지 도와주는 업무 에이전트로 쓰기 위한 추천 목차입니다.

- 작성 목적: 2시간짜리 Codex 실습 강의 준비용 아이디어 뱅크
- 구성 참고: `이게 되네？ 오픈클로 미친 활용법 50제.md`
- 기준일: 2026년 6월 9일
- 공식 참고: OpenAI Codex Manual, https://developers.openai.com/codex/codex-manual.md
- 공식 참고: OpenAI Codex 소개, https://openai.com/codex/

## 참고한 Codex/AI 코딩 관련 도서 10권

1. Tom Taulli, *AI-Assisted Programming*, O'Reilly, 2024  
   https://books.google.com/books/about/AI_Assisted_Programming.html?id=o1wBEQAAQBAJ
2. Brent Laster, *Learning GitHub Copilot*, O'Reilly, 2025  
   https://books.google.com/books/about/Learning_GitHub_Copilot.html?id=RrZxEQAAQBAJ
3. Scott McCoy, Mary Delamater, *Murach's AI-Assisted Programming with Copilot*, Murach, 2025  
   https://books.google.com/books/about/Murach_s_AI_Assisted_Programming_with_Co.html?id=Rwxf0QEACAAJ
4. Leo Porter, Daniel Zingaro, *Learn AI-Assisted Python Programming, Second Edition*, Manning, 2024  
   https://books.google.com/books/about/_.html?id=tSUmEQAAQBAJ
5. Christoffer Noring 외, *AI-Assisted Programming for Web and Machine Learning*, Packt, 2024  
   https://books.google.com/books/about/AI_Assisted_Programming_for_Web_and_Mach.html?id=UVcdEQAAQBAJ
6. Muralidhar Kurni 외, *AI-assisted Programming for Web and Machine Learning*, BPB, 2025  
   https://books.google.com/books/about/AI_assisted_Programming_for_Web_and_Mach.html?id=qzSNEQAAQBAJ
7. 최지호, *요즘 바이브 코딩 클로드 코드 완벽 가이드*, 골든래빗, 2025  
   https://www.yes24.com/product/goods/151850127
8. 조태호, *혼자 공부하는 바이브 코딩 with 클로드 코드*, 한빛미디어, 2025  
   https://m.yes24.com/goods/detail/167573138
9. Levi Katz, *Cursor AI 2.0*, Amazon KDP, 2025  
   https://books.google.com/books/about/Cursor_AI_2_0.html?id=ksG90QEACAAJ
10. Rowan T. Mercer, *Cursor AI for Developers*, Amazon KDP, 2025  
    https://books.google.com/books/about/Cursor_AI_for_Developers.html?id=x5Ju0QEACAAJ

## Part 01. Codex 업무 환경 길들이기

### Chapter 01. 처음 만나는 회사 업무용 Codex

- [미친 활용 01] "업무 요청서" 한 줄을 Codex 작업 지시서로 바꾸기
- [미친 활용 02] Goal, Context, Constraints, Done when 형식으로 프롬프트 표준화하기
- [미친 활용 03] 기존 프로젝트 폴더를 읽고 업무 지형도 만들기
- [미친 활용 04] 회의 메모를 기능 요구사항, 리스크, 액션 아이템으로 분해하기
- [미친 활용 05] "이거 왜 안 돼?" 로그를 디버깅 태스크로 바꾸기

### Chapter 02. 팀 표준을 Codex에 주입하기

- [미친 활용 06] `AGENTS.md`로 팀의 개발 규칙, 테스트 명령, 금지사항 저장하기
- [미친 활용 07] 반복되는 코드 리뷰 기준을 `code_review.md`로 만들기
- [미친 활용 08] 부서별 산출물 양식을 Markdown 템플릿으로 정리하기
- [미친 활용 09] 프로젝트별 "완료 조건" 체크리스트 만들기
- [미친 활용 10] 신규 입사자용 레포지토리 온보딩 문서 자동 생성하기

## Part 02. 기획과 분석 업무 자동화하기

### Chapter 03. 요구사항을 실행 가능한 작업으로 바꾸기

- [미친 활용 11] 고객 요청 메일을 사용자 스토리와 인수 조건으로 변환하기
- [미친 활용 12] 모호한 요구사항을 Codex가 먼저 질문하게 만들기
- [미친 활용 13] 기능 개발 전에 영향 범위 분석표 만들기
- [미친 활용 14] 기존 코드에서 실제 업무 규칙을 역추적하기
- [미친 활용 15] 개발, QA, 운영 관점의 리스크 목록 생성하기

### Chapter 04. 데이터와 문서에서 인사이트 뽑기

- [미친 활용 16] CSV나 엑셀 데이터를 읽고 이상치 후보 찾기
- [미친 활용 17] 로그 파일에서 장애 패턴과 재현 조건 추출하기
- [미친 활용 18] API 응답 샘플을 보고 데이터 계약서 만들기
- [미친 활용 19] 사내 위키 문서를 요약하고 최신화 후보 표시하기
- [미친 활용 20] 반복 보고서 초안을 표, 그래프, 요약 문장으로 구성하기

## Part 03. 개발, 테스트, 리뷰 실전 투입하기

### Chapter 05. 기능 개발을 Codex와 함께하기

- [미친 활용 21] 작은 기능을 설계, 구현, 테스트까지 한 번에 맡기기
- [미친 활용 22] 레거시 코드를 읽고 변경 가능한 최소 지점 찾기
- [미친 활용 23] UI 스크린샷이나 설명을 바탕으로 화면 컴포넌트 만들기
- [미친 활용 24] API 명세를 기반으로 클라이언트/서버 샘플 코드 만들기
- [미친 활용 25] 사내 공통 유틸 함수를 더 읽기 쉬운 형태로 리팩터링하기

### Chapter 06. 테스트와 품질을 자동으로 챙기기

- [미친 활용 26] 버그 리포트를 재현 테스트로 바꾸기
- [미친 활용 27] 테스트가 없는 핵심 로직에 최소 단위 테스트 추가하기
- [미친 활용 28] 실패한 CI 로그를 읽고 원인 후보와 수정안을 정리하기
- [미친 활용 29] 린트, 타입 체크, 테스트 명령을 순서대로 실행하고 결과 요약하기
- [미친 활용 30] 변경 diff를 보고 회귀 위험이 큰 부분만 다시 검토하기

### Chapter 07. 코드 리뷰와 PR 업무 줄이기

- [미친 활용 31] PR 설명을 "무엇을, 왜, 어떻게 검증했는지" 형식으로 자동 작성하기
- [미친 활용 32] 커밋 전 변경사항을 자체 리뷰하고 위험한 패턴 찾기
- [미친 활용 33] 리뷰 코멘트를 작업 목록으로 바꾸고 하나씩 반영하기
- [미친 활용 34] 브랜치 생성, 커밋, 푸시, PR 초안 작성 흐름 익히기
- [미친 활용 35] 릴리즈 노트 초안을 사용자 영향 중심으로 작성하기

## Part 04. 사무 자동화와 지식 관리 확장하기

### Chapter 08. 반복 사무를 스크립트로 바꾸기

- [미친 활용 36] 매일 반복하는 파일 정리 작업을 PowerShell 또는 Python 스크립트로 만들기
- [미친 활용 37] 폴더의 문서 파일을 분류하고 이름 규칙을 통일하기
- [미친 활용 38] 회의록에서 담당자별 액션 아이템을 추출하기
- [미친 활용 39] 정기 보고서 생성 스크립트를 만들고 실행법 문서화하기
- [미친 활용 40] 브라우저 테스트로 사내 웹 화면의 깨짐 여부 확인하기

### Chapter 09. 사내 지식을 Codex 워크플로로 만들기

- [미친 활용 41] 자주 쓰는 업무 절차를 Codex Skill로 만들기
- [미친 활용 42] 팀별 산출물 검수 기준을 재사용 가능한 체크리스트로 만들기
- [미친 활용 43] MCP나 커넥터로 GitHub, 문서, 이슈 시스템 연결 아이디어 정리하기
- [미친 활용 44] 업무별 프롬프트 라이브러리를 만들고 실패 사례도 함께 기록하기
- [미친 활용 45] 프로젝트 회고를 통해 `AGENTS.md`를 지속 개선하기

## Part 05. 운영, 보안, 거버넌스까지 안전하게 쓰기

### Chapter 10. 회사에서 안전하게 Codex 쓰기

- [미친 활용 46] 민감 정보, 토큰, 고객 데이터가 프롬프트에 들어가지 않게 점검하기
- [미친 활용 47] 샌드박스와 승인 정책을 업무 위험도에 맞게 선택하기
- [미친 활용 48] Codex가 만든 코드의 라이선스, 보안, 개인정보 리스크 검토하기
- [미친 활용 49] 자동화 가능한 업무와 사람이 최종 승인해야 하는 업무를 구분하기
- [미친 활용 50] 팀 단위 Codex 활용 가이드와 교육 커리큘럼으로 정리하기

## 2시간 실습 강의 추천 구성

### 0. 도입: 10분

- Codex를 "대화형 검색기"가 아니라 "작업하는 동료"로 설명하기
- 좋은 지시의 4요소: Goal, Context, Constraints, Done when

### 1. 기본 실습: 25분

- 폴더 구조 읽기
- 사진/문서/Markdown 파일 요약하기
- 업무 요청을 작업 목록으로 바꾸기

### 2. 개발 실습: 35분

- 작은 코드 수정하기
- 테스트 또는 검증 명령 실행하기
- 실패 로그를 읽고 수정하기

### 3. 협업 실습: 25분

- `AGENTS.md` 초안 만들기
- PR 설명과 리뷰 체크리스트 만들기
- Git 커밋/푸시 흐름 보여주기

### 4. 회사 업무 응용: 15분

- 보고서 초안 만들기
- 파일 정리 자동화 아이디어 만들기
- 팀별 반복 업무를 Skill 후보로 분류하기

### 5. 정리: 10분

- 무조건 맡기지 말고, 범위와 완료 조건을 정해서 맡기기
- 결과는 테스트, diff, 리뷰로 확인하기
- 팀 규칙은 프롬프트가 아니라 `AGENTS.md`, Skill, 체크리스트로 남기기

## 강의용 핵심 메시지

Codex를 잘 쓰는 사람은 프롬프트를 길게 쓰는 사람이 아니라, 일을 작게 나누고 맥락과 완료 조건을 선명하게 주는 사람입니다. 회사 업무에서는 "코드 생성"보다 "맥락 수집, 초안 작성, 검증, 리뷰, 반복 자동화"에서 체감 효과가 크게 납니다.
