<x-view x="X" :y="'Y'">
<x-slot name="Name">
            <div>Named Slot</div></x-slot>

<x-slot:trigger>
                <div>Trigger Slot</div>
    </x-slot:trigger><x-slot:footer>
<div>Footer Slot</div>
</x-slot>
<div>
        Default Slot</div>
        </x-view>
----
<x-view x="X" :y="'Y'">
    <x-slot:Name>
        <div>Named Slot</div>
    </x-slot:Name>

    <x-slot:trigger>
        <div>Trigger Slot</div>
    </x-slot:trigger>

    <x-slot:footer>
        <div>Footer Slot</div>
    </x-slot:footer>
    
    <div>Default Slot</div>
</x-view>
