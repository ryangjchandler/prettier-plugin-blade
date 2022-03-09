{{ $foo ->bar(  ) }}

{{
  $abc
    ->def()
}}

{{ fizz()->buzz()->fuzz() }}

{{
  abc()
  ->def()
    ->ghi()
}}
----
{{ $foo->bar() }}

{{ $abc->def() }}

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
