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

  function draw(ns) {
    var lines = ns.map(function (n) {return repeat('#', n);});
    $('#canvas').text(lines.join('\n'));
  }

  function updateState(message) {
    $('#state').text(message);
  }

  function reset() {
    var ns = makeTestData(N);
    draw(ns);
    updateState('Not sorted.');
  }

  $('#reset').click(function () {reset();});

  reset();
})();
// vim: expandtab softtabstop=2 shiftwidth=2
