# Codex Playbook v1.4

지원팀 대상 Codex 실습 교육에서 사용하는 HTML 기반 플레이북입니다.

## 프로젝트 목표

2026년 6월 12일 금요일부터 외부 AI 사용이 전직원 대상으로 확대 적용됨에 따라, 새로 Codex를 사용하는 구성원이 실습 교육 중 바로 따라 할 수 있는 플레이북을 제공합니다.

교육 참석자는 개인 PC에서 화면을 좌우로 나누어 사용합니다.

- 왼쪽: Codex Playbook
- 오른쪽: Codex 앱

플레이북의 예시 프롬프트를 복사해 Codex 앱에 붙여 넣으며 실습합니다.

## 교육 일정

지원팀 대상 Codex 실습 교육은 다음 3개 차수로 진행합니다.

- 2026-06-15 월요일 09:30 ~ 11:30
- 2026-06-15 월요일 15:30 ~ 17:30
- 2026-06-16 화요일 09:30 ~ 11:30

## 열어야 할 파일

브라우저에서 아래 파일을 엽니다.

```text
v1.4/index.html
```

별도 설치나 빌드 없이 동작합니다.

## v1.4 구성

1. 처음 만나는 Codex
2. Codex App, CLI, IDE 중 무엇부터?
3. 첫 작업: 이 폴더 뭐 하는 프로젝트야?
4. 프롬프트 기본기
5. 개인정보 환경변수 설정: .env 활용
6. 이메일 수/발신 자동화: POP3/SMTP 활용
7. 사내 시스템 UI 조회/다운로드 자동화
8. 파일 자동 정리
9. 도구 vs 스킬
10. Codex가 대신 해주는 쉬운 데이터 분석
11. 엑셀 다루기
12. 보안: .env, 권한, DRM
13. 처음 쓰는 사람이 꼭 알아둘 팁
14. 프롬프트 모음

## 주요 예제 파일

- `examples/psi-dashboard/PSI-sample.xlsx`: 데이터 분석 실습용 마스킹 샘플
- `examples/psi-dashboard/dashboard.html`: PSI 대시보드 생성 결과
- `examples/excel-merge/TC.zip`: 동일 양식 엑셀 병합 실습용 ZIP
- `examples/excel-merge/TC_merged.xlsx`: 엑셀 병합 결과
- `examples/video-agent/work-script-recorder-package.zip`: 녹화파일 기반 Agent 구성 실습용 스크립트 녹화 도구 ZIP

## 보안 원칙

- 실제 비밀번호, OTP, 토큰, API key는 플레이북이나 Git에 넣지 않습니다.
- `.env`는 로컬 PC에만 두고 Git에 올리지 않습니다.
- DRM 문서는 우회하지 않고 회사 정책상 허용된 프로세스와 권한 범위 안에서만 다룹니다.
- 실습 자료에는 실제 고객명, 거래처명, 내부 코드 대신 마스킹된 샘플 데이터를 사용합니다.

## 공식 문서 근거

v1.4 콘텐츠는 `docs/official-sources.md`에 정리한 OpenAI 공식 Codex 문서를 기준으로 작성했습니다. 사내 시스템, Knox, GSCM, DRM 관련 내용은 공식 Codex 문서가 아니라 교육용 시나리오와 보안 주의사항으로만 다룹니다.
