@php
$this->foo = $other->bar()->baz( )->buzz( 'abc'
);
@endphp
----
@php

$this->foo = $other
    ->bar()
    ->baz()
    ->buzz("abc");

@endphp
