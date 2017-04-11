/*
1) Printing Array elements with Comma delimiters
Link : http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
JavaScript:
*/

function printArray(array){
	return array.toString();
}
/*-----------------end of task -------------------------*/
  
/*  
2) Opposite number
Link : http://www.codewars.com/kata/opposite-number
JavaScript:
*/
function opposite(number) {
	if(isNaN(number) || !isFinite(number)){
		throw new TypeError(n + " is invalid");		
	}
  return -number;
}
/*-----------------end of task -------------------------*/

/*
3) Basic Mathematical Operations
Link : http://www.codewars.com/kata/basic-mathematical-operations
JavaScript:
*/
function basicOp(operation, value1, value2)
{
  // Code
  var operatorFunction = {
    '+' : function(x, y) {
        return x + y;
    },
    '-' : function(x, y) {
        return x - y;
    },
    '*' : function(x, y) {
        return x * y;
    },
     '/' : function(x, y) {
        return x / y;
    }
    
};
  return operatorFunction[operation](value1, value2);
}
/*-----------------end of task -------------------------*/

/*
4) Transportation on vacation
Link : http://www.codewars.com/kata/transportation-on-vacation
JavaScript:
*/

var OFFERS = {3:20,7:50};
var RENT_PER_DAY = 40;
function rentalCarCost(d) {
  // Your solution here
  return (RENT_PER_DAY * d) - calculateDiscount(d);
}


function calculateDiscount(d){
  if(d >= 7){
    return OFFERS[7];
  }else if (d >= 3){
    return OFFERS[3];
  }
  return 0;
}
/*-----------------end of task -------------------------*/

/*
5) Calculating with Functions
Link : http://www.codewars.com/kata/calculating-with-functions
JavaScript:
*/

function calculate(num, fun) {
  if (fun == null) { return num; }
  else { return fun(num); }
}

function zero(operation) {
return calculate(0,operation);
}
function one(operation) {
return calculate(1,operation);
}
function two(operation) {
return calculate(2,operation);
}
function three(operation) {
return calculate(3,operation);
}
function four(operation) {
return calculate(4,operation);
}
function five(operation) {
return calculate(5,operation);
}
function six(operation) {
return calculate(6,operation);
}
function seven(operation) {
return calculate(7,operation);
}
function eight(operation) {
return calculate(8,operation);
}
function nine(operation) {
return calculate(9,operation);
}

function plus(digit) {
  return function(key) { return  key + digit; };
}
function minus(digit) {
return function(key) { return key - digit; };
}
function times(digit) {
return function(key) { return key * digit; };
}
function dividedBy(digit) {
return function(key) { return key / digit; };
}
/*-----------------end of task -------------------------*/


/*
6) Get the Middle Character
Link : http://www.codewars.com/kata/get-the-middle-character
JavaScript:
*/


function getMiddle(s)
{
  if(0 < s < 1000){
  if(s.length === 1){
  return s;
  }
   var mid = 0;
   var lent = s.length;
    if(lent % 2 === 0){
       mid = (lent/2) - 1;
       return s.substring(mid, (mid + 2));
    }else{
     mid = (lent - 1)/2;
     return s.substring(mid,(mid+1));
    }
  }
  return null;
}
/*-----------------end of task -------------------------*/

/*
7) Partition On
Link : http://www.codewars.com/kata/partition-on
JavaScript:
*/
// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
  var result = groupBy(items, pred);
  var temp = result[false].concat(result[true]);
  items.splice(0, items.length);
  for(var i in temp){
    items.push(temp[i]);
  }
	return result[false].length;
}

function groupBy(items, pred){
  var temp = {true:[],false:[]};
  items.forEach(function(item){
     temp[pred(item)].push(item);
  });
  return temp;
}

/*-----------------end of task -------------------------*/


/*
8) Word Count
Link : http://www.codewars.com/kata/word-count
JavaScript:
*/
function countWords(str) {
    str = str.trim();
    if(str.length>0){
      return str.split(/\s+/).length;
    }
  return 0;
  
}
/*-----------------end of task -------------------------*/

/*
9) Prefill an Array
Link : http://www.codewars.com/kata/prefill-an-array
JavaScript: */

