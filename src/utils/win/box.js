const win = {
  resize: true,
  min: true,
  max: true,
  move: true,
  isMax: false,
  style: {
    top: "50%",
    left: "50%",
    height: "",
    width: "",
    "z-index": 1
  }
};

export default function(vue, type) {
  this.win = Object.assign({}, win);
  this.id = vue.$store.getters["modal/currId"];
  this.show = true;
  if (type == "text") {
    this.win.style.height = "200px";
    this.win.style.width = "300px";
    this.win.style.top = "calc(50% - 100px)";
    this.win.style.left = "calc(50% - 150px)";
  }
}
