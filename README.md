# Frontend Reference

실무에서 반복 사용하는 UI 컴포넌트와 JavaScript 유틸을 정리하는 개인 레퍼런스 저장소입니다.

## 📁 프로젝트 구조

```
frontend-ref/
├── css/
│   └── common.css           # 전체 스타일 (공통)
├── src/
│   ├── js/
│   │   └── utils.js         # JavaScript 유틸 함수 소스
│   └── ui/
│       ├── buttons/         # 버튼 컴포넌트
│       └── cards/           # 카드 컴포넌트
├── pages/
│   ├── index.html           # 메인 페이지
│   ├── app.js               # 동적 페이지 생성 로직
│   ├── data.js              # 컴포넌트/유틸 데이터
│   ├── ui/
│   │   ├── buttons.html     # 버튼 설명 페이지
│   │   └── cards.html       # 카드 설명 페이지
│   └── js/
│       └── index.html       # JavaScript 유틸 설명 페이지
└── README.md
```

## 🎨 UI Components

### Buttons
- Primary, Secondary, Success, Danger, Outline, Ghost
- 크기 변형: sm, lg
- 비활성화 상태

### Cards
- Basic, Image, Header, Footer, Tags, Full Example

## ⚙️ JavaScript Utils

### noop()
아무 동작도 하지 않는 함수 (No Operation)

## 🚀 빠른 시작

### 새 버튼 컴포넌트 추가

1. **src/ui/buttons/ 폴더에 스타일 추가** (선택사항)
   ```css
   /* src/ui/buttons/button.css */
   .btn-custom {
     /* 스타일 정의 */
   }
   ```

2. **pages/data.js에 컴포넌트 정보 추가**
   ```javascript
   // components.ui.items[0].items 배열에 추가
   {
     name: 'Loading Button',
     description: '로딩 상태를 표시하는 버튼',
     code: '<button class="btn btn-primary btn-loading">로딩 중...</button>',
     variants: [
       { label: '기본', class: 'btn btn-primary btn-loading', text: '로딩 중...' },
       { label: '비활성화', class: 'btn btn-primary btn-loading', text: '로딩 중...', disabled: true }
     ]
   }
   ```

3. **css/common.css에 스타일 추가** (필요한 경우)
   ```css
   .btn-loading {
     position: relative;
   }
   
   .btn-loading::after {
     content: '';
     position: absolute;
     /* 로딩 애니메이션 */
   }
   ```

4. **완료!** 메인 페이지에서 버튼이 자동으로 나타납니다.

### 새 JavaScript 함수 추가

1. **src/js/utils.js에 함수 구현**
   ```javascript
   /**
    * 함수를 지연시켜 실행하는 유틸
    * @param {Function} fn - 실행할 함수
    * @param {number} delay - 지연 시간 (밀리초)
    * @returns {Function} 디바운스된 함수
    */
   export function debounce(fn, delay) {
     let timeoutId;
     return function(...args) {
       clearTimeout(timeoutId);
       timeoutId = setTimeout(() => fn(...args), delay);
     };
   }
   ```

2. **pages/data.js에 문서 추가**
   ```javascript
   // components.js.items[0].items 배열에 추가
   {
     name: 'debounce()',
     description: '함수 호출을 지연시키는 유틸',
     usage: '검색 입력, 리사이즈 이벤트 등 빈번한 이벤트 최적화',
     code: `export function debounce(fn, delay) {
   let timeoutId;
   return function(...args) {
     clearTimeout(timeoutId);
     timeoutId = setTimeout(() => fn(...args), delay);
   };
 }`,
     example: `// 검색 입력 최적화
 const handleSearch = debounce((query) => {
   console.log('검색:', query);
 }, 500);
 
 input.addEventListener('input', (e) => {
   handleSearch(e.target.value);
 });`,
     tags: ['Utility', '성능', '함수']
   }
   ```

3. **완료!** JavaScript Utils 페이지에서 함수 문서가 자동으로 나타납니다.

## 📝 데이터 구조

### 버튼 컴포넌트 항목 구조
```javascript
{
  name: string,           // 컴포넌트 이름
  description: string,    // 설명
  code: string,          // 기본 코드 스니펫
  variants: [            // 변형 목록 (선택사항)
    {
      label: string,     // 변형 레이블
      class: string,     // CSS 클래스
      text: string,      // 표시 텍스트
      disabled: boolean  // 비활성화 여부
    }
  ]
}
```

### JavaScript 함수 항목 구조
```javascript
{
  name: string,          // 함수명
  description: string,   // 설명
  usage: string,         // 사용처
  code: string,          // 함수 코드
  example: string,       // 사용 예제
  tags: string[]         // 태그 배열
}
```

## 🔄 동작 원리

1. **data.js**에 컴포넌트/함수 정보 저장
2. **app.js**가 data.js를 읽어 동적으로 HTML 생성
3. 브라우저에서 현재 페이지에 맞는 콘텐츠 렌더링

→ HTML 파일 수정 없이 **data.js만 수정**하면 됩니다!

## 🎯 추가 예정

- [ ] Form 컴포넌트
- [ ] Modal 컴포넌트
- [ ] Toast/Alert 컴포넌트
- [ ] Array 유틸 함수들
- [ ] String 유틸 함수들
- [ ] Date 유틸 함수들

## 📖 참고

- CSS 스타일은 `css/common.css`에서 한 번에 관리
- 모든 디자인 토큰(색상, 간격, 그림자)은 CSS 변수로 정의됨
- 반응형 디자인 지원 (모바일/태블릿/데스크톱)