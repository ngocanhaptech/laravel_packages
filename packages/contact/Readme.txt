Contact 

Sending the email to config email.
Save contact in to database.

Setup menual:

- In composer.json/autoload-dev: add package as: '"Vccorp\\Contact\\": "packages/contact/src/"'
- Go to config/app, Push in to "providers" : '\Vccorp\Contact\ContactServiceProvider::class,'