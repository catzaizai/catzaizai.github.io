$(function(){
   $("#navBar").navToggle();
   $("header").headerToggle();
});

// json lambda select

Array.prototype.where = function(f){
   var fn = f;
   if(typeof f == 'string'){
      if((fn=lambda(fn)) == null){
         throw "Syntax error in lambda string: "+ f;
      }
   }
};

function lambda(l){
   var fn = l.match(/\((.*)\)\s*=>\s*(.*)/);
   var p = [];
   var b = "";
   if(fn.length > 0) fn.shift();
   if(fn.length > 0) b = fn.pop();
   if(fn.length > 0) p = fn.pop().replace(/^\s*|\s(?=\s)|\s*$|,/g, '') + b;

   fn = (( !/\s*return\s+/.test(b)) ? "return ": "")+ b;
   p.push(fn);

   try{
      return Function.apply({}, p);
   }
   catch(e){
      return null;
   }
}