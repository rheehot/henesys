import { Menu } from 'src/store/selectors'

const menus: {
  [group: string]: Menu[];
} = {
  새소식: [{
    label: '전체',
    board: 2314,
    category: '',
  }, {
    label: '공지',
    board: 2314,
    category: '공지',
  }, {
    label: '점검',
    board: 2314,
    category: '점검',
  }, {
    label: '업데이트',
    board: 2314,
    category: '업데이트',
  }, {
    label: '이벤트',
    board: 2314,
    category: '이벤트',
  }, {
    label: '테스트서버',
    board: 2314,
    category: '테섭',
  }, {
    label: '캐시',
    board: 2314,
    category: '캐시',
  }],
  커뮤니티: [{
    label: '메이플 토크',
    board: 2299,
    category: '_리부트',
  }, {
    label: '리부트',
    board: 2299,
    category: '리부트',
  }, {
    label: '팁과 노하우',
    board: 2304,
    category: '',
  }, {
    label: '동영상',
    board: 2305,
    category: '',
  }, {
    label: '사고팔고',
    board: 2357,
    category: '',
  }, {
    label: '질문답변',
    board: 2300,
    category: '',
  }],
  전사: [{
    label: '전체',
    board: 2294,
    category: '',
  }, {
    label: '히어로',
    board: 2294,
    category: '히어로',
  }, {
    label: '팔라딘',
    board: 2294,
    category: '팔라딘',
  }, {
    label: '닼나',
    board: 2294,
    category: '다크나이트',
  }, {
    label: '소마',
    board: 2294,
    category: '소울마스터',
  }, {
    label: '미하일',
    board: 2294,
    category: '미하일',
  }, {
    label: '아란',
    board: 2294,
    category: '아란',
  }, {
    label: '데슬',
    board: 2294,
    category: '데몬슬레이어',
  }, {
    label: '데벤',
    board: 2294,
    category: '데몬어벤져',
  }, {
    label: '블래',
    board: 2294,
    category: '블래스터',
  }, {
    label: '카이저',
    board: 2294,
    category: '카이저',
  }, {
    label: '제로',
    board: 2294,
    category: '제로',
  }, {
    label: '핑크빈',
    board: 2294,
    category: '핑크빈',
  }],
  마법사: [{
    label: '전체',
    board: 2295,
    category: '',
  }, {
    label: '불독',
    board: 2295,
    category: '아크(불독)',
  }, {
    label: '썬콜',
    board: 2295,
    category: '아크(썬콜)',
  }, {
    label: '비숍',
    board: 2295,
    category: '비숍',
  }, {
    label: '플위',
    board: 2295,
    category: '플레임위자드',
  }, {
    label: '에반',
    board: 2295,
    category: '에반',
  }, {
    label: '루미',
    board: 2295,
    category: '루미너스',
  }, {
    label: '배메',
    board: 2295,
    category: '배틀메이지',
  }, {
    label: '키네',
    board: 2295,
    category: '키네시스',
  }, {
    label: '일리움',
    board: 2295,
    category: '일리움',
  }],
  궁수: [{
    label: '전체',
    board: 2296,
    category: '',
  }, {
    label: '보마',
    board: 2296,
    category: '보우마스터',
  }, {
    label: '신궁',
    board: 2296,
    category: '신궁',
  }, {
    label: '패파',
    board: 2296,
    category: '패스파인더',
  }, {
    label: '윈브',
    board: 2296,
    category: '윈드브레이커',
  }, {
    label: '메르',
    board: 2296,
    category: '메르세데스',
  }, {
    label: '와헌',
    board: 2296,
    category: '와일드헌터',
  }],
  도적: [{
    label: '전체',
    board: 2297,
    category: '',
  }, {
    label: '나로',
    board: 2297,
    category: '나이트로드',
  }, {
    label: '섀도어',
    board: 2297,
    category: '섀도어',
  }, {
    label: '듀블',
    board: 2297,
    category: '듀얼블레이드',
  }, {
    label: '나워',
    board: 2297,
    category: '나이트워커',
  }, {
    label: '팬텀',
    board: 2297,
    category: '괴도팬텀',
  }, {
    label: '카데나',
    board: 2297,
    category: '카데나',
  }],
  해적: [{
    label: '전체',
    board: 2298,
    category: '',
  }, {
    label: '바이퍼',
    board: 2298,
    category: '바이퍼',
  }, {
    label: '캡틴',
    board: 2298,
    category: '캡틴',
  }, {
    label: '캐슈',
    board: 2298,
    category: '캐논슈터',
  }, {
    label: '스커',
    board: 2298,
    category: '스트라이커',
  }, {
    label: '은월',
    board: 2298,
    category: '은월',
  }, {
    label: '메카닉',
    board: 2298,
    category: '메카닉',
  }, {
    label: '제논',
    board: 2298,
    category: '제논',
  }, {
    label: '엔버',
    board: 2298,
    category: '엔젤릭버스터',
  }, {
    label: '아크',
    board: 2298,
    category: '아크',
  }],
}

export default menus
