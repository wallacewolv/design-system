import{j as e}from"./index-6S-cJZT5.js";function i({tokens:d,hasRemValue:r=!1,enableSamplePixel:t=!1}){return e.jsxs("table",{className:"tokens-grid",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Value"}),r&&e.jsx("th",{children:"Pixels"}),t&&e.jsx("th",{})]})}),e.jsx("tbody",{children:Object.entries(d).map(([n,s])=>e.jsxs("tr",{children:[e.jsxs("td",{children:["$",n]}),e.jsx("td",{children:s}),r&&e.jsxs("td",{children:[Number(s.replace("rem",""))*16,"px"]}),t&&e.jsx("td",{className:"sample-pixel-token",children:e.jsx("div",{style:{width:s}})})]},n))})]})}i.__docgenInfo={description:"",methods:[],displayName:"TokensGrid",props:{tokens:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},hasRemValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},enableSamplePixel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{i as T};
