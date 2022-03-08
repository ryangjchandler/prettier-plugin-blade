<script>
    {{-- This is a blade comment. --}}
    var foo = @js ($bar);
    var buzz = @js( 'baz'    );
    var fuzz = '{{ '8' }}'
    var frizz = {{ 9 }};
</script>
----
<script>
    {{-- This is a blade comment. --}}
    var foo = @js($bar);
    var buzz = @js("baz");
    var fuzz = "{{ "8" }}";
    var frizz = {{ 9 }};
</script>
