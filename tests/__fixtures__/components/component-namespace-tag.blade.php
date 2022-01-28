<x-view x="X" :y="'Y'">
<x-slot name="Name">
            <div>Named Slot</div></x-slot>
<div>
        Default Slot</div>
        </x-view>
----
<x-namespace::view x="X" :y="'Y'">
    <x-slot name="Name">
        <div>Named Slot</div>
    </x-slot>
    
    <div>Default Slot</div>
</x-namespace::view>
