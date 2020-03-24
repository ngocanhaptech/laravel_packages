<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact Us</title>
</head>
<body>
    <h1>Contact us page</h1>
    <h2>Please send us your messages</h2>
    <form action="{{route('contact')}}" class="form" method="POST">
        @csrf
        <div class="form-group">
            <input type="text" class="form-control" name="name">
        </div>
        <div class="form-group">
            <input type="email" class="form-control" name="email">
        </div>
        <div class="form-group">
            <textarea class="form-control" name="message" cols="5"></textarea>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
</body>
</html>