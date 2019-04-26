export const template = [
  {
    type: "el-container",
    name: "container",
    style: null,
    children: [
      {
        type: "el-main",
        name: "main",
        style: null,
        children: null
      }
    ]
  },
  {
    type: "el-container",
    name: "container",
    style: null,
    class: "is-vertical",
    children: [
      {
        type: "el-header",
        name: "header",
        style: null,
        children: null
      },
      {
        type: "el-main",
        name: "main",
        style: null,
        children: null
      }
    ]
  },
  {
    type: "el-container",
    name: "container",
    style: null,
    class: "is-vertical",
    children: [
      {
        type: "el-header",
        name: "header",
        style: null,
        children: null
      },
      {
        type: "el-container",
        name: "main",
        style: null,
        children: [
          {
            type: "el-aside",
            name: "aside",
            style: null,
            children: null
          },
          {
            type: "el-main",
            name: "main",
            style: null,
            children: null
          }
        ]
      }
    ]
  }
];

//<el-container>
//<el-header>Header</el-header>
//<el-container>
//  <el-aside width="200px">Aside</el-aside>
//  <el-main>Main</el-main>
//</el-container>
//</el-container>
