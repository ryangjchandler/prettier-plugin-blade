@disk('local')
local!
@elsedisk('s3')
    s3!
@else not sure?@enddisk

@unlessdisk('local')something not local@enddisk

----
@disk('local')
    local!
@elsedisk('s3')
    s3!
@else
    not sure?
@enddisk

@unlessdisk('local')
    something not local
@enddisk
