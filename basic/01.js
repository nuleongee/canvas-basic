if (Modernizr.canvas) {
  console.log('canvas를 지원하는 브라우저');
}

const canvas = document.querySelector('canvas');
if (canvas.getContext) {
  console.log('캔버스 지원');
}
