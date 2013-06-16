test( "入力値が出力されるとOK", function() {
	equal( wiki('a'), 'a');
	equal( wiki('b'), 'b');
});

test( "=ではじめ=で終わるとh1タグでくくられるとOK", function() {
	equal( wiki('=test='), '<h1>test</h1>');
	equal( wiki('=test2='), '<h1>test2</h1>');
});

test( "= ではじめ =で終わるとh1タグでくくられるとOK", function() {
	equal( wiki('= test ='), '<h1>test</h1>');
	equal( wiki('= test2 ='), '<h1>test2</h1>');
});

test( "= *ではじめ *=で終わるとh1タグでくくられるとOK", function() {
	equal( wiki('=  test  ='), '<h1>test</h1>');
	equal( wiki('=   test2   ='), '<h1>test2</h1>');
});

test( "= =は<h1> </h1>でOK", function() {
	equal( wiki('= ='), '<h1></h1>');
	//equal( wiki('=   test2   ='), '<h1>test2</h1>');
});

/*
test( "3桁数字でOK", function() {
  equal( false, isZipCode('123') );
  equal( true, isZipCode('456') );
  equal( true, isZipCode(456) );
});

*/

