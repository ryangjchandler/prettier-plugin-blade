@isset($records)
    works
    @guest The user is not authenticated... @endguest
@endisset
----
@isset($records)
    works
    @guest
        The user is not authenticated...
    @endguest
@endisset
