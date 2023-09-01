// Allow all functions except the http family and crypto::md5()
$ surreal start --allow-funcs --deny-funcs "http","crypto::md5"

// Allow certain custom functions only (all custom functions start with "fn::")
$ surreal start --allow-funcs "fn::shared_fn"
