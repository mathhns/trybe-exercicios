window.onload = () => {
  //Cor de fundo
  const setBackgroundColor = (color) => {
    let content = document.querySelector('.content');
    content.style.backgroundColor = color;
    localStorage.setItem('background', color);
  };
  //Cor do texto
  const setFontColor = (color) => {
    let paragraph = document.querySelectorAll('.paragraph');
    for (let index = 0; index < paragraph.length; index += 1){
      paragraph[index].style.color = color;
      localStorage.setItem('fontColor', color);

    }
  };
  //Tamanho da fonte
  const setFontSize = (size) => {
    let paragraph = document.querySelectorAll('.paragraph');
    for (let index = 0; index < paragraph.length; index += 1){
      paragraph[index].style.fontSize = size;
      localStorage.setItem('fontSize', size);
    }
  };
  //Espaçamento da linha
  const setLineHeight = (height) => {
    let paragraph = document.querySelectorAll('.paragraph');
    for (let index = 0; index < paragraph.length; index += 1){
      paragraph[index].style.lineHeight = height;
      localStorage.setItem('lineHeight', height);
    }
  };
  //Tipo da fonte
  const setTypeFont = (font) => {
    let paragraph = document.querySelectorAll('.paragraph');
    for (let index = 0; index < paragraph.length; index += 1){
      paragraph[index].style.fontFamily = font;
      localStorage.setItem('typeFont', font);
    }
  };


  //Cor de fundo
  let backgroundColorButton = document.querySelectorAll('#background-color>button');
  for (let index = 0; index < backgroundColorButton.length; index += 1) {
    backgroundColorButton[index].addEventListener('click', (event) => {
      setBackgroundColor(event.target.innerHTML);
    })
  };
  //Cor do texto
  let fontColorButton = document.querySelectorAll('#font-color>button');
  for (let index = 0; index < fontColorButton.length; index += 1) {
    fontColorButton[index].addEventListener('click', (event) => {
      setFontColor(event.target.innerHTML);
    })
  };
  //Tamanho da fonte
  let fontSizeButton = document.querySelectorAll('#font-size>button');
  for (let index = 0; index < fontSizeButton.length; index += 1) {
    fontSizeButton[index].addEventListener('click', (event) => {
      setFontSize(event.target.innerHTML);
    })
  };
  //Espaçamento da Linha
  let lineHeightButton = document.querySelectorAll('#line-height>button');
  for (let index = 0; index < lineHeightButton.length; index += 1) {
    lineHeightButton[index].addEventListener('click', (event) => {
      setLineHeight(event.target.innerHTML);
    })
  };
  //Tipo da fonte
  let typeFontButton = document.querySelectorAll('#font-family>button');
  for (let index = 0; index < typeFontButton.length; index += 1) {
    typeFontButton[index].addEventListener('click', (event) => {
      setTypeFont(event.target.innerHTML);
    })
  };

  const initialize = () => {
    let backgroundColor = localStorage.getItem('background');
    setBackgroundColor(backgroundColor);

    let fontColor = localStorage.getItem('fontColor');
    setFontColor(fontColor);

    let fontSize = localStorage.getItem('fontSize');
    setFontSize(fontSize);

    let lineHeight = localStorage.getItem('lineHeight');
    setLineHeight(lineHeight);

    let typeFont = localStorage.getItem('typeFont');
    setTypeFont(typeFont);
  }
  initialize();

}
