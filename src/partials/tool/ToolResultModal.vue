<i18n>
{
  "ja": {
    "text01": "確認ウィンドウを閉じる",
    "text02": "ご注意",
    "text03": "ここから先は",
    "text04": "備蓄ナビえちぜんが管理・運営するサイトではありません",
    "text05": " ",
    "text06": " ",
    "text07": "ページを移動する"
  },
  "en": {
    "text01": "Close the window.",
    "text02": "Attention",
    "text03": "If you click \"Agree and move page\", you will be taken to a site ",
    "text04": "that is not managed or operated by Bichikunavi Echizen.",
    "text05": " ",
    "text06": " ",
    "text07": "Move page"
  }
}
</i18n>
<template>
  <modal class="ToolResult__modal" :name="`${siteName}${id}`" :adaptive="true">
    <div class="ToolResult__modalClose">
      <button @click="() => $modal.hide(`${siteName}${id}`)">
        <span class="_visuallyHidden">{{ $t('text01') }}</span>
      </button>
    </div>

    <div class="ToolResult__modalTitle">{{ $t('text02') }}</div>

    <ul class="ToolResult__modalTextList">
      <li>
        {{ $t('text03') }}<span>{{ $t('text04') }}</span>
      </li>
    </ul>

    <a
      class="ToolResult__modalLink"
      :href="`${url}`"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ $t('text07') }}
    </a>
  </modal>
</template>

<script>
export default {
  name: 'ToolResultModal',
  props: {
    id: {
      type: Number,
      required: true,
    },
    siteName: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>
