<template>
  <footer class="GlobalFooter">
    <div class="GlobalFooter__admin">
      <div>{{ $developper[$i18n.locale] }}</div>
      <div><a href="https://github.com/code4fukui/fukui-bichiku-navi">オープンソース (src on GitHub)</a></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'GlobalFooter',
}
</script>
