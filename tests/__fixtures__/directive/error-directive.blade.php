<label for="title">Post Title</label>

<input id="title" type="text" class="
@error('title')
        is-invalid
@enderror
">

@error ('title')<div class="alert alert-danger">{{ $message }}</div>  @enderror
----
<label for="title">Post Title</label>

<input
    id="title"
    type="text"
    class="@error('title') is-invalid @enderror"
/>

@error("title")
    <div class="alert alert-danger">{{ $message }}</div>
@enderror
