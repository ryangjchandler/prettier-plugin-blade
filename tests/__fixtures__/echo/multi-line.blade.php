<div>{{ $foo ->bar(  ) }}</div>

<div>{{
    $abc
      ->def()
  }}</div>

{{ fizz()->buzz()->fuzz() }}

{{
  abc()
  ->def()
    ->ghi()
}}
----
<div>{{ $foo->bar() }}</div>

<div>{{ $abc->def() }}</div>

{{
    fizz()
        ->buzz()
        ->fuzz()
}}

{{
    abc()
        ->def()
        ->ghi()
}}
