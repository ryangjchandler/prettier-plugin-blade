@unless (is_null($planting))
@empty ($planting->crop)
      Create custom crop.
@elseif ($planting->crop->isCustom())
  <x-dropdown-button

    />

@else
  <x-dropdown-button

    />
@endempty
@endunless
----
@unless (is_null($planting))
    @empty($planting->crop)
        Create custom crop.
    @elseif ($planting->crop->isCustom())
        <x-dropdown-button />
    @else
        <x-dropdown-button />
    @endempty
@endunless
