@isset($records)
    works
    @isset($other)also works@endisset
@endisset
----
@isset($records)
    works
    @isset($other)
        also works
    @endisset
@endisset
