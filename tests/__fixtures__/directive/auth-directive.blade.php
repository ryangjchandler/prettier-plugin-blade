@auth("admin")The user is authenticated...@endauth

@auth The user is authenticated... @endauth

@guest('admin') The user is not authenticated... @endguest

@guest The user is not authenticated... @endguest
----
@auth("admin")
    The user is authenticated...
@endauth

@auth
    The user is authenticated...
@endauth

@guest("admin")
    The user is not authenticated...
@endguest

@guest
    The user is not authenticated...
@endguest
