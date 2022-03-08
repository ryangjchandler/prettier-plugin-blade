<div>
    @include('shared.errors')

    <form>
        <!-- Form Contents -->
    </form>
</div>

@include('view.name', ['status' => 'complete'])

@includeIf('view.name', ['status' => 'complete'])

@includeWhen($boolean, 'view.name', ['status' => 'complete'])

@includeUnless($boolean, 'view.name', ['status' => 'complete'])

@includeFirst(['custom.admin', 'admin'], ['status' => 'complete'])
----
<div>
    @include("shared.errors")

    <form>
        <!-- Form Contents -->
    </form>
</div>

@include("view.name", ["status" => "complete"])

@includeIf("view.name", ["status" => "complete"])

@includeWhen($boolean, "view.name", ["status" => "complete"])

@includeUnless($boolean, "view.name", ["status" => "complete"])

@includeFirst(["custom.admin", "admin"], ["status" => "complete"])
