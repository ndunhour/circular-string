'use strict'
function sourceFind (source, find) {
  var searchWord = source.concat(source);
  var newSearchWord = searchWord.toLowerCase();
  var findSomething = newSearchWord.match(find);

  return findSomething == find;
};