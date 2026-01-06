/**
 * Frontend Reference - 전체 컴포넌트 & 유틸 데이터
 * 이 파일을 수정하면 자동으로 메인 페이지와 서브 페이지가 생성됩니다.
 */

export const components = {
  ui: {
    category: 'UI Components',
    icon: '🎨',
    items: [
      {
        id: 'buttons',
        name: 'Buttons',
        icon: '🔘',
        description: 'Primary, Secondary 등 버튼 스타일 모음',
        count: '6개 컴포넌트',
        path: 'ui/buttons.html',
        items: [
          {
            name: 'Primary Button',
            description: '주요 액션(확인, 제출 등)에 사용하는 버튼',
            code: '<button class="btn btn-primary">확인</button>',
            variants: [
              { label: '기본', class: 'btn btn-primary', text: '확인' },
              { label: '작은 사이즈', class: 'btn btn-primary btn-sm', text: '확인' },
              { label: '큰 사이즈', class: 'btn btn-primary btn-lg', text: '확인' },
              { label: '비활성화', class: 'btn btn-primary', text: '확인', disabled: true }
            ]
          },
          {
            name: 'Secondary Button',
            description: '보조 액션에 사용하는 버튼',
            code: '<button class="btn btn-secondary">취소</button>',
            variants: [
              { label: '기본', class: 'btn btn-secondary', text: '취소' },
              { label: '작은 사이즈', class: 'btn btn-secondary btn-sm', text: '취소' },
              { label: '큰 사이즈', class: 'btn btn-secondary btn-lg', text: '취소' },
              { label: '비활성화', class: 'btn btn-secondary', text: '취소', disabled: true }
            ]
          },
          {
            name: 'Success Button',
            description: '성공/완료 등 긍정적인 액션에 사용',
            code: '<button class="btn btn-success">저장</button>',
            variants: [
              { label: '기본', class: 'btn btn-success', text: '저장' },
              { label: '작은 사이즈', class: 'btn btn-success btn-sm', text: '저장' },
              { label: '큰 사이즈', class: 'btn btn-success btn-lg', text: '저장' }
            ]
          },
          {
            name: 'Danger Button',
            description: '삭제, 경고 등 위험한 액션에 사용',
            code: '<button class="btn btn-danger">삭제</button>',
            variants: [
              { label: '기본', class: 'btn btn-danger', text: '삭제' },
              { label: '작은 사이즈', class: 'btn btn-danger btn-sm', text: '삭제' },
              { label: '큰 사이즈', class: 'btn btn-danger btn-lg', text: '삭제' }
            ]
          },
          {
            name: 'Outline Button',
            description: '테두리만 있는 버튼',
            code: '<button class="btn btn-outline">편집</button>',
            variants: [
              { label: '기본', class: 'btn btn-outline', text: '편집' },
              { label: '작은 사이즈', class: 'btn btn-outline btn-sm', text: '편집' },
              { label: '큰 사이즈', class: 'btn btn-outline btn-lg', text: '편집' }
            ]
          },
          {
            name: 'Ghost Button',
            description: '백그라운드가 없는 텍스트만의 버튼',
            code: '<button class="btn btn-ghost">더보기</button>',
            variants: [
              { label: '기본', class: 'btn btn-ghost', text: '더보기' },
              { label: '작은 사이즈', class: 'btn btn-ghost btn-sm', text: '더보기' },
              { label: '큰 사이즈', class: 'btn btn-ghost btn-lg', text: '더보기' }
            ]
          }
        ]
      },
      {
        id: 'cards',
        name: 'Cards',
        icon: '📦',
        description: '카드 레이아웃과 스타일 예제',
        count: '6개 컴포넌트',
        path: 'ui/cards.html',
        items: [
          {
            name: 'Basic Card',
            description: '기본적인 카드 스타일',
            code: '<div class="card"><div class="card-basic">...</div></div>'
          },
          {
            name: 'Card with Image',
            description: '이미지가 포함된 카드',
            code: '<div class="card"><div class="card-img">...</div><div class="card-body">...</div></div>'
          },
          {
            name: 'Card with Header',
            description: '헤더가 분리된 카드',
            code: '<div class="card"><div class="card-header">...</div><div class="card-body">...</div></div>'
          },
          {
            name: 'Card with Footer',
            description: '푸터 액션이 있는 카드',
            code: '<div class="card"><div class="card-body">...</div><div class="card-footer">...</div></div>'
          },
          {
            name: 'Card with Tags',
            description: '태그가 포함된 카드',
            code: '<div class="card"><div class="card-body">...<span class="tag">Tag</span>...</div></div>'
          },
          {
            name: 'Full Example',
            description: '모든 요소가 포함된 완전한 카드',
            code: '<div class="card"><div class="card-img">...</div><div class="card-header">...</div><div class="card-body">...</div><div class="card-footer">...</div></div>'
          }
        ]
      }
    ]
  },
  js: {
    category: 'JavaScript Utils',
    icon: '⚙️',
    items: [
      {
        id: 'utils',
        name: 'Utils',
        icon: '⚙️',
        description: '실무에서 자주 쓰는 JavaScript 유틸 함수',
        count: '1개 함수',
        path: 'js/utils.html',
        items: [
          {
            name: 'noop()',
            description: '아무 동작도 하지 않는 함수 (No Operation)',
            usage: '기본값 설정, 조건부 콜백 처리, 테스트 시 dummy 함수로 사용',
            code: 'export function noop() {}',
            example: `// 기본 콜백 함수로 사용
const handleCallback = (cb = noop) => cb();

// 조건부 실행
const onComplete = someCondition ? callback : noop;`,
            tags: ['Utility', '함수']
          }
        ]
      }
    ]
  }
};

/**
 * 새로운 컴포넌트 추가 방법:
 * 
 * 1. UI 컴포넌트 추가:
 *    - src/ui/your-component/ 폴더 생성
 *    - components.ui.items 배열에 항목 추가
 * 
 * 2. JavaScript 유틸 추가:
 *    - src/js/utils.js에 함수 추가
 *    - components.js.items[0].items 배열에 항목 추가
 * 
 * 예시:
 * {
 *   name: 'Your Function',
 *   description: '함수 설명',
 *   usage: '사용처',
 *   code: 'export function yourFunc() {}',
 *   example: '사용 예제',
 *   tags: ['카테고리', '태그']
 * }
 */