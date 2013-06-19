(function () {
  var N = 10;

  function listNaturalNumbers(n) {
    var ns = [];
    for (var i = 1; i <= n; i++)
      ns.push(i);
    return ns;
  }

  function random(a, b) {
    return Math.floor(Math.random() * (b - a)) + a;
  }

  function shuffle(ns) {
    var n = ns.length;
    for (var i = 0; i < n; i++) {
      var j = random(0, n);
      var t = ns[i];
      ns[i] = ns[j];
      ns[j] = t;
    }
    return ns;
  }

  function makeTestData(n) {
    return shuffle(listNaturalNumbers(n));
  }

  function repeat(s, n) {
    return new Array(n + 1).join(s);
  }

  function isSorted(ns) {
    return ns.every(function (v, i) {return i == 0 || ns[i - 1] <= v;});
  }

  function draw(cont) {
    var lines = cont.ns.map(function (n) {return repeat('#', n);});
    $('#canvas').text(lines.join('\n'));
    updateState(isSorted(cont.ns) ? 'Sorted.' : 'Sorting...');
  }

  function updateState(message) {
    $('#state').text(message);
  }

  var cc = {};

  function reset() {
    cc = {
      ns: makeTestData(N)
    };
    draw(cc);
    updateState('Not sorted.');
  }

  function sort(ns) {
    var n = ns.length;
    for (var i = 0; i < n - 1; i++) {
      for (var j = i + 1; j < n; j++) {
        if (ns[i] > ns[j]) {
          var t = ns[i];
          ns[i] = ns[j];
          ns[j] = t;
        }
      }
    }
  }

  function next() {
    sort(cc.ns);
    draw(cc);
  }

  $('#reset').click(function () {reset();});
  $('#next').click(function () {next();});

  reset();
})();
// vim: expandtab softtabstop=2 shiftwidth=2
