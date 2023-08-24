(() => {
  "use strict";
  function t(e) {
    if (e.length < 2) return e;
    {
      let n = [...new Set(e)];
      console.log(n);
      const l = Math.floor(n.length / 2),
        o = n.slice(0, l),
        r = n.slice(l);
      return (function (t, e) {
        let n = [],
          l = 0,
          o = 0;
        for (; l < t.length && o < e.length; )
          t[l] <= e[o] ? (n.push(t[l]), l++) : (n.push(e[o]), o++);
        return n.concat(t.slice(l)).concat(e.slice(o));
      })(t(o), t(r));
    }
  }
  let e = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const n = new (class {
    constructor(t, e, n) {
      this.array, this.start, this.end, (root = null);
    }
    buildTree(e) {
      return e.length < 2 ? e : (console.log(t(e)), t(e));
    }
  })(e, 0, e.length - 1);
  n.buildTree();
})();
