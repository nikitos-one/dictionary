<template>
  <div>
    <main-header></main-header>

<!--    <draggable v-model="list">-->
<!--      <transition-group>-->
<!--        <div v-for="element in list"-->
<!--             :key="element.id"-->
<!--             class="words-item"-->
<!--        >-->
<!--          <span class="words-item__word">{{element.name}}</span>-->
<!--          <span class="words-item__fl">lorem</span>-->
<!--          <span class="words-item__def">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet architecto corporis cupiditate error eveniet facere facilis iusto labore laborum, laudantium maxime molestias mollitia nisi nostrum porro rem rerum suscipit, ullam veniam voluptas voluptatem voluptatibus? Ad amet animi esse eum nam natus necessitatibus placeat porro quos, recusandae repudiandae sunt tempora.</span>-->

<!--          <span class="words-item__fav">-->
<!--            <v-icon color="error"-->
<!--                    @click="test"-->
<!--            >-->
<!--              mdi-alert-circle-->
<!--            </v-icon>-->
<!--          </span>-->
<!--        </div>-->
<!--      </transition-group>-->
<!--    </draggable>-->
    <div class="main-container">

      <div class="search-block">

        <v-text-field
            append-icon="mdi-magnify"
            label="Введите слово"
            solo
            hide-details
        ></v-text-field>

        <v-checkbox
            selected=""
            label="adjective"
            value="adjective"
            hide-details
        ></v-checkbox>
        <v-checkbox
            selected=""
            label="verb"
            value="verb"
            hide-details
        ></v-checkbox>
        <v-checkbox
            selected=""
            label="noun"
            value="noun"
            hide-details
        ></v-checkbox>
      </div>

      <div class="result-block">
        <v-expansion-panels>
          <draggable v-model="list">
            <transition-group>
              <v-expansion-panel v-for="(element, i) in list"
                                 :key="i"
              >
                <v-expansion-panel-header v-slot="{ open }"
                                          hide-actions
                >

                  <template>
                    <div class="words-item">
                      <div class="words-item__word">{{ element.name }}</div>
                      <div class="words-item__fl">Lorem2</div>

                      <div class="words-item__des">
                    <span v-if="!open">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                    </span>
                      </div>
                      <div class="words-item__fav">
                        <v-icon :color="element.fav ? 'blue' : ''"
                                @click="test($event, i)">
                          mdi-star
                        </v-icon>
                      </div>
                    </div>
                  </template>

                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-fade-transition leave-absolute>
                    <v-row no-gutters>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, amet dolores porro soluta sunt velit voluptatum. Consequatur nam ut veritatis!
                    </v-row>
                  </v-fade-transition>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </transition-group>
          </draggable>
        </v-expansion-panels>
      </div>

    </div>

  </div>
</template>
<script>

import Draggable from 'vuedraggable'
import MainHeader from './Header'

export default {
  name: 'Main',
  components: {
    Draggable,
    MainHeader
  },
  data() {
    return {
      enabled: true,
      list: [
        { name: "John", fav: true },
        { name: "Joao", fav: false },
        { name: "Jean", fav: false }
      ],
      dragging: false,
      params: {
        word: 'fre'
      }
    }
  },
  mounted() {
    this.$store.dispatch('getWords', this.params)
    console.log(this.$store.getters['getJsonData'])
  },
  methods: {
    test(event, key) {
      event.stopPropagation()
      this.list[key].fav = !this.list[key].fav
    }
  }
}
</script>

<style lang="sass">
  .main-container
    display: flex
  .search-block
    width: 20%
    min-width: 230px
    padding: 15px
  .result-block
    width: 80%
    padding: 15px
  .v-expansion-panels
    display: block !important
  .words-item
    display: flex
    & div
      padding: 0 10px
      line-height: 24px
      &:first-of-type
        padding-left: 0
      &:last-of-type
        padding-right: 0
    &__word
      font-weight: bold
    &__fl

    &__des
      width: 100%
    &__fav

</style>
