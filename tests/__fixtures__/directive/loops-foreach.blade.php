@foreach (  $users     as
 $user

  )
                <p>This is user {{
$user->id
    }}</p>
@endforeach
----
@foreach ($users as $user)
    <p>This is user {{ $user->id }}</p>
@endforeach
