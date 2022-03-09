<div>This {{$a}} line is short {{$b}}.</div>
<div>This {{$a}} line is longer {{$b}} but still fits on one line {{$c}}.</div>
<div>This {{$ab}} line is longer {{$cd}} and doesn't quite fit on one {{$ef}}.</div>
<div>Here we want to make sure {{$thatThisVariableWrapsBecauseItIsRidiculouslyLong}}.</div>
----
<div>This {{ $a }} line is short {{ $b }}.</div>
<div>
    This {{ $a }} line is longer {{ $b }} but still fits on one line {{ $c }}.
</div>
<div>
    This {{ $ab }} line is longer {{ $cd }} and doesn't quite fit on one
    {{ $ef }}.
</div>
<div>
    Here we want to make sure
    {{ $thatThisVariableWrapsBecauseItIsRidiculouslyLong }}.
</div>
