@forelse (
  $users
  as
  $user
)
    <li>{{
$user->name
}}</li>
{{-- FIXME this test fails b/c @empty is only recognized as @empty(...) ... @endempty --}}
@empty
<p>No users</p>
@endforelse
----
@forelse ($users as $user)
    <li>{{ $user->name }}</li>
@empty
    <p>No users</p>
@endforelse
