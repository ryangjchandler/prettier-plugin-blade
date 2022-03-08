<input type="checkbox"
        name="active"
        value="active"
        @checked(old('active', $user->active)) />

<select name="version">
    @foreach ($product->versions as $version)
        <option value="{{ $version }}" @selected(old('version') == $version)>
            {{ $version }}
        </option>
    @endforeach
</select>

<button type="submit" @disabled($errors->isNotEmpty())>Submit</button>
----
<input
    type="checkbox"
    name="active"
    value="active"
    @checked(old("active", $user->active))
/>

<select name="version">
    @foreach ($product->versions as $version)
        <option value="{{ $version }}" @selected(old("version") == $version)>
            {{ $version }}
        </option>
    @endforeach
</select>

<button type="submit" @disabled($errors->isNotEmpty())>Submit</button>
