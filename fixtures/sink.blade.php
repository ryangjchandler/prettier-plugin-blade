<h1>Cool stuff</h1>
<div>cool</div>
{{ $test }}

@if ($test)
    <h1>Cool stuff</h1>
@endif

<h1>How about this supppppppppppppppppppppppppppppppppppppppppppppppppper long line here {{ $cool }}</h1>
@error('test') {{ $message }} @enderror
