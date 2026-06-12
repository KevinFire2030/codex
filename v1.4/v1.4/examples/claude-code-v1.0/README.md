# Claude Code Playbook v1.0

지원팀 대상 Claude Code 실습 교육에서 사용하는 HTML 기반 플레이북입니다.

## 프로젝트 목표

Claude Code를 처음 사용하는 구성원이 실습 교육 중 바로 따라 할 수 있도록, 프로젝트 폴더 분석, 파일 작업 계획, 문서/데이터 처리, 보안 점검을 한 흐름으로 연습하는 자료입니다.

교육 참석자는 개인 PC에서 화면을 좌우로 나누어 사용합니다.

- 왼쪽: Claude Code Playbook
- 오른쪽: 터미널, VS Code, 또는 Claude Code 화면

플레이북의 예시 프롬프트를 복사해 Claude Code에 붙여 넣으며 실습합니다.

## 열어야 할 파일

브라우저에서 아래 파일을 엽니다.

```text
examples/claude-code-v1.0/index.html
```

별도 설치나 빌드 없이 동작합니다.

## v1.0 구성

1. 처음 만나는 Claude Code
2. Claude, Claude Code, IDE 사용 방식
3. 첫 작업: 이 폴더 뭐 하는 프로젝트야?
4. 확장 실습: Codex Playbook을 Claude Code Playbook으로 바꾸기
5. 프롬프트 기본기
6. 개인정보 환경변수 설정: .env 활용
7. 이메일 수/발신 자동화: POP3/SMTP 활용
8. 사내 시스템 UI 조회/다운로드 자동화
9. 파일 자동 정리
10. Skills, slash commands, MCP
11. 쉬운 데이터 분석
12. 엑셀 다루기
13. 보안: 권한, 승인, .env, DRM
14. 프롬프트 모음

## 주요 예제 파일

- `psi-dashboard/PSI-sample.xlsx`: 데이터 분석 실습용 마스킹 샘플
- `psi-dashboard/dashboard.html`: PSI 대시보드 생성 결과
- `excel-merge/TC.zip`: 동일 양식 엑셀 병합 실습용 ZIP
- `excel-merge/TC_merged.xlsx`: 엑셀 병합 결과
- `video-agent/work-script-recorder-package.zip`: 녹화파일 기반 업무 절차 설명 실습용 ZIP

## Claude Code 실습 전 확인

- Claude Code가 설치되어 있고 로그인되어 있는지 확인합니다.
- 터미널에서 실습 폴더로 이동한 뒤 `claude`를 실행합니다.
- VS Code를 쓴다면 Claude Code 확장 또는 통합 터미널 사용 방식을 확인합니다.
- 파일 수정 전에는 먼저 계획을 요청하고, 수정 제안과 명령 실행을 검토한 뒤 승인합니다.

## 보안 원칙

- 실제 비밀번호, OTP, 토큰, API key는 플레이북이나 Git에 넣지 않습니다.
- `.env`는 로컬 PC에만 두고 Git에 올리지 않습니다.
- Claude Code가 제안하는 명령은 실행 전 사람이 검토합니다.
- DRM 문서는 우회하지 않고 회사 정책상 허용된 프로세스와 권한 범위 안에서만 다룹니다.
- 실습 자료에는 실제 고객명, 거래처명, 내부 코드 대신 마스킹된 샘플 데이터를 사용합니다.

## 공식 문서 근거

v1.0 콘텐츠는 `docs/official-sources.md`에 정리한 Anthropic 공식 Claude Code 문서를 기준으로 작성했습니다. 사내 시스템, Knox, GSCM, DRM 관련 내용은 공식 Claude Code 문서가 아니라 교육용 시나리오와 보안 주의사항으로만 다룹니다.
