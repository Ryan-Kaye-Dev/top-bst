(() => {
  "use strict";
  class t {
    constructor(t, e = null, r = null) {
      (this.data = t), (this.left = e), (this.right = r);
    }
  }
  const e = (t, r = "", l = !0) => {
      null !== t &&
        (null !== t.right && e(t.right, `${r}${l ? "│   " : "    "}`, !1),
        console.log(`${r}${l ? "└── " : "┌── "}${t.data}`),
        null !== t.left && e(t.left, `${r}${l ? "    " : "│   "}`, !0));
    },
    r = new (class {
      constructor(t) {
        this.root = this.buildTree(t);
      }
      sortArray(t) {
        return [...new Set(t)].sort((t, e) => t - e);
      }
      buildTree(e) {
        let r = this.sortArray(e);
        if (0 === r.length) return null;
        const l = parseInt(r.length / 2),
          i = new t(r[l]);
        return (
          (i.left = this.buildTree(r.slice(0, l))),
          (i.right = this.buildTree(r.slice(l + 1))),
          i
        );
      }
      insert(e, r = this.root) {
        return null === r
          ? new t(e)
          : (r.data < e
              ? (r.right = this.insert(e, r.right))
              : (r.left = this.insert(e, r.left)),
            r);
      }
      min(t) {
        for (; null !== t.left; ) t = t.left;
        return t.data;
      }
      delete(t = this.root, e) {
        if (null === t) return t;
        if (e < t.data) t.left = this.delete(t.left, e);
        else if (e > t.data) t.right = this.delete(t.right, e);
        else {
          if (!t.left && !t.right) return null;
          if (!t.left) return t.right;
          if (!t.right) return t.left;
          (t.data = this.min(t.right)),
            (t.right = this.delete(t.right, t.data));
        }
        return t;
      }
      find(t = this.root, e) {
        return t.data === e
          ? t
          : e < t.data
          ? this.find(t.left, e)
          : e > t.data
          ? this.find(t.right, e)
          : t;
      }
      levelOrder(t = this.root, e) {
        if (!t) return;
        let r = [t],
          l = [];
        for (; r.length > 0; ) {
          const t = r.shift();
          e ? e(t) : l.push(t.data),
            t.left && r.push(t.left),
            t.right && r.push(t.right);
        }
        return console.log(l), l;
      }
    })([50, 30, 70, 20, 40, 60, 80]);
  console.log("Initial myTree:"),
    e(r.root),
    console.log("After inserting 35:"),
    r.insert(35),
    e(r.root),
    console.log("After deleting 50:"),
    r.delete(r.root, 50),
    e(r.root),
    console.log(r.find(r.root, 20)),
    r.levelOrder(r.root);
})();
