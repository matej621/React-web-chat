  
  function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }

  export default randomColor;