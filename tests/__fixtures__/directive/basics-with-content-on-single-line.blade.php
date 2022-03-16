@auth ('admin') Hello! @endauth

@if ($test) How are you? @endif

@customif ('value') Goodbye! @endcustomif
----
@auth("admin")
    Hello!
@endauth

@if ($test)
    How are you?
@endif

@customif("value")
    Goodbye!
@endcustomif
