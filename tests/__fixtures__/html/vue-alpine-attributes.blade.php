<div
  x-show="show"
      x-cloak
  @click="show = false"
  @blur.stop="show = true"
      class="absolute inset-0 bg-black bg-opacity-50"
></div>
----
<div
    x-show="show"
    x-cloak
    @click="show = false"
    @blur.stop="show = true"
    class="absolute inset-0 bg-black bg-opacity-50"
></div>
