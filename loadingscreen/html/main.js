var count = 0;
var thisCount = 0;

const handlers = {
  startInitFunctionsOrder (data) {
    count = data.count;
  },

  startInitFunctionsIvoking (data) {

    document.querySelector ('.progressbar') .style.left = '0%';

    document.querySelector ('.progressbar') .style.width = (data.idx / count) *100 + '%';

    },

    startDataFileEntries (data)
    count = data.count;

  },

  performMapLoadFunction (data) {
    ++thisCount;
    document.querySelector ('.progressbar') style.left = '0%';

    document.querySelector ('.progressbar') style.whidth =  (thiscount / count) *100 + '%';

  },
};
window.addEventListener ('message', function (e ) {
  (handlers [e.data.evenName] || function () {} ) (e.data);

}); 

