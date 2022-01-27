<h1>
    @if( true      )
        goood
    @endif


    @if( "test"
        === "test"
)
baaad
    @endif
</h1>
----
<h1>
    @if(true)
        goood
    @endif

    @if("test" === "test")
        baaad
    @endif
</h1>
