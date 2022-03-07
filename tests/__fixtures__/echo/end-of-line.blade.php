Regression: braces need to work even when they're at the end of a line. Note
that use of the `empty` directive is only to ensure we "format" the braces onto
a line of their own.

@empty(false)
    {{$abc}}
@endempty

@empty(false)
    And like this {{$abc}}
@endempty

@empty(false)
    {{$abc}} and I suppose like this, just to be safe
@endempty

@empty(false)
    and this {!! $abc !!}
@endempty

@empty(false)
    don't forget this {{-- $abc --}}
@endempty

@empty(false)
    this too @{{ $abc }}
@endempty

@empty(false)
    oh and also @{!! $abc !!}
@endempty

----
Regression: braces need to work even when they're at the end of a line. Note
that use of the `empty` directive is only to ensure we "format" the braces onto
a line of their own.

@empty(false)
    {{ $abc }}
@endempty

@empty(false)
    And like this {{ $abc }}
@endempty

@empty(false)
    {{ $abc }} and I suppose like this, just to be safe
@endempty

@empty(false)
    and this {!! $abc !!}
@endempty

@empty(false)
    don't forget this {{-- $abc --}}
@endempty

@empty(false)
    this too @{{ $abc }}
@endempty

@empty(false)
    oh and also @{!! $abc !!}
@endempty