function prefill(n, v) {
if(isNaN(n) || !isFinite(n) || (n % 1 !== 0) || n < 0 || ("boolean" == typeof n)){
throw new TypeError(n + " is invalid");
}
let ary = [];
  for(let i =0 ; i< n ; i++){
  ary.push(v);
  }
  return ary;
}
/*-----------------end of task -------------------------*/



/*
10) A function within a function
Link : http://www.codewars.com/kata/a-function-within-a-function
JavaScript:
*/


// return a function that returns n
function always (n) {
 return function (){ return n; };
}
/*-----------------end of task -------------------------*/

/*
11) Can you keep a secret?
Link : http://www.codewars.com/kata/can-you-keep-a-secret
JavaScript:
*/
function createSecretHolder(secret) {
  return {
  getSecret: function(){return secret;},
  setSecret: function(scrt){return secret = scrt;}
  };
}

/*
12) Closures and Scopes
Link : http://www.codewars.com/kata/closures-and-scopes
JavaScript:
*/


function createFunctions(n) {
  var callbacks = [];

  for (let i=0; i<n; i++) {
    callbacks.push(function() {
      return i;
    });
  }
  
  return callbacks;
}
/*-----------------end of task -------------------------*/


/*
13) Using closures to share class state
Link : http://www.codewars.com/kata/using-closures-to-share-class-state
JavaScript:
*/
// Let's make a Cat constructor!
var Cat = (function () {
  var catCount = 0, catAggWeight = 0;
  var cat = function(name, weight) {
    if(!name || !weight) {throw 'Must provide a name and a weight!';}
    catCount++;
    catAggWeight += weight;
    Object.defineProperty(this, 'weight', {set: function(v) {
      catAggWeight += v - weight;
      weight = v;
    }, get: function() {return weight;}});
  }
  cat.averageWeight = function() {
    return catAggWeight / catCount;
  }
  return cat;
}());
/*-----------------end of task -------------------------*/



/*
14) A Chain adding function
Link : http://www.codewars.com/kata/a-chain-adding-function
JavaScript:
*/


function add(n){
  var fn = function(x) {
    return add(n + x);
  };

  fn.valueOf = function() {
    return n;
  };

  return fn;
}
/*-----------------end of task -------------------------*/


/*
15) Function Cache
Link http://www.codewars.com/kata/function-cache
JavaScript:
*/
function cache(func) {
  var calls = {};
  return function() {
    var key = JSON.stringify(arguments);
    if (!(key in calls)) {
      calls[key] = func.apply(null, arguments);
    }
    return calls[key];
  };
}

/*-----------------end of task -------------------------*/

/*
16) Function composition
Link : http://www.codewars.com/kata/function-composition
JavaScript:
*/

function compose(f, g) {
  return function() {
    return f(g.apply(this, arguments));
  };
}

/*-----------------end of task -------------------------*/


/*
17) Function Composition
Link : http://www.codewars.com/kata/function-composition-1
JavaScript:
*/
function compose() {
  var funcs = arguments;
  return function(input) {
    var num = input;
    for ( var fid in funcs )
      num = funcs[funcs.length - fid - 1](num);
    return num;
  }
}



/*-----------------end of task -------------------------*/


/*
18) SantaClausable Interface
Link : Link: http://www.codewars.com/kata/santaclausable-interface
JavaScript:
*/

function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(meth => typeof obj[meth] === 'function');
}
/*-----------------end of task -------------------------*/

/*
19) new with apply
Link : http://www.codewars.com/kata/new-with-apply
JavaScript:
*/
function construct(Class) {
  var obj = Object.create(Class.prototype);
  Class.apply(obj, Array.prototype.slice.call(arguments, 1));  
  return obj;
}
/*-----------------end of task -------------------------*/


/*
20) Extract Nested Object Reference
Link: http://www.codewars.com/kata/extract-nested-object-reference
JavaScript:
*/
// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
  return string.split('.').reduce(function(p,n) {
    return p && p[n];
  }, this);
};

/*-----------------end of task -------------------------*/


/*
Array Helpers
Link : http://www.codewars.com/kata/array-helpers
JavaScript:
*/
// TODO

Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }

/*-----------------end of task -------------------------*/
