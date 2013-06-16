test( "入力値が出力されるとOK", function() {
	equal( wiki('a'), 'a');
});

test( "=ではじめ=で終わるとh1タグでくくられるとOK", function() {
	equal( wiki('=test='), '<h1>test</h1>');
});

test( "= ではじめ =で終わるとh1タグでくくられるとOK", function() {
	equal( wiki('= test ='), '<h1>test</h1>');
});

test( "= *ではじめ *=で終わるとh1タグでくくられるとOK", function() {
	equal( wiki('=  test  ='), '<h1>test</h1>');
});

test( "= =は<h1> </h1>でOK", function() {
	equal( wiki('= ='), '<h1></h1>');
});

