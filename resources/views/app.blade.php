<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" value="{{ csrf_token() }}" />
        <title>Laravel</title>        
        {{-- @vite('resources/sass/app.scss') --}}
    </head>
    <body>
        <div id="app"></div>
        @vite('resources/js/app.js')
        <script>
            var teste="Eu sou um teste"
        </script>
    </body>
</html>
