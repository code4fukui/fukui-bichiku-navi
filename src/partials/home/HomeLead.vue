<i18n>
{
  "ja": {
    "title": "いつか来る災害に備えよう",
    "text01": "「災害に備えた備蓄」と聞いてもピンと来ない方や興味はあるけど何をどのくらい備蓄すれば良いか分からない方向けに、備蓄のイロハや備えておくと良い品目などをご紹介するサイトです。",
    "text02": "今すぐ備蓄を<br />始める！",
    "text03": "災害対策ゲーム<br />「サイガイクン」で学ぶ！",
    "text04": "備蓄品カードを<br>印刷して遊ぶ！",
    "text05": "越前市避難所マップを<br>見る！"
  },
  "en": {
    "title": "Prepare for the future disaster",
    "text01": "For some people, the words “stockpiling for possible disasters” do not ring a bell and, even those who are interested in stockpiling might find it difficult to figure out what and how much they should stockpile. Tokyo Stockpile Navi website provides an introductory explanation of stockpiling including items recommended for stockpiles.",
    "text02": "Start &quot;stockpiling&quot; NOW!",
    "text03": "Learn with \"Saigaikun\"<br />survival game!",
    "text04": "Play with Stockpile<br />card game!",
    "text05": "Open Hazard Map<br>in Echizen city!"
  }
}
</i18n>

<template>
  <div class="HomeLead PageBlock">
    <section class="Container -s">
      <img src="~/assets/images/title.png" style="width:90vw;">
      <h1 class="PageBlock__title">{{ $t('title') }}</h1>

      <div style="text-align: center;margin-top: 1em;">
        <img src="~/assets/images/mainchar.jpg" style="height:8em;">
      </div>

      <div class="Container -xs">
        <p class="PageBlock__text">
          {{ $t('text01') }}
        </p>
      </div>

<style>
.Button {
  background-color: #79CAD2 !important;
  color: white !important;
}
</style>


      <div class="HomeLead__button">
        <div class="Button -yellow -l">
          <nuxt-link
            class="Button__link"
            :to="localePath($getPath('tool'))"
            v-html="$t('text02')"
          />
        </div>
      </div>

      <div class="HomeLead__button">
        <div class="Button -yellow -l">
          <a
            class="Button__link"
            href="https://code4fukui.github.io/saigaikun/"
            v-html="$t('text03')"
          />
        </div>
      </div>

      <div class="HomeLead__button">
        <div class="Button -yellow -l">
          <a
            class="Button__link"
            href="opendata/card.html"
            v-html="$t('text04')"
          />
        </div>
      </div>

      <div class="HomeLead__button">
        <div class="Button -yellow -l">
          <a
            class="Button__link"
            href="https://code4fukui.github.io/echizencity-hazardmap/"
            v-html="$t('text05')"
          />
        </div>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeLead',
}
</script>
