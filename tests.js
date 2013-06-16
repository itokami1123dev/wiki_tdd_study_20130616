test( "入力値が出力されるとOK", function() {
	equal( wiki('a'), 'a');
});

test( "=ではじめ=で終わるとh1タグでくくられるとOK", function() {
	equal( wiki('=test='), '<h1>test</h1>');
});

test( "==ではじめ==で終わるとh2タグでくくられるとOK", function() {
	equal( wiki('==test=='), '<h2>test</h2	>');
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

test( "¥= ¥=をエスケープとして表示でOK", function() {
	equal( wiki('¥= ¥='), '= =');
	equal( wiki('¥= TDD ¥='), '= TDD =');
	equal( wiki('¥= TDD ='), '= TDD =');
	equal( wiki('= TDD ¥='), '= TDD =');
});

test( "=aaaは=aaaでOK", function() {
	equal( wiki('=aaa'), '=aaa');
});

test( "aaa=はaaa=でOK", function() {
	equal( wiki('aaa='), 'aaa=');
});


