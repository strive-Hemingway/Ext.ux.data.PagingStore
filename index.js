var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
    title       : 'Ext.ux.data.PagingStore Test Suite',
    preload     : [
	    { text : 'console.log("begin main preloading");' },
      "http://cdn.sencha.com/ext/gpl/5.0.0/build/ext-all-debug.js",
		  './Ext.ux.data.PagingStore.js',
	    { text : 'console.log("finishing preloading");' }
    ]
});

Harness.start(
  '01_ArrayPagingStoreTest.js',
	'02_JsonPagingStoreTest.js'
);