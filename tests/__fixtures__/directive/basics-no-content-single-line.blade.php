@auth ('admin') @endauth

@if ('test') @endif

@customif ('value') @endcustomif
----
@auth("admin") @endauth

@if ("test") @endif

@customif("value") @endcustomif
