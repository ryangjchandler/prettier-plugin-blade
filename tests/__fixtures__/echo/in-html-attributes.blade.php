<x-self-closing-tag
:model="$model"
    :visible-data-here="$visibleDataHere"
{{ $attributes }}
/>

<div x-data="initModal()"
    x-init="[
        modalOnClose(() => { {!! $onClose !!} }),
        $watch('show', show => onShowOrClose(show))
    ]"
  {{ $attributes }}
>
  {{ $slot }}
</div>
----
<x-self-closing-tag
    :model="$model"
    :visible-data-here="$visibleDataHere"
    {{ $attributes }}
/>

<div
    x-data="initModal()"
    x-init="[
        modalOnClose(() => { {!! $onClose !!} }),
        $watch('show', show => onShowOrClose(show))
    ]"
    {{ $attributes }}
>
    {{ $slot }}
</div>
