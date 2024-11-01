module.exports = Phrase;

// reverse()メソッドを追加してすべてのStringで使えるようにする
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Phraseオブジェクトを定義する
function Phrase(content) {
  this.content = content;

   // パリンドロームのテスト用に変換した訳文を返す
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // コンテンツの文字だけを返す
  // 利用例:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }
   // for (let i=0; i< this.content.length;i++ ){
     Array.from(this.content).forEach(function(character){
      if(character.match(letterRegix)){
        theLetters.push(character);
      }
  });
    return theLetters.join("");
 } 
   // パリンドロームならtrueを、違うならfalseを返す
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
 