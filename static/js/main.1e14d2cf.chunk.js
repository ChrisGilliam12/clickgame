(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Owl","image":"http://clipart-library.com/images/pc585nEqi.jpg","count":0},{"id":2,"name":"Tiger","image":"http://clipart-library.com/images/rcjGgBKdi.png","count":0},{"id":3,"name":"Moose","image":"http://clipart-library.com/images/8c68R9rEi.jpg","count":0},{"id":4,"name":"Chicken","image":"http://clipart-library.com/images/kiKB87aeT.jpg","count":0},{"id":5,"name":"Turkey","image":"http://clipart-library.com/images/pcq8qn7Ki.jpg","count":0},{"id":6,"name":"Lion","image":"http://clipart-library.com/images/kTKBeL7jc.png","count":0},{"id":7,"name":"Panda","image":"http://clipart-library.com/images/yTkA6Ejpc.jpg","count":0},{"id":8,"name":"Monkey","image":"http://clipart-library.com/images/Lidokjq8T.jpg","count":0},{"id":9,"name":"Sheep","image":"http://clipart-library.com/images/BcaKKMBdi.jpg","count":0},{"id":10,"name":"Beaver","image":"http://clipart-library.com/images/AibKqay8T.jpg","count":0},{"id":11,"name":"Goat","image":"http://clipart-library.com/images/zcXednKoi.jpg","count":0},{"id":12,"name":"Rhino","image":"http://clipart-library.com/images/dT9breaT7.png","count":0}]')},,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(3),r=a.n(n),o=(a(14),a(4)),s=a(5),m=a(7),l=a(6),u=a(8),g=(a(15),function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))}),p=(a(16),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),h=(a(17),function(e){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"title"},e.children),i.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore))}),d=a(1),f=(a(18),function(e){function t(){var e,a;Object(o.a)(this,t);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={cards:d,score:0,highscore:0},a.gameOver=function(){return a.state.score>a.state.highscore&&a.setState({highscore:a.state.score},(function(){console.log(this.state.highscore)})),a.state.cards.forEach((function(e){e.count=0})),alert("Game Over :( \nscore: ".concat(a.state.score)),a.setState({score:0}),!0},a.clickCount=function(e){a.state.cards.find((function(t,c){if(t.id===e){if(0===d[c].count)return d[c].count=d[c].count+1,a.setState({score:a.state.score+1},(function(){console.log(this.state.score)})),a.state.cards.sort((function(){return Math.random()-.5})),!0;a.gameOver()}}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(p,null,i.a.createElement(h,{score:this.state.score,highscore:this.state.highscore},"Clicky Game"),this.state.cards.map((function(t){return i.a.createElement(g,{clickCount:e.clickCount,id:t.id,key:t.id,image:t.image})})))}}]),t}(c.Component));r.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.1e14d2cf.chunk.js.map