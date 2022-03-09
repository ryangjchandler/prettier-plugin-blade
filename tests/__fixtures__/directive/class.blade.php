<span @class([
    'p-4',
    'font-bold' => $isActive,
    'text-gray-500' => ! $isActive,
    'bg-red' => $hasError,
])></span>
----
<span @class([
    "p-4",
    "font-bold" => $isActive,
    "text-gray-500" => !$isActive,
    "bg-red" => $hasError,
])></span>
