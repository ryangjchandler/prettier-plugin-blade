@inject ('metrics', 'App\Services\MetricsService'
)

<div>
    Monthly Revenue: {{ $metrics->monthlyRevenue() }}.
</div>
----
@inject('metrics', 'App\Services\MetricsService')

<div>
    Monthly Revenue: {{ $metrics->monthlyRevenue() }}.
</div>