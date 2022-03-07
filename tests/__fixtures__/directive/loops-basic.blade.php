@for ($i = 0; $i < 10; $i++)
    The current value is {{ $i }}
@endfor

@for ($u = User::where(["role" => "peon"])->with("boss")->first(); isset($u); $u = $u->boss())
    Name: {{ $u->name}} <br>
@endfor

@while ( true )
    <p>I'm looping forever.</p>
@endwhile
----
@for ($i = 0; $i < 10; $i++)
    The current value is {{ $i }}
@endfor

@for (
    $u = User::where(["role" => "peon"])
        ->with("boss")
        ->first();
    isset($u);
    $u = $u->boss()
)
    Name: {{ $u->name }} <br />
@endfor

@while (true)
    <p>I'm looping forever.</p>
@endwhile
