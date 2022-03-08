@each('view.name', $jobs, 'job')

@each('view.name', $jobs, 'job', 'view.empty')
----
@each("view.name", $jobs, "job")

@each("view.name", $jobs, "job", "view.empty")
