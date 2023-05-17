const longestWord = (text) => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result;

  for(let index of wordArray) {
    if(index.length > maxLength) {
      maxLength = index.length;
      result = index;
    };
  };
  return result;
};
console.log(longestWord(`Antonio foi ao banheiro e não sabemos o que aconteceu`));
