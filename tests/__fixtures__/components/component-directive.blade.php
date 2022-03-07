@component('view')
        @slot('name', 'value')
@slot('name2', true)
    @slot('name3')
            <div>Name3 Slot</div>@endslot

    <div>Default Slot</div>
        @endcomponent
----
@component("view")
    @slot("name", "value")
    @slot("name2", true)
    @slot("name3")
        <div>Name3 Slot</div>
    @endslot

    <div>Default Slot</div>
@endcomponent
