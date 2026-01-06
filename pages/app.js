/**
 * Frontend Reference - 동적 페이지 생성 시스템
 * data.js의 데이터를 읽어서 HTML을 동적으로 생성합니다.
 */

import { components } from './data.js';

// ============================================
// 유틸 함수
// ============================================

function createElement(tag, className, innerHTML = '') {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// ============================================
// 메인 페이지 생성
// ============================================

export function renderMainPage() {
  const container = document.querySelector('.container');
  if (!container) return;

  // sections이 이미 있으면 제거 (중복 방지)
  const existingSections = container.querySelector('.sections');
  if (existingSections) {
    existingSections.remove();
  }

  const sectionsDiv = createElement('div', 'sections');

  // UI Components 섹션
  const uiSection = createElement('section', 'section');
  const uiTitle = createElement('h2', 'section-title', 'UI Components');
  const uiGrid = createElement('div', 'grid');

  components.ui.items.forEach(item => {
    const card = createElement('a', 'card');
    card.href = item.path;
    card.innerHTML = `
      <div style="padding: 24px;">
        <div style="font-size: 24px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: var(--color-gray-100); border-radius: var(--radius-sm); margin-bottom: 12px;">${item.icon}</div>
        <div class="card-title">${item.name}</div>
        <div class="card-desc">${item.description}</div>
        <div class="card-meta" style="margin-top: 12px;">${item.count}</div>
      </div>
    `;
    uiGrid.appendChild(card);
  });

  uiSection.appendChild(uiTitle);
  uiSection.appendChild(uiGrid);
  sectionsDiv.appendChild(uiSection);

  // JavaScript Utils 섹션
  const jsSection = createElement('section', 'section');
  const jsTitle = createElement('h2', 'section-title', 'JavaScript Utils');
  const jsGrid = createElement('div', 'grid');

  components.js.items.forEach(item => {
    const card = createElement('a', 'card');
    card.href = item.path;
    card.innerHTML = `
      <div style="padding: 24px;">
        <div style="font-size: 24px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: var(--color-gray-100); border-radius: var(--radius-sm); margin-bottom: 12px;">${item.icon}</div>
        <div class="card-title">${item.name}</div>
        <div class="card-desc">${item.description}</div>
        <div class="card-meta" style="margin-top: 12px;">${item.count}</div>
      </div>
    `;
    jsGrid.appendChild(card);
  });

  jsSection.appendChild(jsTitle);
  jsSection.appendChild(jsGrid);
  sectionsDiv.appendChild(jsSection);

  container.appendChild(sectionsDiv);
}

// ============================================
// 버튼 컴포넌트 페이지 생성
// ============================================

export function renderButtonsPage() {
  const container = document.querySelector('.container-sm');
  if (!container) return;

  // components가 이미 있으면 제거 (중복 방지)
  const existingComponents = container.querySelector('.components');
  if (existingComponents) {
    existingComponents.remove();
  }

  const componentsList = components.ui.items.find(item => item.id === 'buttons');
  if (!componentsList) return;

  const componentsDiv = createElement('div', 'components');

  componentsList.items.forEach(component => {
    const componentEl = createElement('div', 'component');

    // 제목 섹션
    const titleSection = createElement('div');
    titleSection.innerHTML = `
      <h2 class="component-title">${component.name}</h2>
      <p class="component-desc">${component.description}</p>
    `;
    componentEl.appendChild(titleSection);

    // 프리뷰 섹션
    const preview = createElement('div', 'preview');
    if (component.variants) {
      component.variants.forEach(variant => {
        const btn = document.createElement('button');
        btn.className = variant.class;
        btn.textContent = variant.text;
        if (variant.disabled) btn.disabled = true;
        preview.appendChild(btn);
      });
    }
    componentEl.appendChild(preview);

    // 코드 섹션
    const codeBlock = createElement('div', 'code-block', escapeHtml(component.code));
    componentEl.appendChild(codeBlock);

    componentsDiv.appendChild(componentEl);
  });

  container.appendChild(componentsDiv);
}

// ============================================
// JavaScript Utils 페이지 생성
// ============================================

export function renderUtilsPage() {
  const container = document.querySelector('.container-sm');
  if (!container) return;

  // utils가 이미 있으면 제거 (중복 방지)
  const existingUtils = container.querySelector('.utils');
  if (existingUtils) {
    existingUtils.remove();
  }

  const utilsList = components.js.items.find(item => item.id === 'utils');
  if (!utilsList) return;

  const utilsDiv = createElement('div', 'utils');

  utilsList.items.forEach(util => {
    const utilEl = createElement('div', 'util');

    // 제목 섹션
    const titleSection = createElement('div');
    titleSection.innerHTML = `
      <div class="util-name">${util.name}</div>
      <p class="util-desc">${util.description}</p>
    `;
    utilEl.appendChild(titleSection);

    // 사용처 섹션
    const usageSection = createElement('div', 'util-section');
    usageSection.innerHTML = `
      <div class="util-label">사용처</div>
      <p style="font-size: 14px; color: var(--color-gray-600);">${util.usage}</p>
    `;
    utilEl.appendChild(usageSection);

    // 코드 섹션
    const codeSection = createElement('div', 'util-section');
    codeSection.innerHTML = `
      <div class="util-label">코드</div>
      <div class="code-block">${escapeHtml(util.code)}</div>
    `;
    utilEl.appendChild(codeSection);

    // 예제 섹션
    const exampleSection = createElement('div', 'util-section');
    exampleSection.innerHTML = `
      <div class="util-label">사용 예제</div>
      <div class="code-block">${escapeHtml(util.example)}</div>
    `;
    utilEl.appendChild(exampleSection);

    // 태그 섹션
    if (util.tags && util.tags.length > 0) {
      const tagsSection = createElement('div', 'tags');
      util.tags.forEach(tag => {
        const tagEl = createElement('span', 'tag category', tag);
        tagsSection.appendChild(tagEl);
      });
      utilEl.appendChild(tagsSection);
    }

    utilsDiv.appendChild(utilEl);
  });

  container.appendChild(utilsDiv);
}

// ============================================
// 카드 컴포넌트 페이지 생성
// ============================================

export function renderCardsPage() {
  const container = document.querySelector('.container-sm');
  if (!container) return;

  // components가 이미 있으면 제거 (중복 방지)
  const existingComponents = container.querySelector('.components');
  if (existingComponents) {
    existingComponents.remove();
  }

  const componentsList = components.ui.items.find(item => item.id === 'cards');
  if (!componentsList) return;

  const componentsDiv = createElement('div', 'components');

  componentsList.items.forEach(component => {
    const componentEl = createElement('div', 'component');

    // 제목 섹션
    const titleSection = createElement('div');
    titleSection.innerHTML = `
      <h2 class="component-title">${component.name}</h2>
      <p class="component-desc">${component.description}</p>
    `;
    componentEl.appendChild(titleSection);

    // 코드 섹션
    const codeBlock = createElement('div', 'code-block', escapeHtml(component.code));
    componentEl.appendChild(codeBlock);

    componentsDiv.appendChild(componentEl);
  });

  container.appendChild(componentsDiv);
}

// ============================================
// 초기화
// ============================================

export function init() {
  // 현재 페이지에 따라 적절한 렌더링 함수 실행
  const path = window.location.pathname;
  
  if (path.includes('index.html') || path.endsWith('/')) {
    renderMainPage();
  } else if (path.includes('ui/buttons')) {
    renderButtonsPage();
  } else if (path.includes('ui/cards')) {
    renderCardsPage();
  } else if (path.includes('js/utils')) {
    renderUtilsPage();
  }
}

// DOM 로드 완료 후 초기화
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}