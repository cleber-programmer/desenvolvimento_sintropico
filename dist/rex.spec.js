Rex(function(R){

it('add',function(ok){
ok(/3/.test(R.add('1','2')),'("1", "2") → 3');
ok(/3/.test(R.add(1,'2')),'(1, "2") → 3');
ok(/1/.test(R.add(true,false)),'(true, false) → 1');
ok(/0/.test(R.add(null,null)),'(null, null) → 0');
ok(/0/.test(R.add(undefined,undefined)),'(undefined, undefined) → 0');
ok(/3/.test(R.add(new Date(1),new Date(2))),'(new Date(1), new Date(2)) → 3');
});

});
Rex(function(R){

it('always',function(ok){
ok(/42/.test(R.always(42)()),'(42)() → 42');
ok(/42/.test(R.always(42)(10)),'(42)(10) → 42');
ok(/42/.test(R.always(42)(10)),'(42)(false) → 42');
ok(/false/.test(R.always(false)()),'(false)() → false');
ok(/abc/.test(R.always('abc')()),'(abc)() → abc');
ok(/undefined/.test(R.always(undefined)()),'(undefined)() → undefined');
ok(/undefined/.test(R.always()(true)),'()(true) → undefined');
});
});
Rex(function(R){

it('apply',function(ok){
ok(/42/.test(R.apply(Math.max,1,2,3,-99,42,6,7)),'(Math.max, 1, 2, 3, -99, 42, 6, 7) → 42');
});

});
Rex(function(R){

it('concat',function(ok){
ok(/a,b,c,d/.test(R.concat(['a','b'],['c','d'])),'(["a", "b"], ["c", "d"]) → ["a", "b", "c", "d"]');
ok(/a,b,c,d,e/.test(R.concat(['a','b'],['c','d'],'e')),'(["a", "b"], ["c", "d"], "e") → ["a", "b", "c", "d", "e"]');
ok(/a,b,c,d,e/.test(R.concat('a','b','c','d','e')),'("a", "b", "c", "d", "e") → ["a", "b", "c", "d", "e"]');
});

});
Rex(function(R){

it('cond',function(ok){

var fn=R.cond(
[R.equals(0,R._),R.always('water freezes at 0°C')],
[R.equals(100,R._),R.always('water boils at 100°C')],
[R.t,function(temp){return'nothing special happens at '+temp+'°C';}]);


ok(/water freezes at 0°C/.test(fn(0)),'Retorna primeiro item da cadeia');
ok(/water boils at 100°C/.test(fn(100)),'Retorna o segundo item da cadeia');
ok(/nothing special happens at 50°C/.test(fn(50)),'Retorna o ultimo item da cadeia');

});

});


Rex(function(R){

it('f',function(ok){
ok(/false/.test(R.f()),'Retorna falso');
ok(/false/.test(R.f(10)),'Retorna falso mesmo passando um valor');
ok(/false/.test(R.f(true)),'Retorna falso mesmo passando verdadeiro');
});

});
Rex(function(R){

it('t',function(ok){
ok(/true/.test(R.t()),'Retorna true');
ok(/true/.test(R.t(10)),'Retorna true mesmo passando um valor');
ok(/true/.test(R.t(true)),'Retorna true mesmo passando verdadeiro');
});

});
//# sourceMappingURL=rex.spec.js.map
