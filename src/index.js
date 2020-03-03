module.exports = function check(str, bracketsConfig) {
  let stbracket = null;

  let i = 0;
  while(i < bracketsConfig.length){
    stbracket = bracketsConfig[i].join('');
    if(str.includes(stbracket)){
      str = str.replace(stbracket,'')
      i = 0
    }
    else{
      i++;
    }
  }
  return  !Boolean(str)
}

