(function(){var e={series:[{data:[{x:"New Delhi",y:218},{x:"Kolkata",y:149},{x:"Mumbai",y:184},{x:"Ahmedabad",y:55},{x:"Bangaluru",y:84},{x:"Pune",y:31},{x:"Chennai",y:70},{x:"Jaipur",y:30},{x:"Surat",y:44},{x:"Hyderabad",y:68},{x:"Lucknow",y:28},{x:"Indore",y:19},{x:"Kanpur",y:29}]}],legend:{show:!1},chart:{height:350,type:"treemap"},colors:["#8e54e9"]},a=new ApexCharts(document.querySelector("#treemap-basic"),e);a.render();var e={series:[{name:"Desktops",data:[{x:"ABC",y:10},{x:"DEF",y:60},{x:"XYZ",y:41}]},{name:"Mobile",data:[{x:"ABCD",y:10},{x:"DEFG",y:20},{x:"WXYZ",y:51},{x:"PQR",y:30},{x:"MNO",y:20},{x:"CDE",y:30}]}],colors:["#8e54e9","#4876e6"],legend:{show:!1},chart:{height:350,type:"treemap"}},a=new ApexCharts(document.querySelector("#treemap-multi"),e);a.render();var e={series:[{data:[{x:"New Delhi",y:218},{x:"Kolkata",y:149},{x:"Mumbai",y:184},{x:"Ahmedabad",y:55},{x:"Bangaluru",y:84},{x:"Pune",y:31},{x:"Chennai",y:70},{x:"Jaipur",y:30},{x:"Surat",y:44},{x:"Hyderabad",y:68},{x:"Lucknow",y:28},{x:"Indore",y:19},{x:"Kanpur",y:29}]}],legend:{show:!1},chart:{height:350,type:"treemap"},colors:["#8e54e9","#a65e76","#f5b849","#a66a5e","#a65e9a","#26bf94","#e6533c","#49b6f5","#5b67c7","#2dce89","#EF6537","#8c9097"],plotOptions:{treemap:{distributed:!0,enableShades:!1}}},a=new ApexCharts(document.querySelector("#treemap-distributed"),e);a.render();var e={series:[{data:[{x:"INTC",y:1.2},{x:"GS",y:.4},{x:"CVX",y:-1.4},{x:"GE",y:2.7},{x:"CAT",y:-.3},{x:"RTX",y:5.1},{x:"CSCO",y:-2.3},{x:"JNJ",y:2.1},{x:"PG",y:.3},{x:"TRV",y:.12},{x:"MMM",y:-2.31},{x:"NKE",y:3.98},{x:"IYT",y:1.67}]}],legend:{show:!1},chart:{height:350,type:"treemap"},dataLabels:{enabled:!0,style:{fontSize:"12px"},formatter:function(r,t){return[r,t.value]},offsetY:-4},plotOptions:{treemap:{enableShades:!0,shadeIntensity:.5,reverseNegativeShade:!0,colorScale:{ranges:[{from:-6,to:0,color:"#8e54e9"},{from:.001,to:6,color:"#4876e6"}]}}}},a=new ApexCharts(document.querySelector("#treemap-colorranges"),e);a.render()})();
