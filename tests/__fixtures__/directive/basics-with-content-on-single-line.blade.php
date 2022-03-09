@auth ('admin') Hello! @endauth

@customif ('value') Goodbye! @endcustomif
----
@auth("admin")
    Hello!
@endauth

@customif("value")
    Goodbye!
@endcustomif
