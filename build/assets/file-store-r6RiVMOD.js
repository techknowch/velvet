var e=document.getElementById("filestore");if(e!==null){e.innerHTML="";var a={series:[70],chart:{type:"radialBar",offsetY:-20,sparkline:{enabled:!0}},plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"80%",margin:5,dropShadow:{enabled:!1,top:2,left:0,opacity:1,blur:1}},dataLabels:{name:{show:!1},value:{offsetY:-2,fontSize:"22px"}}}},grid:{padding:{top:-10}},labels:["Average Results"]},r=new ApexCharts(document.querySelector("#filestore"),a);r.render()}
